var crypto = require('crypto'),
biguint = require('biguint-format');

module.exports = function(Project) {

	Project.observe('before save', function init(ctx, next) {
		if(typeof ctx.instance.created === 'undefined')
			ctx.instance.created = Date.now();
		if(typeof ctx.instance.hash === 'undefined')
			ctx.instance.hash = biguint(crypto.randomBytes(10), 'dec');
		next();
	});
};
