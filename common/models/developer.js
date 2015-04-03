module.exports = function(Developer) {
	Developer.beforeRemote('create', function(context, user, next) {
		var req = context.req;
		req.body.created = Date.now();
		req.body.emailVerified = false;
		next();
	});
};
