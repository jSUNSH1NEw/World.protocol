const Passport = artifacts.require("./contract/passport.sol");

module.exports = function(deployer) {
  deployer.deploy(Passport);
};