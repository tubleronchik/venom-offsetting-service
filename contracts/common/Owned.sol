pragma ton-solidity 0.47.0;

/**
 * @title Contract for object that have an owner
 */
contract Owned {
    /**
     * Contract owner address
     */
    address public owner_;

    /**
     * @dev Delegate contract to another person
     * @param _owner New owner address 
     */
    function setOwner(address _owner) public onlyOwner
    { owner_ = _owner; }

    /**
     * @dev Owner check modifier
     */
    modifier onlyOwner { require(msg.sender == owner_); _; }

    function owner() public view responsible returns (address) {
        return owner;
    }
}
