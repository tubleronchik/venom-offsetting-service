pragma ever-solidity >= 0.61.2;
import './ERC20/ERC20Burnable.sol';
import './ERC20/ERC20.sol';
import './InsuranceHolder.sol';
import './Operated.sol';

contract Commitment is Operated {
    // Operated token
    ERC20Burnable public tokenEmission;
    address public tokenEmissionOwner;

    // Commitment percent
    uint public percentage;

    // Commitment token address
    ERC20 public token;
    
    // Address of insurance contract
    InsuranceHolder public insuranceHolder;

    uint256 lastEmissionValue;

    /**
     * @dev Commitment contract constructor
     * @param _operator is an operator if this Commitment
     * @param _token is an associated issuer token
     * @param _holder is an issurance holder address
     */
    constructor(address _operator,
                     address _token,
                     address _holder,
                     address _insuranceHolderToken,
                     address _tokenEmissionOwner) public Operated(_operator) {
        // null check
        tvm.accept();
        require(_operator != address(0) && _token != address(0) && _holder != address(0));

        tokenEmission = ERC20Burnable(_token);
        insuranceHolder = InsuranceHolder(_holder);
        token = ERC20(_insuranceHolderToken);
        tokenEmissionOwner = _tokenEmissionOwner;
    }

    /**
     * @dev Commitment percentage setter
     * @param _percentage is a new hold percent
     */
    function setPercentage(uint _percentage) onlyOperator public {
        // Assertion for % value
        require(_percentage <= 100);

        percentage = _percentage;
    }

    /**
     * @dev Get balance
     * @return amount of tokens on balance
     */
    // function balance() constant returns (uint256)
    // { return token.balanceOf(this); }
    
    /**
     * @dev Get emission limit
     * @return amount of tokens
     */
    // function emissionLimit() constant returns (uint256)
    // {
    //     if (percentage == 0) return 0;
    //     uint256 b = balance() / (10 ** uint256(token.decimals()));
    //     uint256 limit = b * 100 / percentage;
    //     return limit * (10 ** uint256(tokenEmission.decimals()));
    // }

    /**
     * @dev Commitment emission
     * @param _value is a emission value
     */
    function emission(uint _value) onlyOwner public {
        lastEmissionValue = _value;
        token.balanceOf{callback: onGetBalance}(address(this));
    }

    function onGetBalance(uint256 balance) public {
        require(msg.sender == address(token));

        uint256 limit;
        if (percentage == 0) {
            limit = 0;
        }
        else {
            uint256 b = balance / (10 ** 18);
            uint256 limit = b * 100 / percentage;
            limit = limit * (10 ** 18);
        }
        
        //limit checking
        require(lastEmissionValue <= limit);
        
        //emission
        tokenEmission.emission(lastEmissionValue);

        //hold
        uint256 holdPercentage = lastEmissionValue * 100 / limit;
        uint256 holdValue = balance * holdPercentage / 100;
        token.approve(insuranceHolder, holdValue);
        insuranceHolder.transfer(holdValue);
    }

    /**
     * @dev Transfer to issuer
     * @param _value is a transfer value
     */
    function transfer(uint _value) public onlyOwner
    { tokenEmission.transfer(tokenEmissionOwner, _value); }

}
