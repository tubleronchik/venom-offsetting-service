import { expect } from "chai";
import { Address, Contract, getRandomNonce, Signer } from "locklift";
import { FactorySource } from "../build/factorySource";


let signer: Signer;
let wallet: Contract<FactorySource["Wallet"]>;
let tokenRoot: Contract<FactorySource['TokenRoot']>;

describe("Test Sample contract", async function () {
  before(async () => {
    signer = (await locklift.keystore.getSigner("0"))!;
  });
  describe("signer should deploy wallet", async function () {
    it("Deploy contract", async function () {
      const { contract } = await locklift.factory.deployContract({
        contract: "Wallet",
        publicKey: signer.publicKey,
        initParams: {
            _randomNonce: getRandomNonce(),
        },
        constructorParams: {},
        value: locklift.utils.toNano(100),
      });
      wallet = contract;

      console.log(`Wallet address is: ${wallet.address}`);
      console.log(`Wallet balance: ${await locklift.provider.getBalance(wallet.address)}`);
    });

    it("Should deploy TIP3 token", async function () {
        const tokenWallet = locklift.factory.getContractArtifacts("TokenWallet");
        const { contract } = await locklift.factory.deployContract({
            contract: "TokenRoot",
            publicKey: signer.publicKey,
            initParams: {
                name_: "TEST",
                symbol_: "TST",
                decimals_: 9,
                rootOwner_: wallet.address,
                walletCode_: tokenWallet.code,
                randomNonce_: getRandomNonce(),
                deployer_: new Address('0:0000000000000000000000000000000000000000000000000000000000000000'),
            },
            constructorParams: {
                initialSupplyTo: wallet.address,
                initialSupply: 100 * 10 ** 9,
                deployWalletValue: locklift.utils.toNano(0.1),
                mintDisabled: false,
                burnByRootDisabled: false,
                burnPaused: false,
                remainingGasTo: wallet.address
            },
            value: locklift.utils.toNano(2),
        });
        tokenRoot = contract;
        console.log(`Token root deployed at: ${tokenRoot.address}`);
        
        const tokenWalletAddress = (await tokenRoot.methods.walletOf({answerId: 0, walletOwner: wallet.address}).call()).value0;
        const TokenWallet = locklift.factory.getDeployedContract('TokenWalletUpgradeable', tokenWalletAddress);

        const {value0: tokenWalletBalance} = await TokenWallet.methods.balance({ answerId: 0 }).call();
        expect(Number(tokenWalletBalance)).to.equals(100 * 10 ** 9);
    });

  });
});