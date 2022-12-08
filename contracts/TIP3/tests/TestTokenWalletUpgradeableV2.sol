pragma ton-solidity >= 0.57.0;

import "../TokenWalletUpgradeable.sol";


contract TestTokenWalletUpgradeableV2 is TokenWalletUpgradeable {

    function onlyInV2() public pure responsible returns (string) {
        return{value: 0, bounce: false, flag: 64} "Some method in wallet v2";
    }

}
