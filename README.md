# Offsetting Service on Venom network

Simple Offsetting service that helps individuals or organizations reduce their carbon footprint by compensating for their greenhouse gas emissions using blockchain. The following roles are used: 

- An operator who deploys his DAO and adds auditors
- An auditor who has the right to issue and transfer assets to the user’s address
- A user who has the right to request the issuance of a asset by providing the confirmations necessary for the issuance of green assets

Additionally, an off-chain agent for auditors is implemented using IPFS Pubsub. This agent verifies user confirmations and mints the corresponding number of tokens accordingly.

---
## Contracts on Devnet
#### AssetFactory
> 0:215a4e1213cd87bc23108499742a26d16fb09f8fbf02069ec0d8d5aeb0bf73a1
#### Auditor
> 0:f6f50e7e2100cd4cb07e21eb5bc23585fa526e06fdfc7ba65372614a07870943
#### User
> 0:a9c8f49066d5bbc74f8df600406b5d47ca0601977b2159a58a24d0fb20ce26fa
#### Asset
> 0:b2e2b1c948b5764eb2f48254d222269444041b2a5f00619f62b681aafde1e861

---
## Demo of the project

You can find a demo video showcasing the functionality of the service [here](https://youtu.be/LknMbSvtj1c).

---

## Scenario

#### Beginning
1. Operator creates a wallet on the Venom network
2. Operator creates its own DAO by deploying the `AssetFactory` contract
3. Operator adds to the whitelist (inside `AssetFactory` `addAuditor()` function) auditors.

#### Issue of a New Asset
1. `User` (regular wallet) chooses an auditor off-chain, asks the `Auditor` to create an asset.
2. `User` and `Auditor` off-chain agree on the parameters of the asset (initial emission, asset name, symbol).
3. `Auditor` creates an asset through the factory (calls `deployRoot()` in the `AssetFactory` contract).
4. `Auditor` transfers the initial issue to the `User`.

#### Next Steps
- `User` have the ability to offset their carbon footprint by burning assets.
- As `User` produces green energy, he can agree with the `Auditor` on the proportional issue of tokens to User’s account.

---

## Testing on Local Node
Install `everdev` and `tonos-cli`:
> Everdev must be installed globally.
```
npm i -g everdev
everdev tonos-cli install
```
> **Troubleshooting**: if you get `EACCES permissions errors` error check this [article](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).

Clone the repo and install dependicies:

```
git clone https://github.com/Multi-Agent-io/dao-ipci-everscale
cd dao-ipci-everscale
npm install
```
---
Generate account with following command:
```
tonos-cli genphrase
```
Copy `locklift.config-example.ts` to `locklift.config.ts` and add the generated seed to line 63. 

Building contracts: 
```
npx locklift build
```
To work with local network use Everscale Simple Emulator. To launch and stop it run:

```
everdev se start
everdev se stop
```
respectively.
To reset the network run
```
everdev se reset
```

Test contracts:
```
npx locklift test --network local
```

Deploy AssetFactory:
```
npx locklift run --network local --script scripts/1-deploy-assetFactory.ts
```
