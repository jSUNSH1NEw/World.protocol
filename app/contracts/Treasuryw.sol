pragma solidity 0.4.18;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "./WrldERC20.sol";


contract Treasury is Ownable {
    using SafeMath for uint256;

    // Address of token contract
    Wrldtoken public token = Worldtoken(0x0);

    // Exchange rate, how much AVAX does WRLD cost
    uint256 public  tokenRate = 0;
    uint256 public 

    // Decimal positions in token amount
    uint256 public tokenDecimals = 18;

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
        token = Worldtoken(_token);
        tokenRate = _rate;
    }

    function getAvaxAmount(uint256 _tokenAmount) public view returns (uint256) {
        return _tokenAmount.mul(tokenRate);
    }



    // This method is called by token contract
    // when the person submites avax in excahge of WRLD
    function tokenDepositEvent(address _person, uint256 _tokenAmount) public {
        require(msg.sender == address(token));
        uint256 weiAmount = _tokenAmount.div(10**tokenDecimals).mul(tokenRate);
        require(this.balance >= avaxAmount);
        _person.transfer(avaxAmount);
        Exchange(_person, _tokenAmount, avaxAmount);
    }


}
