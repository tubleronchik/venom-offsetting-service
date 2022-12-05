import { expect } from "chai";
import { Contract, Signer, getRandomNonce, Address } from "locklift";
import { FactorySource } from "../build/factorySource";
import { WalletV3Account} from "everscale-standalone-client/nodejs";


let factory: Contract<FactorySource["AssetFactory"]>;
let operator: Signer;
let operatorWallet: WalletV3Account;
let auditor: Signer;
let auditorWallet: WalletV3Account;
let user: Signer;
let userWallet: WalletV3Account;
let token: Contract<FactorySource['TokenRoot']>;
let userTokenWallet: Contract<FactorySource['TokenWallet']>;

const zeroAddress = new Address('0:0000000000000000000000000000000000000000000000000000000000000000');

describe("Test Sample contract", async function () {
  before(async () => {
    operator = (await locklift.keystore.getSigner("0"))!;
    operatorWallet = await WalletV3Account.fromPubkey({publicKey: operator.publicKey, workchain: 0});
    await locklift.factory.accounts.storage.addAccount(operatorWallet);
    await locklift.giver.sendTo(operatorWallet.address, locklift.utils.toNano(100));
    auditor = (await locklift.keystore.getSigner("1"))!;
    auditorWallet = await WalletV3Account.fromPubkey({publicKey: auditor.publicKey, workchain: 0});
    await locklift.giver.sendTo(auditorWallet.address, locklift.utils.toNano(100));  
    user = (await locklift.keystore.getSigner("3"))!;
    userWallet = await WalletV3Account.fromPubkey({publicKey: user.publicKey, workchain: 0});
    await locklift.giver.sendTo(userWallet.address, locklift.utils.toNano(100));          
});
  describe("Contracts", async function () {
    it("Operator should deploy his own DAO", async function () {
        const tokenWallet = locklift.factory.getContractArtifacts("TokenWallet");
        const tokenRoot = locklift.factory.getContractArtifacts("TokenRoot");

        const { contract: contract2} = await locklift.factory.deployContract({
            contract: "AssetFactory",
            publicKey: operator.publicKey,
            initParams: {
                _randomNonce: getRandomNonce()
            },
            constructorParams: {
                owner: operatorWallet.address,
                deployValue: locklift.utils.toNano(3),
                rootCode: tokenRoot.code,
                walletCode: tokenWallet.code,
                rootUpgradeableCode: "",
                walletUpgradeableCode: "",
                platformCode: ""
            },
            value: locklift.utils.toNano(10),
        });
        
        factory = contract2;
    });

    it("Operator should add auditor in DAO", async function () {
        await locklift.factory.accounts.storage.addAccount(operatorWallet);
        let tx1 = await factory.methods.addAuditor({auditor: auditorWallet.address}).send({
            from: operatorWallet.address,
            amount: locklift.utils.toNano(1)
        });

        expect((await factory.methods.isAuditor({answerId: 0, auditor: auditorWallet.address}).call({})).value0).to.equals(true);
    });

    it("User should choose auditor and ask him to deploy token", async function () {
        await locklift.factory.accounts.storage.addAccount(auditorWallet);
        await locklift.giver.sendTo(factory.address, locklift.utils.toNano(100));
        let tx = await factory.methods.deployRoot({
            answerId: 0,
            name: "TestAsset",
            symbol: "TST",
            decimals: 9,
            owner: auditorWallet.address,
            initialSupplyTo: userWallet.address,
            initialSupply: 50 * 10 ** 9,
            deployWalletValue: locklift.utils.toNano(0.2),
            mintDisabled: false,
            burnByRootDisabled: false,
            burnPaused: false,
            remainingGasTo: auditorWallet.address,
            upgradeable: false
        }).send({from: auditorWallet.address, amount: locklift.utils.toNano(4)});

        let sub = new locklift.provider.Subscriber();
        let deploy_tx = await sub.trace(tx).filter(tx_in_tree => {
            return tx_in_tree.account._address == factory.address.toString()
        }).first();

        let decoded_events = await factory.decodeTransactionEvents({
            transaction: deploy_tx!,
        });

        console.log(`Token root deployed at ${decoded_events[0].data.root}`);

        const tokenRoot = locklift.factory.getDeployedContract("TokenRoot", decoded_events[0].data.root);
        token = tokenRoot;
        const tokenWalletAddress = (await tokenRoot.methods.walletOf({answerId: 0, walletOwner: userWallet.address}).call()).value0;
        const TokenWallet = locklift.factory.getDeployedContract('TokenWallet', tokenWalletAddress);
        userTokenWallet = TokenWallet;

        const {value0: tokenWalletBalance} = await userTokenWallet.methods.balance({ answerId: 0 }).call();

        console.log(`User token balance is ${tokenWalletBalance}`);
        expect(Number(tokenWalletBalance)).to.equals(50 * 10 ** 9);
    });
    it("User may ask auditor to mint some tokens", async function () {
        let tx = await token.methods.mint({
            amount: 10 * 10 ** 9,
            recipient: userWallet.address,
            deployWalletValue: 0,
            remainingGasTo: auditorWallet.address,
            notify: false,
            payload: ""
        }).send({from: auditorWallet.address, amount: locklift.utils.toNano(1)});

        const {value0: tokenWalletBalance} = await userTokenWallet.methods.balance({ answerId: 0 }).call();
        console.log(`User token balance is ${tokenWalletBalance}`);
        expect(Number(tokenWalletBalance)).to.equals(60 * 10 ** 9);
    });

    it("User may burn sume tokens", async function () {
        await locklift.factory.accounts.storage.addAccount(userWallet);

        let tx = await userTokenWallet.methods.burn({
            amount: 15 * 10 ** 9,
            remainingGasTo: userWallet.address,
            callbackTo: zeroAddress,
            payload: ""
        }).send({from: userWallet.address, amount: locklift.utils.toNano(1)});

        const {value0: tokenWalletBalance} = await userTokenWallet.methods.balance({ answerId: 0 }).call();
        console.log(`User token balance is ${tokenWalletBalance}`);
        expect(Number(tokenWalletBalance)).to.equals(45 * 10 ** 9);
    })
  });
});