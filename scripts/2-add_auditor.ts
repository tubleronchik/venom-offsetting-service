import { WalletV3Account} from "everscale-standalone-client/nodejs";
import { Address } from "locklift";

const AssetFactoryAddress = "0:05e30bf3eae57adf9f5b6e45d4f55ffbb0dbf6e9b8d7441a67167631ce2675eb"
const AuditorAddress = "0:5e65c9e4ac2452c9a921dc6aa86747e5ffbf55396d98ca698bc463d950f91fd8"
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