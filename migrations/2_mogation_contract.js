const TestSuma = artifacts.require("TestSuma.sol");

module.exports = function (deployer) {
  deployer.deploy(TestSuma);
};