module.exports = function(Session) {
	Session.observe('before save', function init(ctx, next) {
		if(typeof ctx.instance.created === 'undefined')
			ctx.instance.created = Date.now();
		next();
	});

	Session.observe('before delete', function init(ctx, next) {
		ctx.Model.findOne({
				where: {
					id: ctx.where.id,
				},
				include: ['sessionCheckPoints']
			} , function(e, session) {
			if(!!!session || e) {
				next();
				return;
			}
			if(session.sessionCheckPoints && session.sessionCheckPoints.length) {
				session.sessionCheckPoints.destroyAll();
			}
			next();
		});
	});
};
