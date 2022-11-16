async function main() {
    const signer = (await locklift.keystore.getSigner("0"))!;
    const { contract: token, tx } = await locklift.factory.deployContract({
      contract: "ERC20",
      publicKey: signer.publicKey,
      initParams: {
        _nonce: locklift.utils.getRandomNonce(),
      },
      constructorParams: {
        _name: "TEST",
        _symbol: "TEST",
        _decimals: 18,
        _count: 100 * 10 ^ 18
      },
      value: locklift.utils.toNano(3),
    });
  
    console.log(`ERC20 token deployed at: ${token.address.toString()}`);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(e => {
      console.log(e);
      process.exit(1);
    });
  