pragma ever-solidity ^0.62.0;


pragma AbiHeader expire;
pragma AbiHeader pubkey;

import 'TIP3/additional/TokenFactory.sol'; //модифицированный TokenFactory от Broxus
//В своем коде он использует TokenRoot. В Everscale токены принято делать такими, чтобы не было глобального
// mapping(address => uint) balances, потому что storage тут не бесплатен. Вместо этого для каждого владельца токена
// деплоится TokenWallet. TokenWallet предоставляет API для пользователя(transfer(), burn() и т.д.)

//AssetFactory - это просто TokenFactory с вайтлистом. Создавать токены (деплоить TokenRoot) могут только аудиторы
contract AssetFactory is TokenFactory {
    mapping(address => bool) private _isAuditor; //Вайтлист аудиторов


    //просто прокидываю все аргументы в TokenFactory
    constructor(
        address owner, //владелец DAO
        uint128 deployValue, //количество EVER, с которым будет деплоится токен (TokenRoot)
        TvmCell rootCode, //код контракта TokenRoot
        TvmCell walletCode, //код кошелька токена (TokenWallet)
        TvmCell rootUpgradeableCode, //код upgradable версии TokenRoot
        TvmCell walletUpgradeableCode, //код upgradable версии TokenWallet
        TvmCell platformCode
    ) public TokenFactory(owner, deployValue, rootCode, walletCode, rootUpgradeableCode, walletUpgradeableCode, platformCode) {}


    //view функция для проверки, является ли определнный адрес аудитором
    function isAuditor(address auditor) public view responsible returns(bool) {
        return{value: 0, bounce: false, flag: 64} _isAuditor[auditor];
    }

    //Добавить аудитора. Делать это может только Owner aka Оператор
    function addAuditor(address auditor) public onlyOwner {
        _isAuditor[auditor] = true;
    }

    //Удалить аудитора. Аналогично, функция только для Owner'a (Оператора)
    function removeAuditor(address auditor) public onlyOwner {
        _isAuditor[auditor] = false;
    }

    //Функция деплоя токена. То же самое, что deployRoot в TokenFactory, но перед деплоем проврека на то,
    //является ли msg.sender аудитором.
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

        return {value: 0, flag: 128, bounce: false} root;
    }
}