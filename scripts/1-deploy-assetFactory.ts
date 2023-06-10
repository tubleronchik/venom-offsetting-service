import { getRandomNonce } from "locklift";
import { WalletV3Account} from "everscale-standalone-client/nodejs";


export async function deployAssetFactory() {
    const signer = (await locklift.keystore.getSigner("0"))!;
    console.log(signer)
    const tokenRoot = await locklift.factory.getContractArtifacts("TokenRoot");
    const tokenWallet = await locklift.factory.getContractArtifacts("TokenWallet");
    const wallet = await WalletV3Account.fromPubkey({publicKey: signer.publicKey, workchain: 0});
    console.log(`Wallet address: ${wallet.address}`);
    const { contract: factory, tx } = await locklift.factory.deployContract({
        contract: "AssetFactory",
        publicKey: signer.publicKey,
        initParams: {
            _randomNonce: getRandomNonce()
        },
        constructorParams: {
            owner: wallet.address,
            deployValue: locklift.utils.toNano(3),
            rootCode: tokenRoot.code,
            walletCode: tokenWallet.code,
            rootUpgradeableCode: "",
            walletUpgradeableCode: "",
            platformCode: ""
        },
        value: locklift.utils.toNano(10),
        });
    console.log(`TokenFactory deployed at: ${factory.address.toString()}`);
}

(async () => {
  await deployAssetFactory();
})();