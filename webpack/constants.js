const result = {
	modes: {
		development: "development",
		production: "production",
	},
};

result.builds = {
	[result.modes.development]: "development",
	[result.modes.production]: "production",
};

module.exports = result;
