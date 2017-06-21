export default {
  Core: [{ constant: true, inputs: [], name: 'name', outputs: [{ name: '', type: 'string' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_owner', type: 'address' }], name: 'setOwner', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'first', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '', type: 'address' }], name: 'abiOf', outputs: [{ name: '', type: 'string' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'hammer', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'founder', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_module', type: 'address' }], name: 'contains', outputs: [{ name: '', type: 'bool' }], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '', type: 'address' }], name: 'getName', outputs: [{ name: '', type: 'string' }], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_name', type: 'string' }], name: 'get', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '', type: 'bytes32' }], name: 'indexOf', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'description', outputs: [{ name: '', type: 'string' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_name', type: 'string' }], name: 'remove', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '', type: 'uint256' }], name: 'modules', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'destroy', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_name', type: 'string' }], name: 'isConstant', outputs: [{ name: '', type: 'bool' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'size', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_current', type: 'address' }], name: 'next', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_hammer', type: 'address' }], name: 'setHammer', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_name', type: 'string' }, { name: '_module', type: 'address' }, { name: '_abi', type: 'string' }, { name: '_constant', type: 'bool' }], name: 'set', outputs: [], payable: false, type: 'function' }, { inputs: [{ name: '_name', type: 'string' }, { name: '_description', type: 'string' }], payable: false, type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, name: 'module', type: 'address' }], name: 'ModuleAdded', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: 'module', type: 'address' }], name: 'ModuleRemoved', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: 'from', type: 'address' }, { indexed: true, name: 'to', type: 'address' }], name: 'ModuleReplaced', type: 'event' }],
  BuilderMarket: [{ constant: false, inputs: [{ name: '_uri', type: 'string' }], name: 'setSecurityCheck', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_owner', type: 'address' }], name: 'setOwner', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_beneficiary', type: 'address' }], name: 'setBeneficiary', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'beneficiary', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_buildingCostWei', type: 'uint256' }], name: 'setCost', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'hammer', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'buildingCostWei', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'destroy', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_client', type: 'address' }], name: 'create', outputs: [{ name: '', type: 'address' }], payable: true, type: 'function' }, { constant: true, inputs: [], name: 'getLastContract', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_hammer', type: 'address' }], name: 'setHammer', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '', type: 'address' }, { name: '', type: 'uint256' }], name: 'getContractsOf', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'securityCheckURI', outputs: [{ name: '', type: 'string' }], payable: false, type: 'function' }, { anonymous: false, inputs: [{ indexed: true, name: 'client', type: 'address' }, { indexed: true, name: 'instance', type: 'address' }], name: 'Builded', type: 'event' }],
  Market: [{ constant: false, inputs: [{ name: '_owner', type: 'address' }], name: 'setOwner', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_lot', type: 'address' }], name: 'remove', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_commission', type: 'uint256' }], name: 'setCommission', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'first', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'hammer', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_enable', type: 'bool' }], name: 'setRegulator', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_seller', type: 'address' }, { name: '_sale', type: 'address' }, { name: '_buy', type: 'address' }, { name: '_quantity_sale', type: 'uint256' }, { name: '_quantity_buy', type: 'uint256' }], name: 'append', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_lot', type: 'address' }], name: 'contains', outputs: [{ name: '', type: 'bool' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_token', type: 'address' }], name: 'setCommissionToken', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'destroy', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'size', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'commissionToken', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_current', type: 'address' }], name: 'next', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'regulatorEnabled', outputs: [{ name: '', type: 'bool' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_hammer', type: 'address' }], name: 'setHammer', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'commission', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }],
  Lot: [{ constant: true, inputs: [], name: 'commissionRecipient', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'seller', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_owner', type: 'address' }], name: 'setOwner', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_buyer', type: 'address' }], name: 'deal', outputs: [{ name: '', type: 'bool' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'hammer', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'deal', outputs: [{ name: '', type: 'bool' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'closed', outputs: [{ name: '', type: 'bool' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'quantity_sale', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'sale', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'buyer', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'commissionAmount', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'destroy', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'quantity_buy', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'buy', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'commissionToken', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_hammer', type: 'address' }], name: 'setHammer', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'commission', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { inputs: [{ name: '_seller', type: 'address' }, { name: '_sale', type: 'address' }, { name: '_buy', type: 'address' }, { name: '_quantity_sale', type: 'uint256' }, { name: '_quantity_buy', type: 'uint256' }, { name: '_commissionRecipient', type: 'address' }, { name: '_commissionToken', type: 'address' }, { name: '_commission', type: 'uint256' }], type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, name: 'time', type: 'uint256' }], name: 'Closed', type: 'event' }],
  BuilderDocs: [{ constant: false, inputs: [{ name: '_uri', type: 'string' }], name: 'setSecurityCheck', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_owner', type: 'address' }], name: 'setOwner', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_beneficiary', type: 'address' }], name: 'setBeneficiary', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'beneficiary', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_buildingCostWei', type: 'uint256' }], name: 'setCost', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'hammer', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'buildingCostWei', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'destroy', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_client', type: 'address' }], name: 'create', outputs: [{ name: '', type: 'address' }], payable: true, type: 'function' }, { constant: true, inputs: [], name: 'getLastContract', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_hammer', type: 'address' }], name: 'setHammer', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '', type: 'address' }, { name: '', type: 'uint256' }], name: 'getContractsOf', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'securityCheckURI', outputs: [{ name: '', type: 'string' }], payable: false, type: 'function' }, { anonymous: false, inputs: [{ indexed: true, name: 'client', type: 'address' }, { indexed: true, name: 'instance', type: 'address' }], name: 'Builded', type: 'event' }],
  Docs: [{ constant: true, inputs: [], name: 'count', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_owner', type: 'address' }], name: 'setOwner', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'hammer', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: 'txId', type: 'string' }, { name: 'ipfs', type: 'string' }], name: 'append', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '', type: 'uint256' }], name: 'list', outputs: [{ name: 'txId', type: 'string' }, { name: 'ipfs', type: 'string' }, { name: 'owner', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'destroy', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_hammer', type: 'address' }], name: 'setHammer', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: 'txId', type: 'string' }], name: 'getIndex', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }],
  BuilderIssuerLedger: [{ constant: false, inputs: [{ name: '_uri', type: 'string' }], name: 'setSecurityCheck', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_owner', type: 'address' }], name: 'setOwner', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_beneficiary', type: 'address' }], name: 'setBeneficiary', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'beneficiary', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_buildingCostWei', type: 'uint256' }], name: 'setCost', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'hammer', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'buildingCostWei', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'destroy', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_name', type: 'string' }, { name: '_symbol', type: 'string' }, { name: '_decimals', type: 'uint8' }, { name: '_operator_core', type: 'address' }, { name: '_group', type: 'string' }, { name: '_client', type: 'address' }], name: 'create', outputs: [{ name: '', type: 'address' }], payable: true, type: 'function' }, { constant: true, inputs: [], name: 'getLastContract', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_hammer', type: 'address' }], name: 'setHammer', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '', type: 'address' }, { name: '', type: 'uint256' }], name: 'getContractsOf', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'securityCheckURI', outputs: [{ name: '', type: 'string' }], payable: false, type: 'function' }, { anonymous: false, inputs: [{ indexed: true, name: 'client', type: 'address' }, { indexed: true, name: 'instance', type: 'address' }], name: 'Builded', type: 'event' }],
  BuilderCommitment: [{ constant: false, inputs: [{ name: '_uri', type: 'string' }], name: 'setSecurityCheck', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_owner', type: 'address' }], name: 'setOwner', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_beneficiary', type: 'address' }], name: 'setBeneficiary', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'beneficiary', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_buildingCostWei', type: 'uint256' }], name: 'setCost', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'hammer', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'buildingCostWei', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'destroy', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_operator', type: 'address' }, { name: '_token', type: 'address' }, { name: '_holder', type: 'address' }, { name: '_client', type: 'address' }], name: 'create', outputs: [{ name: '', type: 'address' }], payable: true, type: 'function' }, { constant: true, inputs: [], name: 'getLastContract', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_hammer', type: 'address' }], name: 'setHammer', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '', type: 'address' }, { name: '', type: 'uint256' }], name: 'getContractsOf', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'securityCheckURI', outputs: [{ name: '', type: 'string' }], payable: false, type: 'function' }, { anonymous: false, inputs: [{ indexed: true, name: 'client', type: 'address' }, { indexed: true, name: 'instance', type: 'address' }], name: 'Builded', type: 'event' }],
  Commitment: [{ constant: true, inputs: [], name: 'insuranceHolder', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_value', type: 'uint256' }], name: 'transfer', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_owner', type: 'address' }], name: 'setOwner', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'hammer', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'operator', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_value', type: 'uint256' }], name: 'emission', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_percentage', type: 'uint256' }], name: 'setPercentage', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'emissionLimit', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'tokenEmission', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'destroy', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'balance', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'percentage', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_hammer', type: 'address' }], name: 'setHammer', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'token', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { inputs: [{ name: '_operator', type: 'address' }, { name: '_token', type: 'address' }, { name: '_holder', type: 'address' }], payable: false, type: 'constructor' }],
  BuilderTokenWithValidityPeriod: [{ constant: false, inputs: [{ name: '_uri', type: 'string' }], name: 'setSecurityCheck', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_owner', type: 'address' }], name: 'setOwner', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_beneficiary', type: 'address' }], name: 'setBeneficiary', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'beneficiary', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_buildingCostWei', type: 'uint256' }], name: 'setCost', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'hammer', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'buildingCostWei', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'destroy', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'getLastContract', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_hammer', type: 'address' }], name: 'setHammer', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '', type: 'address' }, { name: '', type: 'uint256' }], name: 'getContractsOf', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_name', type: 'string' }, { name: '_symbol', type: 'string' }, { name: '_decimals', type: 'uint8' }, { name: '_start_count', type: 'uint256' }, { name: '_acl_storage', type: 'address' }, { name: '_emitent', type: 'string' }, { name: '_operator', type: 'address' }, { name: '_client', type: 'address' }], name: 'create', outputs: [{ name: '', type: 'address' }], payable: true, type: 'function' }, { constant: true, inputs: [], name: 'securityCheckURI', outputs: [{ name: '', type: 'string' }], payable: false, type: 'function' }, { anonymous: false, inputs: [{ indexed: true, name: 'client', type: 'address' }, { indexed: true, name: 'instance', type: 'address' }], name: 'Builded', type: 'event' }],
  TokenWithValidityPeriod: [{ constant: true, inputs: [], name: 'name', outputs: [{ name: '', type: 'string' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_spender', type: 'address' }, { name: '_value', type: 'uint256' }], name: 'approve', outputs: [{ name: '', type: 'bool' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_value', type: 'uint256' }], name: 'setPeriod', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_owner', type: 'address' }], name: 'setOwner', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'totalSupply', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_from', type: 'address' }, { name: '_to', type: 'address' }, { name: '_value', type: 'uint256' }], name: 'transferFrom', outputs: [{ name: '', type: 'bool' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'decimals', outputs: [{ name: '', type: 'uint8' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_value', type: 'uint256' }], name: 'burn', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'hammer', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'operator', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_value', type: 'uint256' }], name: 'emission', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'emitentGroup', outputs: [{ name: '', type: 'string' }], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_owner', type: 'address' }], name: 'balanceOf', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'destroy', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'symbol', outputs: [{ name: '', type: 'string' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_to', type: 'address' }, { name: '_value', type: 'uint256' }], name: 'transfer', outputs: [{ name: '', type: 'bool' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'timestamp', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_hammer', type: 'address' }], name: 'setHammer', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_owner', type: 'address' }, { name: '_spender', type: 'address' }], name: 'allowance', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'acl', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'period', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_spender', type: 'address' }], name: 'unapprove', outputs: [], payable: false, type: 'function' }, { inputs: [{ name: '_name', type: 'string' }, { name: '_symbol', type: 'string' }, { name: '_decimals', type: 'uint8' }, { name: '_start_count', type: 'uint256' }, { name: '_acl_storage', type: 'address' }, { name: '_emitent_group', type: 'string' }, { name: '_operator', type: 'address' }], payable: false, type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, name: '_from', type: 'address' }, { indexed: true, name: '_to', type: 'address' }, { indexed: false, name: '_value', type: 'uint256' }], name: 'Transfer', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: '_owner', type: 'address' }, { indexed: true, name: '_spender', type: 'address' }, { indexed: false, name: '_value', type: 'uint256' }], name: 'Approval', type: 'event' }],
  Billing: [{ constant: false, inputs: [{ name: '_owner', type: 'address' }], name: 'setOwner', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '', type: 'address' }], name: 'balances', outputs: [{ name: '', type: 'int256' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'beneficiary', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'payment', outputs: [], payable: true, type: 'function' }, { constant: true, inputs: [], name: 'hammer', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'taxman', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_account', type: 'address' }, { name: '_fee', type: 'uint256' }], name: 'serviceFee', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'destroy', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_hammer', type: 'address' }], name: 'setHammer', outputs: [], payable: false, type: 'function' }, { inputs: [{ name: '_taxman', type: 'address' }, { name: '_beneficiary', type: 'address' }], payable: false, type: 'constructor' }]
}
