pragma ever-solidity >= 0.61.2;

import './ERC20/ERC20Burnable.sol';
import './Owned.sol';

contract TokenFactory is Owned {
    mapping(address => bool) public isAuditor;

    TvmCell static tokenCode_;

    function addAuditor(address _auditor) public onlyOwner {
        isAuditor[_auditor] = true;
    }

    function removeAuditor(address _auditor) public onlyOwner {
        isAuditor[_auditor] = false;
    }

    function deployToken(string _name, string _symbol, uint8 _decimals,
                           uint _start_count, uint128 deployValue) public 
    {
        require(isAuditor[msg.sender]);

        new ERC20Burnable{
            value: deployValue,
            code: tokenCode_
        }(_name, _symbol, _decimals,
                        _start_count, msg.sender);
    }
}