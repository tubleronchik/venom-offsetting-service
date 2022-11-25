pragma ever-solidity >= 0.61.2;

import './Owned.sol';


contract ACL is Owned {
    mapping (address => bool) isAuditor;

    constructor() public {tvm.accept();}

    function addAuditor(address _auditor) public onlyOwner {
        isAuditor[_auditor] = true;
    }

    function removeAuditor(address _auditor) public onlyOwner {
        isAuditor[_auditor] = false;
    }
}