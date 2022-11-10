pragma ton-solidity 0.47.0;
import './ERC20.sol';

contract ERC20Burnable is ERC20 {
    constructor(string _name, string _symbol, uint8 _decimals,
                           uint _start_count) public
             ERC20(_name, _symbol, _decimals, _start_count)
    {tvm.accept();}

    /**
     * @dev Token emission
     * @param _value amount of token values to emit
     * @notice owner balance will be increased by `_value`
     */
    function emission(uint _value) public onlyOwner {
        // Overflow check
        if (_value + totalSupply < totalSupply) revert();

        totalSupply     += _value;
        balances[owner] += _value;
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
