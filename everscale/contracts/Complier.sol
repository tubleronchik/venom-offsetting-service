pragma ton-solidity 0.47.0;
import './Owned.sol';
import 'ERC20/ERC20Burnable.sol';

contract Complier is Owned {
    // Total burned value
    mapping(address => uint) public burnedValueOf;

    ERC20Burnable lastCalledToken;
    uint256 burnValue;

    /**
     * @dev Burn self balanced token values
     * @param _token is a token address
     * @param _value is a how amount token values need to burn
     */
    function burn(ERC20Burnable _token, uint256 _value) public onlyOwner {
        _token.balanceOf{callback: onGetBalance}(this);
        lastCalledToken = _token;
        burnValue = _value;
    }

    function onGetBalance(uint256 _balance) public {
        require(msg.sender == address(lastCalledToken));
        require(_balance >= burnValue);

        lastCalledToken.burn(burnValue);
        burnedValueOf[msg.sender] += burnValue;
    }
}
