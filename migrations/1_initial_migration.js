var Migrations = artifacts.require("./Migrations.sol");
var FactoryEmoji = artifacts.require("./FactoryEmoji.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(FactoryEmoji);
};
