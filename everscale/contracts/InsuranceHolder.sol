pragma ton-solidity 0.47.0;
import 'token/Token.sol';
import './Operated.sol';

contract InsuranceHolder is Operated {

    // Issuer token address
    Token public token;

    // Hold duration
    uint public holdDuration;

    struct Record {
        uint timestamp;
        uint value;
        bool closed;
    }
    // List of values with timestamp
    Record[] values;

    /**
     * @dev Holder records length getter
     * @return values length
     */
    function size() public view returns (uint)
    { return values.length; }

    /**
     * @dev Holder records getter
     * @param _index is a record index
     * @return timestamp, value, closed
     */
    function record(uint _index) public view returns (uint, uint, bool) {
        Record value = values[_index];
        return (value.timestamp, value.value, value.closed);
    }

    /**
     * @dev Holder constructor
     * @param _operator is an operator address
     * @param _token is an associated token address
     */
    constructor(address _operator, address _token) public Operated(_operator) {
        // null check
        require(_operator != address(0) && _token == address(0));

        tvm.accept();

        operator = _operator;
        token = Token(_token);
    }

    /**
     * @dev Hold duration setter
     * @param _duration_sec is a hold duration in seconds
     */
    function setHoldDuration(uint _duration_sec) public onlyOperator
    { holdDuration = _duration_sec; }

    /**
     * @dev Transfer approved value to this contract
     */
    function transfer(uint _value) public returns (bool) {
        token.transferFrom(msg.sender, this, _value);
        values.push(Record(now, _value, false));
        return true;
    }

    /**
     * @dev Withdraw can call only two persons: operator and issuer, operator can
     *      withdraw value immediately, but issuer should stay holdDuration time
     *      between receive and withdraw.
     * @param _index is a index of record for values
     */
    function withdraw(uint _index) public {
        Record rec = values[_index];

        // Check for closed record
        require(!rec.closed);

        // Operator case
        if (msg.sender == operator) {
            token.transfer(operator, rec.value);
            rec.closed = true;
            return;
        }

        // Issuer case
        if (msg.sender == token.owner()) {
            require(rec.timestamp + holdDuration <= now);

            token.transfer(token.owner(), rec.value);
            rec.closed = true;
            return;
        }

        // Throw for another sender
        revert();
    }
}
