import { WalletV3Account} from "everscale-standalone-client/nodejs";
import { Address } from "locklift";

const AssetFactoryAddress = ""
const AuditorAddress = ""
export async function addAuditor() {
    const signer = (await locklift.keystore.getSigner("0"))!;
    const wallet = await WalletV3Account.fromPubkey({publicKey: signer.publicKey, workchain: 0});
    await locklift.factory.accounts.storage.addAccount(wallet);
    const factory = await locklift.factory.getDeployedContract("AssetFactory", new Address(AssetFactoryAddress));

    let tx = await factory
        .methods
        .addAuditor({auditor: new Address(AuditorAddress)})
        .send({from: wallet.address, amount: locklift.utils.toNano(1)});
    
    console.log(tx);
    console.log(`Success ${(await factory.methods.isAuditor({answerId: 0, auditor: new Address(AuditorAddress)}).call({})).value0}`)
}

(async () => {
  await addAuditor();
})();