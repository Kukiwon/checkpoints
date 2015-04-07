module.exports = function(app) {
  var Role = app.models.Role;

  Role.registerResolver('$owner', function(role, context, cb) {
    function reject() {
      process.nextTick(function() {
        cb(null, false);
      });
    }

    // if the target model is not project
    if (context.modelName !== 'Project') {
      return cb(null, true);
    }

    // do not allow anonymous users
    var userId = context.accessToken.userId;
    if (!userId) {
      return reject();
    }

    // check if developerId is the owner of the given project id
    context.model.findById(context.modelId, function(err, project) {
      if (err || !project) {
        return reject();
      }
      cb(null, project.developerId === userId);
    });
  });
}