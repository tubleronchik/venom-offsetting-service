pragma ton-solidity 0.47.0;

import '../common/Owned.sol';
import '../common/Destroyable.sol';

/**
 * @title Generic owned destroyable contract
 */
contract Object is Owned, Destroyable {
    constructor() public {
        owner  = msg.sender;
        hammer = msg.sender;
    }
}
