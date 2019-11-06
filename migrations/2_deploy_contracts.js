const HltToken = artifacts.require("./HltToken.sol");

module.exports = function (deployer, network, accounts) {
		console.log(`Accounts: ${accounts}`);

		let hltToken = null;

		const owner = accounts[0];
		const admin = accounts[1];

		return deployer.deploy(
			HltToken, admin,  { from: owner }
		).then(() => {
			return HltToken.deployed().then(instance => {
				hltToken = instance;
				console.log(`HltToken deployed at \x1b[36m${instance.address}\x1b[0m`)
			});
		});
};		
