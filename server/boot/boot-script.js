module.exports = function(app) {
	var rds = app.dataSources.rds;
	

	function createDevelopers() {
		rds.automigrate('Developer', function(err) {
			if (err) throw err;
			var Developer = app.models.Developer;
			Developer.create([
				{email: 'jordy@foove.nl', password: 'test123'},
				{email: 'john@doe.com', password: 'johndoe'}], 
			function(err, res) {
				if(err) throw err;
				console.log(res)

				//rds.automigrate();
			});
		});
	}

	function createProjects() {
		rds.automigrate('Project', function(err) {
			if (err) throw err;
			var Project = app.models.Project;
			Project.create([
				{name: 'Whever', developerId: '1'},
				{name: 'Divid', developerId: '1'},
				{name: 'Studex Benelux', developerId: '1'},
				{name: 'Ordr', developerId: '2'}],
			function(err, res) {
				if(err) throw err;
				console.log(res)

				rds.automigrate('CheckPoint', function(err) {
					if (err) throw err;
					var CheckPoint = app.models.CheckPoint;
					CheckPoint.create([
						{name: 'signup', projectId: 1},
						{name: 'login', projectId: 1},
						{name: 'fetch data', projectId: 1},
						{name: 'post data', projectId: 1}],
						function(err, res) {
							if(err) throw err;
							console.log(res);
						});
				});
				rds.automigrate('Session');
				rds.automigrate('SessionCheckPoint');
				rds.automigrate('Role');
				rds.automigrate('RoleMapping');
			});
		});
	}

	createDevelopers();
	createProjects();
}