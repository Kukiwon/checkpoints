var crypto = require('crypto'),
biguint = require('biguint-format');

module.exports = function(Project, CheckPoint) {

	Project.observe('before save', function init(ctx, next) {
		if(typeof ctx.instance.created === 'undefined')
			ctx.instance.created = Date.now();
		if(typeof ctx.instance.hash === 'undefined')
			ctx.instance.hash = biguint(crypto.randomBytes(10), 'dec');
		next();
	});

	Project.observe('before delete', function init(ctx, next) {
		ctx.Model.findOne({
				where: {
					id: ctx.where.id,
				},
				include: [{'sessions': ['sessionCheckPoints']}, 'checkPoints']
			} , function(e, project) {
			if(!!!project || e) {
				next();
				return;
			}
			if(project.checkPoints && project.checkPoints.length) {
				project.checkPoints.destroyAll();
			}

			if(project.sessions && project.sessions.length) {
				project.__get__sessions(function(e, sessions) {
					if(sessions && sessions.length) {
						sessions.forEach(function(session) {
							session.sessionCheckPoints.destroyAll();
						});
					}
					project.sessions.destroyAll();
				});
			}
			next();
		});
	});
};
