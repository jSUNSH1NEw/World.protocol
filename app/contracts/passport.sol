// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
import "@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol";
import "@openzeppenlin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppenlin/contracts/acess/Ownable.sol";
import "./TwrldERC20.sol";
import "./Treasurytw.sol";
import "./passportConstruct.sol";

contract Passport is ERC1155, Ownable {

    mapping(string => bool) public hasBeenMinted;
    mapping(uint256 => passport) public tokenIdToPassport;
    struct Passport {
        address owner;
        address creator;
        address passportConstruct;
    }

    TwrldERC20 public token = TwrldERC20(0x0);
    string public tokenURI = "https://XXXXXXXXX"; 
    uint256 public mintAmount = 50; //50 eur of ether for each passport;
    uint256 public totalSupply = 5000000000000; //50 billion passports
    uint256 public passportCounter;
    

    Passport[] private passports;
    event PassportMinted(uint256 indexed tokenId, address indexed owner, address indexed creator, address indexed passportConstruct);
    event URI (address indexed _token, string _uri);
    
    constructor () public ERC1155 ("TWRLDpassport", "TWRLDPassport") {
        passportCounter = 0;
    }

    function setURI(string _uri) public {
        require (tokenCounter > 0);
        tokenURI = _uri;
        URI(token, tokenURI);
    }

    function createPassport(string memory metadata, address passportConstruct ) public payable {
        require(condition(msg.value, metadata));
        require(!hasBeenMinted[metadata]);
        require(passportConstruct != address(0));
        require(passportConstruct.isContract());
        require(passportConstruct.isPayable());
        Passport memory passport = Passport(msg.sender, msg.sender, passportConstruct);
        tokenIdToPassport[passportCounter] = passport;
        passports.push(passport);
        _safeMint(passportCounter, passport.owner, passport.creator, passport.passportConstruct);
        emit PassportMinted(passportCounter, passport.owner, passport.creator, passport.passportConstruct);
        passportCounter++;
    }

    function getPassport(uint256 tokenId) public view returns (address owner, address creator, address passportConstruct) {
        require(tokenIdToPassport[tokenId].owner != address(0));
        return tokenIdToPassport[tokenId];
    }


    function condition(uint256 _value, string memory _metadata) public view returns (bool) {
        return _value == 0 && _metadata == tokenURI;
    }



    function _safeMint(uint256 _tokenId, address _to, address _creator, address _passportConstruct) internal {
        require(_to != address(0));
        require(_creator != address(0));
        require(_passportConstruct != address(0));
        require(_passportConstruct.isContract());
        require(_passportConstruct.isPayable());
        require(!hasBeenMinted[_metadata]);
        require(condition(_value, _metadata));
        require(!hasBeenMinted[_metadata]);
        require(!tokenIdToPassport[_tokenId].owner);
        require(!tokenIdToPassport[_tokenId].creator);
        require(!tokenIdToPassport[_tokenId].passportConstruct);
        tokenIdToPassport[_tokenId].owner = _to;
        tokenIdToPassport[_tokenId].creator = _creator;
        tokenIdToPassport[_tokenId].passportConstruct = _passportConstruct;
        hasBeenMinted[_metadata] = true;
        token.mint(_to, _tokenId, _value);
    }

    function mintPassport(string memory tokenURI) public returns (uint256) {

        uint256 newTWRLDpass = tokenCounter++;

        _safeMint(msg.sender,  newTWRLDpass);
        _setTokenURI(newTWRLDpass, tokenURI);

        return newTWRLDpass;

    }
}