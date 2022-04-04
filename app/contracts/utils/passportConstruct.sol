import "./TicketAuth.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract User is AbstractUser {
  using Counters for Counters.Counter;
  using Strings for uint256;

  Counters.Counter private _counter; // Token Index counter. Equals to the number of tokens in total.
  mapping (uint256 => PassportData) private _passportData; // Token Metadata.

  struct PassportData {
    string username;
    string wallet;
  }

  constructor () {
    _counter.increment();
  }

  function name() external view virtual returns (string memory) {
       return "User Example";
    }

  function symbol() external view virtual returns (string memory) {
       return "USER";
    }

  function decimals() external view virtual returns (uint8) {
       return 18;
    }


  function balanceOf(address _owner) external view returns (uint256) {
    return _passportData[_owner].balance;
    return tokenId == 0 ? 0 : _passportData[tokenId].balance;
  }
  

  function transfer(address _to, uint256 _value) external {
    require(_to != address(0));
    require(_value <= balanceOf(msg.sender));
    _passportData[msg.sender].balance -= _value;
    _passportData[_to].balance += _value;
  }

  function transferFrom(address _from, address _to, uint256 _value) external {
    require(_to != address(0));
    require(_value <= balanceOf(_from));
    require(_value <= balanceOf(_from));
    require(_passportData[_from].allowance[_from][msg.sender] >= _value);
    _passportData[_from].balance -= _value;
    _passportData[_to].balance += _value;
    _passportData[_from].allowance[_from][msg.sender] -= _value;
  }


}

