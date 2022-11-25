pragma ever-solidity >= 0.61.2;
import './ERC20.sol';
import '../ACL.sol';

contract ERC20Burnable is ERC20 {

    ACL public acl;
    uint256 public lastEmissionValue;
    address public lastAuditor;
    constructor(string _name, string _symbol, uint8 _decimals,
                           uint _start_count, address _acl) public
             ERC20(_name, _symbol, _decimals, _start_count)
    {
        tvm.accept();
        acl = ACL(_acl);
    }

    /**
     * @dev Token emission
     * @param _value amount of token values to emit
     * @notice owner balance will be increased by `_value`
     */
    function emission(uint _value) public virtual onlyOwner {
        
        acl.isAuditor{callback: onGetIsAuditor}(msg.sender);
        lastEmissionValue = _value;
        lastAuditor = msg.sender;

    }

    function onGetIsAuditor(bool isAuditor) public {
        require(msg.sender == address(acl));
        require(isAuditor);

        totalSupply     += lastEmissionValue;
        balances[lastAuditor] += lastEmissionValue;
    }
 
    /**
     * @dev Burn the token values from sender balance and from total
     * @param _value amount of token values for burn 
     * @notice sender balance will be decreased by `_value`
     */
    function burn(uint _value) public {
        if (balances[msg.sender] >= _value) {
            balances[msg.sender] -= _value;
            totalSupply      -= _value;
        }
    }
}
