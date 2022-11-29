const auditorAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"_operator","type":"address"},{"name":"_token","type":"address"},{"name":"_holder","type":"address"},{"name":"_tokenOwner","type":"address"}],"outputs":[]},{"name":"setEmissionLimit","inputs":[{"name":"_limit","type":"uint256"}],"outputs":[]},{"name":"setHoldPercentage","inputs":[{"name":"_hold","type":"uint256"}],"outputs":[]},{"name":"emission","inputs":[{"name":"_value","type":"uint256"}],"outputs":[]},{"name":"transfer","inputs":[{"name":"_value","type":"uint256"}],"outputs":[]},{"name":"setOwner","inputs":[{"name":"_owner","type":"address"}],"outputs":[]},{"name":"owner","inputs":[],"outputs":[{"name":"owner","type":"address"}]},{"name":"operator","inputs":[],"outputs":[{"name":"operator","type":"address"}]},{"name":"token","inputs":[],"outputs":[{"name":"token","type":"address"}]},{"name":"emissionValue","inputs":[],"outputs":[{"name":"emissionValue","type":"uint256"}]},{"name":"emissionLimit","inputs":[],"outputs":[{"name":"emissionLimit","type":"uint256"}]},{"name":"holdPercentage","inputs":[],"outputs":[{"name":"holdPercentage","type":"uint256"}]},{"name":"insuranceHolder","inputs":[],"outputs":[{"name":"insuranceHolder","type":"address"}]},{"name":"tokenOwner","inputs":[],"outputs":[{"name":"tokenOwner","type":"address"}]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"owner","type":"address"},{"name":"operator","type":"address"},{"name":"token","type":"address"},{"name":"emissionValue","type":"uint256"},{"name":"emissionLimit","type":"uint256"},{"name":"holdPercentage","type":"uint256"},{"name":"insuranceHolder","type":"address"},{"name":"tokenOwner","type":"address"}]} as const
const billingAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"_taxman","type":"address"},{"name":"_beneficiary","type":"address"}],"outputs":[]},{"name":"serviceFee","inputs":[{"name":"_account","type":"address"},{"name":"_fee","type":"uint256"}],"outputs":[]},{"name":"payment","inputs":[],"outputs":[]},{"name":"setOwner","inputs":[{"name":"_owner","type":"address"}],"outputs":[]},{"name":"owner","inputs":[],"outputs":[{"name":"owner","type":"address"}]},{"name":"taxman","inputs":[],"outputs":[{"name":"taxman","type":"address"}]},{"name":"beneficiary","inputs":[],"outputs":[{"name":"beneficiary","type":"address"}]},{"name":"balances","inputs":[],"outputs":[{"name":"balances","type":"map(address,int256)"}]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"owner","type":"address"},{"name":"taxman","type":"address"},{"name":"beneficiary","type":"address"},{"name":"balances","type":"map(address,int256)"}]} as const
const commitmentAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"_operator","type":"address"},{"name":"_token","type":"address"},{"name":"_holder","type":"address"},{"name":"_insuranceHolderToken","type":"address"},{"name":"_tokenEmissionOwner","type":"address"}],"outputs":[]},{"name":"setPercentage","inputs":[{"name":"_percentage","type":"uint256"}],"outputs":[]},{"name":"emission","inputs":[{"name":"_value","type":"uint256"}],"outputs":[]},{"name":"onGetBalance","inputs":[{"name":"balance","type":"uint256"}],"outputs":[]},{"name":"transfer","inputs":[{"name":"_value","type":"uint256"}],"outputs":[]},{"name":"setOwner","inputs":[{"name":"_owner","type":"address"}],"outputs":[]},{"name":"owner","inputs":[],"outputs":[{"name":"owner","type":"address"}]},{"name":"operator","inputs":[],"outputs":[{"name":"operator","type":"address"}]},{"name":"tokenEmission","inputs":[],"outputs":[{"name":"tokenEmission","type":"address"}]},{"name":"tokenEmissionOwner","inputs":[],"outputs":[{"name":"tokenEmissionOwner","type":"address"}]},{"name":"percentage","inputs":[],"outputs":[{"name":"percentage","type":"uint256"}]},{"name":"token","inputs":[],"outputs":[{"name":"token","type":"address"}]},{"name":"insuranceHolder","inputs":[],"outputs":[{"name":"insuranceHolder","type":"address"}]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"owner","type":"address"},{"name":"operator","type":"address"},{"name":"tokenEmission","type":"address"},{"name":"tokenEmissionOwner","type":"address"},{"name":"percentage","type":"uint256"},{"name":"token","type":"address"},{"name":"insuranceHolder","type":"address"},{"name":"lastEmissionValue","type":"uint256"}]} as const
const complierAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"burn","inputs":[{"name":"_token","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[]},{"name":"onGetBalance","inputs":[{"name":"_balance","type":"uint256"}],"outputs":[]},{"name":"setOwner","inputs":[{"name":"_owner","type":"address"}],"outputs":[]},{"name":"constructor","inputs":[],"outputs":[]},{"name":"owner","inputs":[],"outputs":[{"name":"owner","type":"address"}]},{"name":"burnedValueOf","inputs":[],"outputs":[{"name":"burnedValueOf","type":"map(address,uint256)"}]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"owner","type":"address"},{"name":"burnedValueOf","type":"map(address,uint256)"},{"name":"lastCalledToken","type":"address"},{"name":"burnValue","type":"uint256"}]} as const
const eRC20Abi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"},{"name":"_count","type":"uint256"}],"outputs":[]},{"name":"balanceOf","inputs":[{"name":"answerId","type":"uint32"},{"name":"_owner","type":"address"}],"outputs":[{"name":"value0","type":"uint256"}]},{"name":"allowance","inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"outputs":[{"name":"value0","type":"uint256"}]},{"name":"transfer","inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"value0","type":"bool"}]},{"name":"transferFrom","inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"value0","type":"bool"}]},{"name":"approve","inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"value0","type":"bool"}]},{"name":"unapprove","inputs":[{"name":"_spender","type":"address"}],"outputs":[]},{"name":"setOwner","inputs":[{"name":"_owner","type":"address"}],"outputs":[]},{"name":"totalSupply","inputs":[],"outputs":[{"name":"totalSupply","type":"uint256"}]},{"name":"owner","inputs":[],"outputs":[{"name":"owner","type":"address"}]},{"name":"name","inputs":[],"outputs":[{"name":"name","type":"string"}]},{"name":"symbol","inputs":[],"outputs":[{"name":"symbol","type":"string"}]},{"name":"decimals","inputs":[],"outputs":[{"name":"decimals","type":"uint8"}]}],"data":[],"events":[{"name":"Transfer","inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[]},{"name":"Approval","inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"totalSupply","type":"uint256"},{"name":"owner","type":"address"},{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balances","type":"map(address,uint256)"},{"name":"allowances","type":"map(address,map(address,uint256))"}]} as const
const eRC20ACLAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"},{"name":"_start_count","type":"uint256"}],"outputs":[]},{"name":"addMinter","inputs":[{"name":"_minter","type":"address"}],"outputs":[]},{"name":"emission","inputs":[{"name":"_value","type":"uint256"}],"outputs":[]},{"name":"burn","inputs":[{"name":"_value","type":"uint256"}],"outputs":[]},{"name":"balanceOf","inputs":[{"name":"answerId","type":"uint32"},{"name":"_owner","type":"address"}],"outputs":[{"name":"value0","type":"uint256"}]},{"name":"allowance","inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"outputs":[{"name":"value0","type":"uint256"}]},{"name":"transfer","inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"value0","type":"bool"}]},{"name":"transferFrom","inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"value0","type":"bool"}]},{"name":"approve","inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"value0","type":"bool"}]},{"name":"unapprove","inputs":[{"name":"_spender","type":"address"}],"outputs":[]},{"name":"setOwner","inputs":[{"name":"_owner","type":"address"}],"outputs":[]},{"name":"totalSupply","inputs":[],"outputs":[{"name":"totalSupply","type":"uint256"}]},{"name":"owner","inputs":[],"outputs":[{"name":"owner","type":"address"}]},{"name":"name","inputs":[],"outputs":[{"name":"name","type":"string"}]},{"name":"symbol","inputs":[],"outputs":[{"name":"symbol","type":"string"}]},{"name":"decimals","inputs":[],"outputs":[{"name":"decimals","type":"uint8"}]}],"data":[],"events":[{"name":"Transfer","inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[]},{"name":"Approval","inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"totalSupply","type":"uint256"},{"name":"owner","type":"address"},{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balances","type":"map(address,uint256)"},{"name":"allowances","type":"map(address,map(address,uint256))"},{"name":"canMint","type":"map(address,bool)"}]} as const
const eRC20BurnableAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"},{"name":"_start_count","type":"uint256"}],"outputs":[]},{"name":"emission","inputs":[{"name":"_value","type":"uint256"}],"outputs":[]},{"name":"burn","inputs":[{"name":"_value","type":"uint256"}],"outputs":[]},{"name":"balanceOf","inputs":[{"name":"answerId","type":"uint32"},{"name":"_owner","type":"address"}],"outputs":[{"name":"value0","type":"uint256"}]},{"name":"allowance","inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"outputs":[{"name":"value0","type":"uint256"}]},{"name":"transfer","inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"value0","type":"bool"}]},{"name":"transferFrom","inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"value0","type":"bool"}]},{"name":"approve","inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"value0","type":"bool"}]},{"name":"unapprove","inputs":[{"name":"_spender","type":"address"}],"outputs":[]},{"name":"setOwner","inputs":[{"name":"_owner","type":"address"}],"outputs":[]},{"name":"totalSupply","inputs":[],"outputs":[{"name":"totalSupply","type":"uint256"}]},{"name":"owner","inputs":[],"outputs":[{"name":"owner","type":"address"}]},{"name":"name","inputs":[],"outputs":[{"name":"name","type":"string"}]},{"name":"symbol","inputs":[],"outputs":[{"name":"symbol","type":"string"}]},{"name":"decimals","inputs":[],"outputs":[{"name":"decimals","type":"uint8"}]}],"data":[],"events":[{"name":"Transfer","inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[]},{"name":"Approval","inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"totalSupply","type":"uint256"},{"name":"owner","type":"address"},{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balances","type":"map(address,uint256)"},{"name":"allowances","type":"map(address,map(address,uint256))"}]} as const
const insuranceHolderAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"_operator","type":"address"},{"name":"_token","type":"address"},{"name":"_tokenOwner","type":"address"}],"outputs":[]},{"name":"size","inputs":[],"outputs":[{"name":"value0","type":"uint256"}]},{"name":"record","inputs":[{"name":"_index","type":"uint256"}],"outputs":[{"name":"value0","type":"uint256"},{"name":"value1","type":"uint256"},{"name":"value2","type":"bool"}]},{"name":"setHoldDuration","inputs":[{"name":"_duration_sec","type":"uint256"}],"outputs":[]},{"name":"transfer","inputs":[{"name":"_value","type":"uint256"}],"outputs":[{"name":"value0","type":"bool"}]},{"name":"withdraw","inputs":[{"name":"_index","type":"uint256"}],"outputs":[]},{"name":"setOwner","inputs":[{"name":"_owner","type":"address"}],"outputs":[]},{"name":"owner","inputs":[],"outputs":[{"name":"owner","type":"address"}]},{"name":"operator","inputs":[],"outputs":[{"name":"operator","type":"address"}]},{"name":"token","inputs":[],"outputs":[{"name":"token","type":"address"}]},{"name":"tokenOwner","inputs":[],"outputs":[{"name":"tokenOwner","type":"address"}]},{"name":"holdDuration","inputs":[],"outputs":[{"name":"holdDuration","type":"uint256"}]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"owner","type":"address"},{"name":"operator","type":"address"},{"name":"token","type":"address"},{"name":"tokenOwner","type":"address"},{"name":"holdDuration","type":"uint256"},{"components":[{"name":"timestamp","type":"uint256"},{"name":"value","type":"uint256"},{"name":"closed","type":"bool"}],"name":"values","type":"tuple[]"}]} as const
const operatedAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"constructor","inputs":[{"name":"_operator","type":"address"}],"outputs":[]},{"name":"setOwner","inputs":[{"name":"_owner","type":"address"}],"outputs":[]},{"name":"owner","inputs":[],"outputs":[{"name":"owner","type":"address"}]},{"name":"operator","inputs":[],"outputs":[{"name":"operator","type":"address"}]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"owner","type":"address"},{"name":"operator","type":"address"}]} as const
const ownedAbi = {"ABIversion":2,"version":"2.2","header":["time"],"functions":[{"name":"setOwner","inputs":[{"name":"_owner","type":"address"}],"outputs":[]},{"name":"constructor","inputs":[],"outputs":[]},{"name":"owner","inputs":[],"outputs":[{"name":"owner","type":"address"}]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"owner","type":"address"}]} as const

export const factorySource = {
    Auditor: auditorAbi,
    Billing: billingAbi,
    Commitment: commitmentAbi,
    Complier: complierAbi,
    ERC20: eRC20Abi,
    ERC20ACL: eRC20ACLAbi,
    ERC20Burnable: eRC20BurnableAbi,
    InsuranceHolder: insuranceHolderAbi,
    Operated: operatedAbi,
    Owned: ownedAbi
} as const

export type FactorySource = typeof factorySource
export type AuditorAbi = typeof auditorAbi
export type BillingAbi = typeof billingAbi
export type CommitmentAbi = typeof commitmentAbi
export type ComplierAbi = typeof complierAbi
export type ERC20Abi = typeof eRC20Abi
export type ERC20ACLAbi = typeof eRC20ACLAbi
export type ERC20BurnableAbi = typeof eRC20BurnableAbi
export type InsuranceHolderAbi = typeof insuranceHolderAbi
export type OperatedAbi = typeof operatedAbi
export type OwnedAbi = typeof ownedAbi