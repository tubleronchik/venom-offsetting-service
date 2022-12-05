pragma ever-solidity >= 0.61.2;

/**
 * @title Contract for object that have an owner
 */
import "locklift/src/console.sol";

contract Owned {
    /**
     * Contract owner address
     */
    address public owner;

    constructor() public {
        tvm.accept();
        owner = msg.sender;
    }

    /**
     * @dev Delegate contract to another person
     * @param _owner New owner address 
     */
    function setOwner(address _owner) public onlyOwner
    { owner = _owner; }

    function getOwner() external view responsible returns(address) {
        tvm.accept();
        console.log(format('msg pubkey: {}', msg.pubkey()));
        console.log(format('tvm pubkey: {}', tvm.pubkey()));
        return{value: 0, bounce: false, flag: 64} owner;
    }

    /**
     * @dev Owner check modifier
     */
    modifier onlyOwner { require(msg.sender == owner); _; }
}
