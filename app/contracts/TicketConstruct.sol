import "./TicketAuth.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract User is AbstractUser {
  using Counters for Counters.Counter;
  using Strings for uint256;

  Counters.Counter private _counter; // Token Index counter. Equals to the number of tokens in total.
  mapping (uint256 => TokenMeta) private _tokenMetas;
  mapping (string => uint256) private _username2tokenId;

  struct TokenMeta{
    string username;
    string wallet;
  }

  constructor () {
    _counter.increment();
  }

  function name() external view virtual returns (string memory) {
       return "User Example";
    }

    //function register 
    function register(string memory _username, string memory _wallet) external {
      require(_username.length > 0);
      require(_wallet.length > 0);
      require(_username2tokenId[_username] == 0);
      _username2tokenId[_username] = _counter.get();
      TokenMeta tokenMeta;
      tokenMeta.username = _username;
      tokenMeta.wallet = _wallet;
      _tokenMetas[_counter.get()] = tokenMeta;
      _counter.increment();
    }


    //function the users have buy the token 
    function getTokenMeta(uint256 _tokenId) external view returns (string memory, string memory) {
      require(_tokenId > 0);
      TokenMeta tokenMeta = _tokenMetas[_tokenId];
      return (tokenMeta.username, tokenMeta.wallet);
    }

    function authenticate(string memory _username, string memory _wallet) external view returns (bool) {
      require(_username.length > 0);
      require(_wallet.length > 0);
      uint256 tokenId = _username2tokenId[_username];
      require(tokenId != 0);
      TokenMeta tokenMeta = _tokenMetas[tokenId];
      return tokenMeta.wallet == _wallet;
    }

    //functio set wallet to be the only wallet to be able to access the token
    function setWallet(string memory _username, string memory _wallet) external {
      require(_username.length > 0);
      require(_wallet.length > 0);
      uint256 tokenId = _username2tokenId[_username];
      require(tokenId != 0);
      TokenMeta tokenMeta = _tokenMetas[tokenId];
      tokenMeta.wallet = _wallet;
      _tokenMetas[tokenId] = tokenMeta;
    }

    //function tokenMeta 
    function tokenMeta(uint256 _tokenId) external view returns (string memory, TokenMeta memory) {
      require(_tokenId != 0);
      //get uri
      TokenMeta tokenMeta = _tokenMetas[_tokenId];
      //return the whole data structure
      return (tokenMeta.username, tokenMeta.wallet);
    }


//function set token meta 
function setTokenMeta(uint256 _tokenId, string memory _username, string memory _wallet) external {
    require(_tokenId != 0);
    TokenMeta tokenMeta = _tokenMetas[_tokenId];
    tokenMeta.username = _username;
    tokenMeta.wallet = _wallet;
    _tokenMetas[_tokenId] = tokenMeta;
}


//function authenticate the token
function authenticateToken(uint256 _tokenId) external view returns (bool) {
    require(_tokenId != 0);
    TokenMeta tokenMeta = _tokenMetas[_tokenId];
    return tokenMeta.wallet != "";
}