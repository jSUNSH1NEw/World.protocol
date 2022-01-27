// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "./BasicMetaTransaction.sol";

/// @custom:security-contact samuel.gao023@gmail.com
/// @custom:dev-contact weertz.joffrey@protonmail.ch

contract WorldMillion is ERC20, ERC20Burnable, Ownable, ERC20Permit, BasicMetaTransaction {
    constructor() ERC20("EntityWorldProtocol", "TWRLD") ERC20Permit("EntityWorldProtocol", "TWRLD") BasicMetaTransaction(") {
        // Premint = 10 000 000 (changable)
        // decimals = 11 (we can change that in constructor) 
        // totalSupply = low over Billion can handle 12Billion users ? 
        //if they get use by years and regulate by years ? 
        //like in a years 100millions user can maker profit  
        // then they just hodl for the new 100millions users coming ?  
        _mint(msg.sender, 10000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    /// @TODO1:  how to call this contract to save gas?
    /// @notice executeMetaTransaction(address userAddress, bytes memory functionSignature, bytes32 sigR, bytes32 sigS, uint8 sigV)
    /// @ref https://github.com/bcnmy/metatx-standard/tree/basic-signature-metatx
}