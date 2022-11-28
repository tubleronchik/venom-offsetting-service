import { expect } from "chai";
import { Contract, Signer } from "locklift";
import { FactorySource } from "../build/factorySource";

let factory: Contract<FactorySource["TokenFactory"]>;
let signer: Signer;

describe("Test Sample contract", async function () {
  before(async () => {
    signer = (await locklift.keystore.getSigner("0"))!;
  });
  describe("Contracts", async function () {
    it("Deploy contract", async function () {
      const token = await locklift.factory.getContractArtifacts('ERC20Burnable');
      const { contract } = await locklift.factory.deployContract({
        contract: "TokenFactory",
        publicKey: signer.publicKey,
        initParams: {
            tokenCode_: token.code,
        },
        constructorParams: {},
        value: locklift.utils.toNano(2),
      });
      factory = contract;

    //   expect(await locklift.provider.getBalance(sample.address).then(balance => Number(balance))).to.be.above(0);
        console.log(`TokenFactory deployed at: ${factory.address.toString()}`);
        console.log(`Factory owner: ${await factory.methods.getOwner({}).call()}`)

    });

    // it("Interact with contract", async function () {

    //   await sample.methods.setState({ _state: NEW_STATE }).sendExternal({ publicKey: signer.publicKey });

    //   const response = await sample.methods.getDetails({}).call();

    //   expect(Number(response._state)).to.be.equal(NEW_STATE, "Wrong state");
    // });
  });
});