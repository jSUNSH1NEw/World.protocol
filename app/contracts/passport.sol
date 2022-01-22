// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppenlin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppenlin/contracts/acess/Ownable.sol";

contract TicketAuth is ERC1155, Ownable {
    uint256 public tokenCounter;
    constructor () public ERC1155 ("TWRLDpassport", "TWRLDPassport") {
        tokenCounter = 0;
    }


 //function to mint a new token

    function mintPassport(string memory tokenURI) public returns (uint256) {

        uint256 newTWRLDpass = tokenCounter++;

        _safeMint(msg.sender,  newTWRLDpass);
        _setTokenURI(newTWRLDpass, tokenURI);

        return newTWRLDpass;

    }

    //function too geth the data from the tokenURI

    function getTokenURI(uint256 tokenId) public view returns (string memory) {
        //check if tokenID is valid
        require(_isValidTokenId(tokenId));
        //check if token is minted by this contract
        require(_isMintedBy(tokenId, msg.sender));
        //

        return _getTokenURI(tokenId);
    }

}