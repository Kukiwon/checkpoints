module.exports = function(Developer) {
	Developer.observe('before save', function init(ctx, next) {
		if(typeof ctx.instance.created === 'undefined')
			ctx.instance.created = Date.now();
		if(typeof ctx.instance.emailVerified === 'undefined')
			ctx.instance.emailVerified = false;
		next();
	});
};
