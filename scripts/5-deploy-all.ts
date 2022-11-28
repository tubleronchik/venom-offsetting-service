import { deployERC20 } from "./1-deploy-erc20";
import { deployAsset } from "./2-deploy-asset"

let contracts_function = [deployERC20, deployAsset]
function main() {
    contracts_function.forEach(fun => {
        fun().then(() => process.exit(0))
        .catch(e => {
          console.log(e);
          process.exit(1);
        }); 
});
}

main()
