// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Snapshot.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20FlashMint.sol";


// TODO : refacto bonding system too treasury contract (see treasury.sol)
/// @custom:security-contact samuel.gao023@gmail.com
contract Worldprotocol is ERC20, ERC20Burnable, ERC20Snapshot, Ownable, ERC20FlashMint {

    address public immutable OWNER_ADDRESS;
    // Bond Name.
    address public BOND_ONE;
    address public BOND_TWO;

    constructor() ERC20("Worldprotocol", "WRLD") {
        _mint(msg.sender, 100000 * 10 ** decimals());
        OWNER_ADDRESS = msg.sender;
    }

    function snapshot() public onlyOwner {
        _snapshot();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) public onlyOwner {
        _burn(from, amount);
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        override(ERC20, ERC20Snapshot)
    {
        super._beforeTokenTransfer(from, to, amount);
    }

    // This function is for linking bond with WRLD token.
    function bond_link(address bond_address) public onlyOwner {
        BOND_ONE = bond_address;
    }
}

contract WRLDBondOne is ERC20, ERC20Burnable, Ownable {

    constructor() ERC20("WorldprotocolBondOne", "WRLDBondOne") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) public onlyOwner {
        _burn(from, amount);
    }

    // TODO: The details are depend on you, msg.sender may be not right here.
    //      1) mint can be done from the owner of WRLD.
    //      2) burn?? Do we burn the money of the owner of WRLD? or burn specified account with given number of token?
    function MintOrBurn(IERC20 wrld) external {

        if (wrld.totalSupply() > msg.sender.totalSupply()) {
            msg.sender.mint(msg.sender, wrld.totalSupply() - msg.sender.totalSupply());
        }
        else if (wrld.totalSupply() < msg.sender.totalSupply()) {
            msg.sender.burn(_wrld, msg.sender.totalSupply()- wrld.totalSupply());
        }

    }
}

contract WRLDStakeOne is ERC20, ERC20Burnable, Ownable {

    constructor() ERC20("WorldMillionBondStaking", "SWRLD") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) public onlyOwner {
        _burn(from, amount);
    }
}