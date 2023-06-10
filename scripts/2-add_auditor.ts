import { WalletV3Account} from "everscale-standalone-client/nodejs";
import { Address } from "locklift";

const AssetFactoryAddress = "0:215a4e1213cd87bc23108499742a26d16fb09f8fbf02069ec0d8d5aeb0bf73a1"
const AuditorAddress = "0:f6f50e7e2100cd4cb07e21eb5bc23585fa526e06fdfc7ba65372614a07870943"

export async function addAuditor() {
    const signer = (await locklift.keystore.getSigner("0"))!;
    const wallet = await WalletV3Account.fromPubkey({publicKey: signer.publicKey, workchain: 0});
    await locklift.factory.accounts.storage.addAccount(wallet);
    const factory = await locklift.factory.getDeployedContract("AssetFactory", new Address(AssetFactoryAddress));

    let tx = await factory
        .methods
        .addAuditor({auditor: new Address(AuditorAddress)})
        .send({from: wallet.address, amount: locklift.utils.toNano(1)});
    
    console.log(`Success ${(await factory.methods.isAuditor({answerId: 0, auditor: new Address(AuditorAddress)}).call({})).value0}`)
}

(async () => {
  await addAuditor();
})();