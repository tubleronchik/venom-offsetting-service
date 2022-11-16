import { Address } from "locklift";

async function main() {
    const signer = (await locklift.keystore.getSigner("0"))!;
    const { contract: auditor, tx } = await locklift.factory.deployContract({
      contract: "Auditor",
      publicKey: signer.publicKey,
      initParams: {
        _nonce: locklift.utils.getRandomNonce(),
      },
      constructorParams: {
        _operator: new Address("0:ece57bcc6c530283becbbd8a3b24d3c5987cdddc3c8b7b33be6e4a6312490415"),
        _holder: new Address("0:ece57bcc6c530283becbbd8a3b24d3c5987cdddc3c8b7b33be6e4a6312490415"),
        _token: new Address("0:136cd041359e41bf5e813e9d2f9b2befea96eaef5c7e20efad6df4b69f4c2d18"),
        _tokenOwner: new Address("0:ece57bcc6c530283becbbd8a3b24d3c5987cdddc3c8b7b33be6e4a6312490415")
      },
      value: locklift.utils.toNano(3),
    });
  
    console.log(`Auditor deployed at: ${auditor.address.toString()}`);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(e => {
      console.log(e);
      process.exit(1);
    });
  