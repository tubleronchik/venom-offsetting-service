pragma ton-solidity 0.47.0;
import './common/Object.sol';

contract Operated is Object {
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
