import { expect } from "chai";
import { Contract, Signer } from "locklift";
import { FactorySource } from "../build/factorySource";


let factory: Contract<FactorySource["TokenFactory"]>;
let signer: Signer;
let signer2: Signer;

describe("Test Sample contract", async function () {
  before(async () => {
    signer = (await locklift.keystore.getSigner("0"))!;
    signer2 = (await locklift.keystore.getSigner('1'))!;
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

      console.log(`Factory address is: ${factory.address}`);
    });

    it("Should test that non-auditor not allowed to deploy token", async function () {
        let tx = await factory.methods.deployToken({
          answerId: 0,
          _name: "test",
          _symbol: "TST",
          _decimals: 9,
          _start_count: 0,
          deployValue: locklift.utils.toNano(0.1)
        }).sendExternal({publicKey: signer.publicKey});
        // console.log(tx);
        expect(tx.transaction.aborted).to.equals(true);
    });

    it("Add auditor", async function () {
      // console.log(``signer.publicKey);
      let tx = await factory.methods.addAuditor({_auditorPubkey: '0x' + signer.publicKey}).sendExternal({publicKey: signer.publicKey});
      // console.log(tx);
      
      expect((await factory.methods.isAuditor({answerId: 0, pubKey: '0x' + signer.publicKey}).call({})).value0).to.equals(true);
    });

    it("Should test that auditor allow to deploy token", async function () {
      let tx = await factory.methods.deployToken({
        answerId: 0,
        _name: "test",
        _symbol: "TST",
        _decimals: 9,
        _start_count: 0,
        deployValue: locklift.utils.toNano(0.5)
      }).sendExternal({publicKey: signer.publicKey});
      // console.log(tx);
      console.log(`New token address: ${tx.output?.value0.toString()}`);
    });

    it("Remove auditor", async function () {
      // console.log(``signer.publicKey);
      let tx = await factory.methods.removeAuditor({_auditorPubkey: '0x' + signer.publicKey}).sendExternal({publicKey: signer.publicKey});
      // console.log(tx);
      
      expect((await factory.methods.isAuditor({answerId: 0, pubKey: '0x' + signer.publicKey}).call({})).value0).to.equals(false);
    });
  });
});