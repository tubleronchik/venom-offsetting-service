async function main() {
  const signer = (await locklift.keystore.getSigner("0"))!;
  const { contract: complier, tx } = await locklift.factory.deployContract({
    contract: "Complier",
    publicKey: signer.publicKey,
    initParams: {
      _nonce: locklift.utils.getRandomNonce(),
    },
    constructorParams: {},
    value: locklift.utils.toNano(3),
  });

  console.log(`Complier deployed at: ${complier.address.toString()}`);
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });
