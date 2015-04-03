module.exports = function(app) {
	var rds = app.dataSources.rds;
	rds.automigrate();
}