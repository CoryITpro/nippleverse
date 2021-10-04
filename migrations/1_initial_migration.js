require("dotenv").config()
const NippleVerse = artifacts.require("NippleVerse");
const baseURI = process.env.BASE_URI

module.exports = function (deployer) {
  deployer.deploy(NippleVerse, baseURI);
};
