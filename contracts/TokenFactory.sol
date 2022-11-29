pragma ever-solidity >= 0.61.2;

pragma AbiHeader expire;
pragma AbiHeader pubkey;

import './ERC20/ERC20Burnable.sol';

contract TokenFactory {
    mapping(uint256 => bool) private _isAuditor;

    TvmCell static tokenCode_;

    modifier onlyOwner() {
        require(tvm.pubkey() != 0, 101);
        require(msg.pubkey() == tvm.pubkey(), 102);
        tvm.accept();
        _;
    }

    function isAuditor(uint256 pubKey) public view responsible returns(bool) {
        return{value: 0, bounce: false, flag: 64} _isAuditor[pubKey];
    }
    function addAuditor(uint256 _auditorPubkey) public onlyOwner {
        _isAuditor[_auditorPubkey] = true;
    }

    function removeAuditor(uint256 _auditorPubkey) public onlyOwner {
        _isAuditor[_auditorPubkey] = false;
    }

    function deployToken(string _name, string _symbol, uint8 _decimals,
                           uint _start_count, uint128 deployValue) public responsible returns(address)
    {
        require(_isAuditor[msg.pubkey()]);

        tvm.accept();

        TvmCell stateInit = _buildStateInit();

        address newToken = new ERC20Burnable{
            stateInit: stateInit,
            value: deployValue
        }(_name, _symbol, _decimals,
                        _start_count);
        
        return{value: 0, bounce: false, flag: 64} newToken;
    }

    function _buildStateInit() internal view returns (TvmCell)
    {
        return tvm.buildStateInit({
            contr: ERC20Burnable,
            varInit: {
                auditor: msg.pubkey()
            },
            code: tokenCode_
        });
    }
}