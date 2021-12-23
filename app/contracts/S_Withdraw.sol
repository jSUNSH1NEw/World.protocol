// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

// @ref:  https://forum.openzeppelin.com/t/example-of-withdrawing-an-erc20-from-another-contract/4662

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/GSN/Context.sol";

contract MyWithDrawContract is Context, AccessControl {

    using SafeERC20 for IERC20;

    bytes32 public constant WITHDRAWER_ROLE = keccak256("WITHDRAWER_ROLE");

    constructor() public  {
        _setupRole(WITHDRAWER_ROLE, msg.sender);
    }

    function withdraw(IERC20 token, address recipient, uint256 amount) public {
        require(hasRole(WITHDRAWER_ROLE, msg.sender), "MyWithDrawContract: must have withdrawer role to withdraw");
        token.safeTransfer(recipient, amount);
    }
}