# DAO-IPCI contracts for Everscale

Install dependicies:
```
npm install
```
Generate account with following command:
```
tonos-cli genphrase
```
Copy `locklift.config-example.ts` to `locklift.config.ts` and add the generated seed to line 63. 

Building contracts: 
```
npx locklift build
```
Test contracts:
```
npx locklift test --networklocal
```

Deploy contarcts:
```
npx locklift run --network local --script scripts/<name-of-the-script>
```