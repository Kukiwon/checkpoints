module.exports = function(CheckPoint) {
	CheckPoint.observe('before delete', function init(ctx, next) {
		ctx.Model.findOne({
				where: {
					id: ctx.where.id,
				},
				include: ['sessionCheckPoints']
			} , function(e, checkPoint) {
			if(!!!checkPoint || e) {
				next();
				return;
			}
			if(checkPoint.sessionCheckPoints && checkPoint.sessionCheckPoints.length) {
				checkPoint.sessionCheckPoints.destroyAll();
			}
			next();
		});
	});
};
