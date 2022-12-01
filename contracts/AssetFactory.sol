pragma ever-solidity ^0.62.0;


pragma AbiHeader expire;
pragma AbiHeader pubkey;

import 'TIP3/additional/TokenFactory.sol';

contract AssetFactory is TokenFactory {
    mapping(address => bool) private _isAuditor;


    constructor(
        address owner,
        uint128 deployValue,
        TvmCell rootCode,
        TvmCell walletCode,
        TvmCell rootUpgradeableCode,
        TvmCell walletUpgradeableCode,
        TvmCell platformCode
    ) public TokenFactory(owner, deployValue, rootCode, walletCode, rootUpgradeableCode, walletUpgradeableCode, platformCode) {}


    function isAuditor(address auditor) public view responsible returns(bool) {
        return{value: 0, bounce: false, flag: 64} _isAuditor[auditor];
    }
    function addAuditor(address auditor) public onlyOwner {
        _isAuditor[auditor] = true;
    }

    function removeAuditor(address auditor) public onlyOwner {
        _isAuditor[auditor] = false;
    }

    function deployRoot(
        string name,
        string symbol,
        uint8 decimals,
        address owner,
        address initialSupplyTo,
        uint128 initialSupply,
        uint128 deployWalletValue,
        bool mintDisabled,
        bool burnByRootDisabled,
        bool burnPaused,
        address remainingGasTo,
        bool upgradeable
    ) public responsible virtual override returns (address) {
        require(_isAuditor[msg.sender]);
        address root = super.deployRoot(
            name,
            symbol,
            decimals,
            owner,
            initialSupplyTo,
            initialSupply,
            deployWalletValue,
            mintDisabled,
            burnByRootDisabled,
            burnPaused,
            remainingGasTo,
            upgradeable
        );

        return {value: 0, flag: TokenMsgFlag.REMAINING_GAS, bounce: false} root;
    }
}