pragma ever-solidity >= 0.61.2;
import './ERC20Burnable.sol';


contract ERC20ACL is ERC20Burnable {
    mapping (address => bool) canMint;

    constructor(string _name, string _symbol, uint8 _decimals,
                           uint _start_count) public
            ERC20Burnable(_name, _symbol, _decimals, _start_count)
    {tvm.accept();}

    function addMinter(address _minter) public onlyOwner {
        canMint[_minter] = true;
    } 

    function emission(uint _value) public override {
        require(canMint[msg.sender]);

        totalSupply     += _value;
        balances[msg.sender] += _value;
    }
}