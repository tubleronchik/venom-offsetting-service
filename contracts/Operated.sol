pragma ever-solidity >= 0.61.2;
import './Owned.sol';
contract Operated is Owned {
    // Contract operator
    address public operator;

    /**
     * @dev Operated contract constructor
     * @param _operator is a operator address
     */
    constructor(address _operator) public {   
        tvm.accept();
        operator = _operator; 
    }

    modifier onlyOperator { require(msg.sender == operator); _; }
}