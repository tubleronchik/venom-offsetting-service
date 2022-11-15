pragma ton-solidity 0.47.0;

import './Owned.sol';

contract Billing is Owned {
    address public taxman;
    address public beneficiary;
    mapping(address => int256) public balances;

    constructor (address _taxman, address _beneficiary) public {
        tvm.accept();

        taxman = _taxman;
        beneficiary = _beneficiary;
    }

    /**
     * @dev Take a fee from account in postpayment scheme
     * @param _account Client account
     * @param _fee Payment value
     */
    function serviceFee(address _account, uint256 _fee) public { 
        require(msg.sender == taxman);
        balances[_account] -= int256(_fee);
    }

    /**
     * @dev Make a postpayment
     */
    function payment() public {
        beneficiary.transfer(msg.value);
        balances[msg.sender] += int256(msg.value);
    }
}
