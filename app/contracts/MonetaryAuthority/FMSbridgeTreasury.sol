pragma solidity ^0.8.2;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "./TwrldERC20.sol";
import "passport.sol";


contract Treasury is Ownable {
    using SafeMath for uint256;

    // Address of token contract
    TwrldERC20 public token = TwrldERC20(0x0);

    // Exchange rate, how much Avax does 1 TWRLD cost
    uint256 public exchangeRate = 0;
    // Decimal positions in token amount
    uint256 public tokenDecimals = 18;
    // Address of the owner of the contract
    address public owner;

    


    event Deposit(address indexed _from, uint256 _value);

    // Constructor
    constructor() public payable {
        owner = msg.sender;
    }

    event Withdraw(address indexed _to, uint256 _value);
    constructor (address _token) public payable {
        //Widrawable token contract by  TWRLD
    
        token = TwrldERC20(_token);
        owner = msg.sender;
    }

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    
    event Exchange(address _who, uint256 _tokenAmount, uint256 _avaxAmount);
    //
    //function Treasury() public {
    //}

    function() public payable {
        revert();
    }

    function initialize(address _token, uint256 _rate) public payable {
        // Could be run only one time
        require(address(token) == 0x0);
        // Check input data
        require(_token != 0x0);
        require(_rate != 0);
        require(msg.value != 0);
        // Remember data
        token = TwrldERC20(_token);
        twrldRateAvax = _rate;
    }

    function getEtherBalance() public view returns (uint256) {
        return this.balance;
    }

    // This method is called by token contract
    // when the person submites tokens in excahge of ether

    //function to mint over twrld.sol
    function exchange(uint256 _tokenAmount) public payable {
        // Check input data
        require(_tokenAmount != 0);
        require(msg.value != 0);
        // Check if treasury is initialized
        require(token != 0x0);
        // Check if the caller is the token contract
        require(msg.sender == token.address);
        // Check if the caller has enough ether
        require(msg.value >= _tokenAmount * twrldRateAvax);
        // Check if the caller has enough tokens
        require(token.balanceOf(msg.sender) >= _tokenAmount);
        // Check if the caller is the owner
        require(isOwner(msg.sender));
        // Check if the treasury has enough ether
        require(this.balance >= _tokenAmount * twrldRateEur);
        // Transfer tokens to the treasury
        token.transfer(this.address, _tokenAmount);
        // Transfer ether to the treasury
        this.transfer(msg.sender, _tokenAmount * twrldRateEur);
        // Emit event
        Exchange(msg.sender, _tokenAmount, _tokenAmount * twrldRateEur);
    }
    function tokenDepositEvent(address _person, uint256 _tokenAmount) public {
        require(msg.sender == address(token));
        uint256 weiAmount = _tokenAmount.div(10**tokenDecimals).mul(tokenRateWei);
        require(this.balance >= weiAmount);
        _person.transfer(weiAmount);
        Exchange(_person, _tokenAmount, weiAmount);
    }

}

