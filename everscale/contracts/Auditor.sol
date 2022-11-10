pragma ton-solidity 0.47.0;
import 'ERC20/ERC20Burnable.sol';
import './InsuranceHolder.sol';
import './Operated.sol';

contract Auditor is Operated {
    // Operated token
    ERC20Burnable public token;

    // Emission current value
    uint public emissionValue;

    // Emission limit
    uint public emissionLimit;

    // Hold percent of emission
    uint public holdPercentage;
    
    // Address of insurance contract
    InsuranceHolder public insuranceHolder;

    address public tokenOwner;

    /**
     * @dev Auditor contract constructor
     * @param _operator is an operator if this auditor
     * @param _token is an associated issuer token
     * @param _holder is an issurance holder address
     */
    constructor(address _operator,
                     address _token,
                     address _holder,
                     address _tokenOwner) Operated(_operator) public {
        // null check
        require(_operator != address(0) && _token != address(0) && _holder != address(0));
        tvm.accept();

        token = ERC20Burnable(_token);
        insuranceHolder = InsuranceHolder(_holder);
        tokenOwner = _tokenOwner;
    }

    /**
     * @dev Auditor limit setter
     * @param _limit is a new limit value
     */
    function setEmissionLimit(uint _limit) public onlyOperator
    { emissionLimit = _limit; }

    /**
     * @dev Auditor hold percentage setter
     * @param _hold is a new hold percent
     */
    function setHoldPercentage(uint _hold) public onlyOperator {
        // Assertion for % value
        require(_hold <= 100);

        holdPercentage = _hold;
    }

    /**
     * @dev Auditor emission
     * @param _value is a emission value
     */
    function emission(uint _value) public onlyOwner {
        // Overflow check
        require(emissionValue + _value >= emissionValue);

        emissionValue += _value;
        // Limit checking
        require(emissionValue <= emissionLimit);

        // Emission
        token.emission(_value);

        // Hold
        if (holdPercentage > 0) {
            uint256 holdValue = _value * holdPercentage / 100;
            token.approve(insuranceHolder, holdValue);
            insuranceHolder.transfer(holdValue);
        }
    }

    /**
     * @dev Transfer to issuer
     * @param _value is a transfer value
     */
    function transfer(uint _value) public onlyOwner
    { token.transfer(tokenOwner, _value); }
}
