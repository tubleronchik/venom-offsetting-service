pragma ever-solidity >= 0.61.2;

import './Owned.sol';


contract ACL is Owned {
    mapping(address => bool) public _isAuditor;

    constructor() public {tvm.accept();}

    function isAuditor(address _is_auditor) external responsible returns(bool) {
        return{value: 0, bounce: false, flag: 64} _isAuditor[_is_auditor];
    }

    function addAuditor(address _auditor) public onlyOwner {
        _isAuditor[_auditor] = true;
    }

    function removeAuditor(address _auditor) public onlyOwner {
        _isAuditor[_auditor] = false;
    }
}