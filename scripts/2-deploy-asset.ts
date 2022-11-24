export async function deployAsset() {
    const signer = (await locklift.keystore.getSigner("0"))!;
    const { contract: mito, tx } = await locklift.factory.deployContract({
      contract: "ERC20Burnable",
      publicKey: signer.publicKey,
      initParams: {
        _nonce: locklift.utils.getRandomNonce(),
      },
      constructorParams: {
        _name: "MITO",
        _symbol: "MITO",
        _decimals: 18,
        _start_count: 100 * 10 ^ 18
      },
      value: locklift.utils.toNano(3),
    });
  
    console.log(`Mito token deployed at: ${mito.address.toString()}`);
  }
  