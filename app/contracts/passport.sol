// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppenlin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppenlin/contracts/acess/Ownable.sol";
import "./TwrldERC20.sol";
import "./Treasurytw.sol";
import "./passportConstruct.sol";

contract Passport is ERC1155, Ownable {
    uint256 public tokenCounter;
    constructor () public ERC1155 ("TWRLDpassport", "TWRLDPassport") {
        tokenCounter = 0;
    }

    //add TWRLDERC20 address to passport
    TwrldERC20 public token = TwrldERC20(0x0);
    uint256 public mintAmount = 50;
    string public tokenURI = "https://twrld.io/passport"; 



    // @notice mint a new passport to TwrldERC20

    function mintPassport(address _token, uint256 _mintAmount) public {
        require (_token != 0x0);
        require (_mintAmount > 0);
        require (tokenCounter > 0);
        token = TwrldERC20(_token);
        token.mint(_mintAmount);
    }


    function mintPassport(string memory tokenURI) public returns (uint256) {

        uint256 newTWRLDpass = tokenCounter++;

        _safeMint(msg.sender,  newTWRLDpass);
        _setTokenURI(newTWRLDpass, tokenURI);

        return newTWRLDpass;

    }
}