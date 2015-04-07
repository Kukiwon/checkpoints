module.exports = function(SessionCheckPoint) {
	SessionCheckPoint.observe('before save', function init(ctx, next) {
		if(typeof ctx.instance.created === 'undefined')
			ctx.instance.created = Date.now();
		next();
	});
};
