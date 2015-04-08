!function(e,t,o){"use strict";var s="/api",r="authorization",n=t.module("lbServices",["ngResource"]);n.factory("AccessToken",["LoopBackResource","LoopBackAuth","$injector",function(e){var t=e(s+"/AccessTokens/:id",{id:"@id"},{create:{url:s+"/AccessTokens",method:"POST"},upsert:{url:s+"/AccessTokens",method:"PUT"},exists:{url:s+"/AccessTokens/:id/exists",method:"GET"},findById:{url:s+"/AccessTokens/:id",method:"GET"},find:{isArray:!0,url:s+"/AccessTokens",method:"GET"},findOne:{url:s+"/AccessTokens/findOne",method:"GET"},updateAll:{url:s+"/AccessTokens/update",method:"POST"},deleteById:{url:s+"/AccessTokens/:id",method:"DELETE"},count:{url:s+"/AccessTokens/count",method:"GET"},prototype$updateAttributes:{url:s+"/AccessTokens/:id",method:"PUT"},"::findById::Developer::accessTokens":{url:s+"/Developers/:id/accessTokens/:fk",method:"GET"},"::destroyById::Developer::accessTokens":{url:s+"/Developers/:id/accessTokens/:fk",method:"DELETE"},"::updateById::Developer::accessTokens":{url:s+"/Developers/:id/accessTokens/:fk",method:"PUT"},"::get::Developer::accessTokens":{isArray:!0,url:s+"/Developers/:id/accessTokens",method:"GET"},"::create::Developer::accessTokens":{url:s+"/Developers/:id/accessTokens",method:"POST"},"::delete::Developer::accessTokens":{url:s+"/Developers/:id/accessTokens",method:"DELETE"},"::count::Developer::accessTokens":{url:s+"/Developers/:id/accessTokens/count",method:"GET"}});return t.updateOrCreate=t.upsert,t.update=t.updateAll,t.destroyById=t.deleteById,t.removeById=t.deleteById,t.modelName="AccessToken",t}]),n.factory("ACL",["LoopBackResource","LoopBackAuth","$injector",function(e){var t=e(s+"/ACLs/:id",{id:"@id"},{create:{url:s+"/ACLs",method:"POST"},upsert:{url:s+"/ACLs",method:"PUT"},exists:{url:s+"/ACLs/:id/exists",method:"GET"},findById:{url:s+"/ACLs/:id",method:"GET"},find:{isArray:!0,url:s+"/ACLs",method:"GET"},findOne:{url:s+"/ACLs/findOne",method:"GET"},updateAll:{url:s+"/ACLs/update",method:"POST"},deleteById:{url:s+"/ACLs/:id",method:"DELETE"},count:{url:s+"/ACLs/count",method:"GET"},prototype$updateAttributes:{url:s+"/ACLs/:id",method:"PUT"}});return t.updateOrCreate=t.upsert,t.update=t.updateAll,t.destroyById=t.deleteById,t.removeById=t.deleteById,t.modelName="ACL",t}]),n.factory("RoleMapping",["LoopBackResource","LoopBackAuth","$injector",function(e,t,o){var r=e(s+"/RoleMappings/:id",{id:"@id"},{prototype$__get__role:{url:s+"/RoleMappings/:id/role",method:"GET"},create:{url:s+"/RoleMappings",method:"POST"},upsert:{url:s+"/RoleMappings",method:"PUT"},exists:{url:s+"/RoleMappings/:id/exists",method:"GET"},findById:{url:s+"/RoleMappings/:id",method:"GET"},find:{isArray:!0,url:s+"/RoleMappings",method:"GET"},findOne:{url:s+"/RoleMappings/findOne",method:"GET"},updateAll:{url:s+"/RoleMappings/update",method:"POST"},deleteById:{url:s+"/RoleMappings/:id",method:"DELETE"},count:{url:s+"/RoleMappings/count",method:"GET"},prototype$updateAttributes:{url:s+"/RoleMappings/:id",method:"PUT"},"::findById::Role::principals":{url:s+"/Roles/:id/principals/:fk",method:"GET"},"::destroyById::Role::principals":{url:s+"/Roles/:id/principals/:fk",method:"DELETE"},"::updateById::Role::principals":{url:s+"/Roles/:id/principals/:fk",method:"PUT"},"::get::Role::principals":{isArray:!0,url:s+"/Roles/:id/principals",method:"GET"},"::create::Role::principals":{url:s+"/Roles/:id/principals",method:"POST"},"::delete::Role::principals":{url:s+"/Roles/:id/principals",method:"DELETE"},"::count::Role::principals":{url:s+"/Roles/:id/principals/count",method:"GET"}});return r.updateOrCreate=r.upsert,r.update=r.updateAll,r.destroyById=r.deleteById,r.removeById=r.deleteById,r.modelName="RoleMapping",r.role=function(){var e=o.get("Role"),t=e["::get::RoleMapping::role"];return t.apply(r,arguments)},r}]),n.factory("Role",["LoopBackResource","LoopBackAuth","$injector",function(e,t,o){var r=e(s+"/Roles/:id",{id:"@id"},{prototype$__findById__principals:{url:s+"/Roles/:id/principals/:fk",method:"GET"},prototype$__destroyById__principals:{url:s+"/Roles/:id/principals/:fk",method:"DELETE"},prototype$__updateById__principals:{url:s+"/Roles/:id/principals/:fk",method:"PUT"},prototype$__get__principals:{isArray:!0,url:s+"/Roles/:id/principals",method:"GET"},prototype$__create__principals:{url:s+"/Roles/:id/principals",method:"POST"},prototype$__delete__principals:{url:s+"/Roles/:id/principals",method:"DELETE"},prototype$__count__principals:{url:s+"/Roles/:id/principals/count",method:"GET"},create:{url:s+"/Roles",method:"POST"},upsert:{url:s+"/Roles",method:"PUT"},exists:{url:s+"/Roles/:id/exists",method:"GET"},findById:{url:s+"/Roles/:id",method:"GET"},find:{isArray:!0,url:s+"/Roles",method:"GET"},findOne:{url:s+"/Roles/findOne",method:"GET"},updateAll:{url:s+"/Roles/update",method:"POST"},deleteById:{url:s+"/Roles/:id",method:"DELETE"},count:{url:s+"/Roles/count",method:"GET"},prototype$updateAttributes:{url:s+"/Roles/:id",method:"PUT"},"::get::RoleMapping::role":{url:s+"/RoleMappings/:id/role",method:"GET"}});return r.updateOrCreate=r.upsert,r.update=r.updateAll,r.destroyById=r.deleteById,r.removeById=r.deleteById,r.modelName="Role",r.principals=function(){var e=o.get("RoleMapping"),t=e["::get::Role::principals"];return t.apply(r,arguments)},r.principals.count=function(){var e=o.get("RoleMapping"),t=e["::count::Role::principals"];return t.apply(r,arguments)},r.principals.create=function(){var e=o.get("RoleMapping"),t=e["::create::Role::principals"];return t.apply(r,arguments)},r.principals.destroyAll=function(){var e=o.get("RoleMapping"),t=e["::delete::Role::principals"];return t.apply(r,arguments)},r.principals.destroyById=function(){var e=o.get("RoleMapping"),t=e["::destroyById::Role::principals"];return t.apply(r,arguments)},r.principals.findById=function(){var e=o.get("RoleMapping"),t=e["::findById::Role::principals"];return t.apply(r,arguments)},r.principals.updateById=function(){var e=o.get("RoleMapping"),t=e["::updateById::Role::principals"];return t.apply(r,arguments)},r}]),n.factory("Developer",["LoopBackResource","LoopBackAuth","$injector",function(e,t,o){var r=e(s+"/Developers/:id",{id:"@id"},{prototype$__findById__accessTokens:{url:s+"/Developers/:id/accessTokens/:fk",method:"GET"},prototype$__destroyById__accessTokens:{url:s+"/Developers/:id/accessTokens/:fk",method:"DELETE"},prototype$__updateById__accessTokens:{url:s+"/Developers/:id/accessTokens/:fk",method:"PUT"},prototype$__findById__projects:{url:s+"/Developers/:id/projects/:fk",method:"GET"},prototype$__destroyById__projects:{url:s+"/Developers/:id/projects/:fk",method:"DELETE"},prototype$__updateById__projects:{url:s+"/Developers/:id/projects/:fk",method:"PUT"},prototype$__get__accessTokens:{isArray:!0,url:s+"/Developers/:id/accessTokens",method:"GET"},prototype$__create__accessTokens:{url:s+"/Developers/:id/accessTokens",method:"POST"},prototype$__delete__accessTokens:{url:s+"/Developers/:id/accessTokens",method:"DELETE"},prototype$__count__accessTokens:{url:s+"/Developers/:id/accessTokens/count",method:"GET"},prototype$__get__projects:{isArray:!0,url:s+"/Developers/:id/projects",method:"GET"},prototype$__create__projects:{url:s+"/Developers/:id/projects",method:"POST"},prototype$__delete__projects:{url:s+"/Developers/:id/projects",method:"DELETE"},prototype$__count__projects:{url:s+"/Developers/:id/projects/count",method:"GET"},create:{url:s+"/Developers",method:"POST"},upsert:{url:s+"/Developers",method:"PUT"},exists:{url:s+"/Developers/:id/exists",method:"GET"},findById:{url:s+"/Developers/:id",method:"GET"},find:{isArray:!0,url:s+"/Developers",method:"GET"},findOne:{url:s+"/Developers/findOne",method:"GET"},updateAll:{url:s+"/Developers/update",method:"POST"},deleteById:{url:s+"/Developers/:id",method:"DELETE"},count:{url:s+"/Developers/count",method:"GET"},prototype$updateAttributes:{url:s+"/Developers/:id",method:"PUT"},login:{params:{include:"user"},interceptor:{response:function(e){var o=e.data;return t.setUser(o.id,o.userId,o.user),t.rememberMe=e.config.params.rememberMe!==!1,t.save(),e.resource}},url:s+"/Developers/login",method:"POST"},logout:{interceptor:{response:function(e){return t.clearUser(),t.clearStorage(),e.resource}},url:s+"/Developers/logout",method:"POST"},confirm:{url:s+"/Developers/confirm",method:"GET"},resetPassword:{url:s+"/Developers/reset",method:"POST"},getCurrent:{url:s+"/Developers/:id",method:"GET",params:{id:function(){var e=t.currentUserId;return null==e&&(e="__anonymous__"),e}},interceptor:{response:function(e){return t.currentUserData=e.data,e.resource}},__isGetCurrentUser__:!0}});return r.updateOrCreate=r.upsert,r.update=r.updateAll,r.destroyById=r.deleteById,r.removeById=r.deleteById,r.getCachedCurrent=function(){var e=t.currentUserData;return e?new r(e):null},r.isAuthenticated=function(){return null!=this.getCurrentId()},r.getCurrentId=function(){return t.currentUserId},r.modelName="Developer",r.accessTokens=function(){var e=o.get("AccessToken"),t=e["::get::Developer::accessTokens"];return t.apply(r,arguments)},r.accessTokens.count=function(){var e=o.get("AccessToken"),t=e["::count::Developer::accessTokens"];return t.apply(r,arguments)},r.accessTokens.create=function(){var e=o.get("AccessToken"),t=e["::create::Developer::accessTokens"];return t.apply(r,arguments)},r.accessTokens.destroyAll=function(){var e=o.get("AccessToken"),t=e["::delete::Developer::accessTokens"];return t.apply(r,arguments)},r.accessTokens.destroyById=function(){var e=o.get("AccessToken"),t=e["::destroyById::Developer::accessTokens"];return t.apply(r,arguments)},r.accessTokens.findById=function(){var e=o.get("AccessToken"),t=e["::findById::Developer::accessTokens"];return t.apply(r,arguments)},r.accessTokens.updateById=function(){var e=o.get("AccessToken"),t=e["::updateById::Developer::accessTokens"];return t.apply(r,arguments)},r.projects=function(){var e=o.get("Project"),t=e["::get::Developer::projects"];return t.apply(r,arguments)},r.projects.count=function(){var e=o.get("Project"),t=e["::count::Developer::projects"];return t.apply(r,arguments)},r.projects.create=function(){var e=o.get("Project"),t=e["::create::Developer::projects"];return t.apply(r,arguments)},r.projects.destroyAll=function(){var e=o.get("Project"),t=e["::delete::Developer::projects"];return t.apply(r,arguments)},r.projects.destroyById=function(){var e=o.get("Project"),t=e["::destroyById::Developer::projects"];return t.apply(r,arguments)},r.projects.findById=function(){var e=o.get("Project"),t=e["::findById::Developer::projects"];return t.apply(r,arguments)},r.projects.updateById=function(){var e=o.get("Project"),t=e["::updateById::Developer::projects"];return t.apply(r,arguments)},r}]),n.factory("Project",["LoopBackResource","LoopBackAuth","$injector",function(e,t,o){var r=e(s+"/Projects/:id",{id:"@id"},{prototype$__findById__checkPoints:{url:s+"/Projects/:id/checkPoints/:fk",method:"GET"},prototype$__destroyById__checkPoints:{url:s+"/Projects/:id/checkPoints/:fk",method:"DELETE"},prototype$__updateById__checkPoints:{url:s+"/Projects/:id/checkPoints/:fk",method:"PUT"},prototype$__findById__sessions:{url:s+"/Projects/:id/sessions/:fk",method:"GET"},prototype$__destroyById__sessions:{url:s+"/Projects/:id/sessions/:fk",method:"DELETE"},prototype$__updateById__sessions:{url:s+"/Projects/:id/sessions/:fk",method:"PUT"},prototype$__get__checkPoints:{isArray:!0,url:s+"/Projects/:id/checkPoints",method:"GET"},prototype$__create__checkPoints:{url:s+"/Projects/:id/checkPoints",method:"POST"},prototype$__delete__checkPoints:{url:s+"/Projects/:id/checkPoints",method:"DELETE"},prototype$__count__checkPoints:{url:s+"/Projects/:id/checkPoints/count",method:"GET"},prototype$__get__sessions:{isArray:!0,url:s+"/Projects/:id/sessions",method:"GET"},prototype$__create__sessions:{url:s+"/Projects/:id/sessions",method:"POST"},prototype$__delete__sessions:{url:s+"/Projects/:id/sessions",method:"DELETE"},prototype$__count__sessions:{url:s+"/Projects/:id/sessions/count",method:"GET"},create:{url:s+"/Projects",method:"POST"},upsert:{url:s+"/Projects",method:"PUT"},exists:{url:s+"/Projects/:id/exists",method:"GET"},findById:{url:s+"/Projects/:id",method:"GET"},find:{isArray:!0,url:s+"/Projects",method:"GET"},findOne:{url:s+"/Projects/findOne",method:"GET"},updateAll:{url:s+"/Projects/update",method:"POST"},deleteById:{url:s+"/Projects/:id",method:"DELETE"},count:{url:s+"/Projects/count",method:"GET"},prototype$updateAttributes:{url:s+"/Projects/:id",method:"PUT"},"::findById::Developer::projects":{url:s+"/Developers/:id/projects/:fk",method:"GET"},"::destroyById::Developer::projects":{url:s+"/Developers/:id/projects/:fk",method:"DELETE"},"::updateById::Developer::projects":{url:s+"/Developers/:id/projects/:fk",method:"PUT"},"::get::Developer::projects":{isArray:!0,url:s+"/Developers/:id/projects",method:"GET"},"::create::Developer::projects":{url:s+"/Developers/:id/projects",method:"POST"},"::delete::Developer::projects":{url:s+"/Developers/:id/projects",method:"DELETE"},"::count::Developer::projects":{url:s+"/Developers/:id/projects/count",method:"GET"},"::get::CheckPoint::project":{url:s+"/CheckPoints/:id/project",method:"GET"}});return r.updateOrCreate=r.upsert,r.update=r.updateAll,r.destroyById=r.deleteById,r.removeById=r.deleteById,r.modelName="Project",r.checkPoints=function(){var e=o.get("CheckPoint"),t=e["::get::Project::checkPoints"];return t.apply(r,arguments)},r.checkPoints.count=function(){var e=o.get("CheckPoint"),t=e["::count::Project::checkPoints"];return t.apply(r,arguments)},r.checkPoints.create=function(){var e=o.get("CheckPoint"),t=e["::create::Project::checkPoints"];return t.apply(r,arguments)},r.checkPoints.destroyAll=function(){var e=o.get("CheckPoint"),t=e["::delete::Project::checkPoints"];return t.apply(r,arguments)},r.checkPoints.destroyById=function(){var e=o.get("CheckPoint"),t=e["::destroyById::Project::checkPoints"];return t.apply(r,arguments)},r.checkPoints.findById=function(){var e=o.get("CheckPoint"),t=e["::findById::Project::checkPoints"];return t.apply(r,arguments)},r.checkPoints.updateById=function(){var e=o.get("CheckPoint"),t=e["::updateById::Project::checkPoints"];return t.apply(r,arguments)},r.sessions=function(){var e=o.get("Session"),t=e["::get::Project::sessions"];return t.apply(r,arguments)},r.sessions.count=function(){var e=o.get("Session"),t=e["::count::Project::sessions"];return t.apply(r,arguments)},r.sessions.create=function(){var e=o.get("Session"),t=e["::create::Project::sessions"];return t.apply(r,arguments)},r.sessions.destroyAll=function(){var e=o.get("Session"),t=e["::delete::Project::sessions"];return t.apply(r,arguments)},r.sessions.destroyById=function(){var e=o.get("Session"),t=e["::destroyById::Project::sessions"];return t.apply(r,arguments)},r.sessions.findById=function(){var e=o.get("Session"),t=e["::findById::Project::sessions"];return t.apply(r,arguments)},r.sessions.updateById=function(){var e=o.get("Session"),t=e["::updateById::Project::sessions"];return t.apply(r,arguments)},r}]),n.factory("CheckPoint",["LoopBackResource","LoopBackAuth","$injector",function(e,t,o){var r=e(s+"/CheckPoints/:id",{id:"@id"},{prototype$__get__project:{url:s+"/CheckPoints/:id/project",method:"GET"},create:{url:s+"/CheckPoints",method:"POST"},upsert:{url:s+"/CheckPoints",method:"PUT"},exists:{url:s+"/CheckPoints/:id/exists",method:"GET"},findById:{url:s+"/CheckPoints/:id",method:"GET"},find:{isArray:!0,url:s+"/CheckPoints",method:"GET"},findOne:{url:s+"/CheckPoints/findOne",method:"GET"},updateAll:{url:s+"/CheckPoints/update",method:"POST"},deleteById:{url:s+"/CheckPoints/:id",method:"DELETE"},count:{url:s+"/CheckPoints/count",method:"GET"},prototype$updateAttributes:{url:s+"/CheckPoints/:id",method:"PUT"},"::findById::Project::checkPoints":{url:s+"/Projects/:id/checkPoints/:fk",method:"GET"},"::destroyById::Project::checkPoints":{url:s+"/Projects/:id/checkPoints/:fk",method:"DELETE"},"::updateById::Project::checkPoints":{url:s+"/Projects/:id/checkPoints/:fk",method:"PUT"},"::get::Project::checkPoints":{isArray:!0,url:s+"/Projects/:id/checkPoints",method:"GET"},"::create::Project::checkPoints":{url:s+"/Projects/:id/checkPoints",method:"POST"},"::delete::Project::checkPoints":{url:s+"/Projects/:id/checkPoints",method:"DELETE"},"::count::Project::checkPoints":{url:s+"/Projects/:id/checkPoints/count",method:"GET"},"::get::SessionCheckPoint::checkPoint":{url:s+"/SessionCheckPoints/:id/checkPoint",method:"GET"}});return r.updateOrCreate=r.upsert,r.update=r.updateAll,r.destroyById=r.deleteById,r.removeById=r.deleteById,r.modelName="CheckPoint",r.project=function(){var e=o.get("Project"),t=e["::get::CheckPoint::project"];return t.apply(r,arguments)},r}]),n.factory("Session",["LoopBackResource","LoopBackAuth","$injector",function(e,t,o){var r=e(s+"/Sessions/:id",{id:"@id"},{prototype$__findById__sessionCheckPoints:{url:s+"/Sessions/:id/sessionCheckPoints/:fk",method:"GET"},prototype$__destroyById__sessionCheckPoints:{url:s+"/Sessions/:id/sessionCheckPoints/:fk",method:"DELETE"},prototype$__updateById__sessionCheckPoints:{url:s+"/Sessions/:id/sessionCheckPoints/:fk",method:"PUT"},prototype$__get__sessionCheckPoints:{isArray:!0,url:s+"/Sessions/:id/sessionCheckPoints",method:"GET"},prototype$__create__sessionCheckPoints:{url:s+"/Sessions/:id/sessionCheckPoints",method:"POST"},prototype$__delete__sessionCheckPoints:{url:s+"/Sessions/:id/sessionCheckPoints",method:"DELETE"},prototype$__count__sessionCheckPoints:{url:s+"/Sessions/:id/sessionCheckPoints/count",method:"GET"},create:{url:s+"/Sessions",method:"POST"},upsert:{url:s+"/Sessions",method:"PUT"},exists:{url:s+"/Sessions/:id/exists",method:"GET"},findById:{url:s+"/Sessions/:id",method:"GET"},find:{isArray:!0,url:s+"/Sessions",method:"GET"},findOne:{url:s+"/Sessions/findOne",method:"GET"},updateAll:{url:s+"/Sessions/update",method:"POST"},deleteById:{url:s+"/Sessions/:id",method:"DELETE"},count:{url:s+"/Sessions/count",method:"GET"},prototype$updateAttributes:{url:s+"/Sessions/:id",method:"PUT"},"::findById::Project::sessions":{url:s+"/Projects/:id/sessions/:fk",method:"GET"},"::destroyById::Project::sessions":{url:s+"/Projects/:id/sessions/:fk",method:"DELETE"},"::updateById::Project::sessions":{url:s+"/Projects/:id/sessions/:fk",method:"PUT"},"::get::Project::sessions":{isArray:!0,url:s+"/Projects/:id/sessions",method:"GET"},"::create::Project::sessions":{url:s+"/Projects/:id/sessions",method:"POST"},"::delete::Project::sessions":{url:s+"/Projects/:id/sessions",method:"DELETE"},"::count::Project::sessions":{url:s+"/Projects/:id/sessions/count",method:"GET"},"::get::SessionCheckPoint::session":{url:s+"/SessionCheckPoints/:id/session",method:"GET"}});return r.updateOrCreate=r.upsert,r.update=r.updateAll,r.destroyById=r.deleteById,r.removeById=r.deleteById,r.modelName="Session",r.sessionCheckPoints=function(){var e=o.get("SessionCheckPoint"),t=e["::get::Session::sessionCheckPoints"];return t.apply(r,arguments)},r.sessionCheckPoints.count=function(){var e=o.get("SessionCheckPoint"),t=e["::count::Session::sessionCheckPoints"];return t.apply(r,arguments)},r.sessionCheckPoints.create=function(){var e=o.get("SessionCheckPoint"),t=e["::create::Session::sessionCheckPoints"];return t.apply(r,arguments)},r.sessionCheckPoints.destroyAll=function(){var e=o.get("SessionCheckPoint"),t=e["::delete::Session::sessionCheckPoints"];return t.apply(r,arguments)},r.sessionCheckPoints.destroyById=function(){var e=o.get("SessionCheckPoint"),t=e["::destroyById::Session::sessionCheckPoints"];return t.apply(r,arguments)},r.sessionCheckPoints.findById=function(){var e=o.get("SessionCheckPoint"),t=e["::findById::Session::sessionCheckPoints"];return t.apply(r,arguments)},r.sessionCheckPoints.updateById=function(){var e=o.get("SessionCheckPoint"),t=e["::updateById::Session::sessionCheckPoints"];return t.apply(r,arguments)},r}]),n.factory("SessionCheckPoint",["LoopBackResource","LoopBackAuth","$injector",function(e,t,o){var r=e(s+"/SessionCheckPoints/:id",{id:"@id"},{prototype$__get__checkPoint:{url:s+"/SessionCheckPoints/:id/checkPoint",method:"GET"},prototype$__get__session:{url:s+"/SessionCheckPoints/:id/session",method:"GET"},create:{url:s+"/SessionCheckPoints",method:"POST"},upsert:{url:s+"/SessionCheckPoints",method:"PUT"},exists:{url:s+"/SessionCheckPoints/:id/exists",method:"GET"},findById:{url:s+"/SessionCheckPoints/:id",method:"GET"},find:{isArray:!0,url:s+"/SessionCheckPoints",method:"GET"},findOne:{url:s+"/SessionCheckPoints/findOne",method:"GET"},updateAll:{url:s+"/SessionCheckPoints/update",method:"POST"},deleteById:{url:s+"/SessionCheckPoints/:id",method:"DELETE"},count:{url:s+"/SessionCheckPoints/count",method:"GET"},prototype$updateAttributes:{url:s+"/SessionCheckPoints/:id",method:"PUT"},"::findById::Session::sessionCheckPoints":{url:s+"/Sessions/:id/sessionCheckPoints/:fk",method:"GET"},"::destroyById::Session::sessionCheckPoints":{url:s+"/Sessions/:id/sessionCheckPoints/:fk",method:"DELETE"},"::updateById::Session::sessionCheckPoints":{url:s+"/Sessions/:id/sessionCheckPoints/:fk",method:"PUT"},"::get::Session::sessionCheckPoints":{isArray:!0,url:s+"/Sessions/:id/sessionCheckPoints",method:"GET"},"::create::Session::sessionCheckPoints":{url:s+"/Sessions/:id/sessionCheckPoints",method:"POST"},"::delete::Session::sessionCheckPoints":{url:s+"/Sessions/:id/sessionCheckPoints",method:"DELETE"},"::count::Session::sessionCheckPoints":{url:s+"/Sessions/:id/sessionCheckPoints/count",method:"GET"}});return r.updateOrCreate=r.upsert,r.update=r.updateAll,r.destroyById=r.deleteById,r.removeById=r.deleteById,r.modelName="SessionCheckPoint",r.checkPoint=function(){var e=o.get("CheckPoint"),t=e["::get::SessionCheckPoint::checkPoint"];return t.apply(r,arguments)},r.session=function(){var e=o.get("Session"),t=e["::get::SessionCheckPoint::session"];return t.apply(r,arguments)},r}]),n.factory("LoopBackAuth",function(){function e(){var e=this;r.forEach(function(t){e[t]=s(t)}),this.rememberMe=o,this.currentUserData=null}function t(e,t,o){var s=n+t;null==o&&(o=""),e[s]=o}function s(e){var t=n+e;return localStorage[t]||sessionStorage[t]||null}var r=["accessTokenId","currentUserId"],n="$LoopBack$";return e.prototype.save=function(){var e=this,o=this.rememberMe?localStorage:sessionStorage;r.forEach(function(s){t(o,s,e[s])})},e.prototype.setUser=function(e,t,o){this.accessTokenId=e,this.currentUserId=t,this.currentUserData=o},e.prototype.clearUser=function(){this.accessTokenId=null,this.currentUserId=null,this.currentUserData=null},e.prototype.clearStorage=function(){r.forEach(function(e){t(sessionStorage,e,null),t(localStorage,e,null)})},new e}).config(["$httpProvider",function(e){e.interceptors.push("LoopBackAuthRequestInterceptor")}]).factory("LoopBackAuthRequestInterceptor",["$q","LoopBackAuth",function(e,t){return{request:function(n){if(n.url.substr(0,s.length)!==s)return n;if(t.accessTokenId)n.headers[r]=t.accessTokenId;else if(n.__isGetCurrentUser__){var i={body:{error:{status:401}},status:401,config:n,headers:function(){return o}};return e.reject(i)}return n||e.when(n)}}}]).provider("LoopBackResource",function(){this.setAuthHeader=function(e){r=e},this.setUrlBase=function(e){s=e},this.$get=["$resource",function(e){return function(t,o,s){var r=e(t,o,s);return r.prototype.$save=function(e,t){var o=r.upsert.call(this,{},this,e,t);return o.$promise||o},r}}]})}(window,window.angular),function(){angular.module("checkpoints",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","ui.bootstrap","lbServices"]).config(["$stateProvider","$urlRouterProvider","LoopBackResourceProvider","$httpProvider",function(e,t,o,s){return e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}).state("sign-up",{url:"/sign-up",templateUrl:"app/sign-up/sign-up.html",controller:"SignUpCtrl"}).state("sign-up-complete",{url:"/sign-up-complete",templateUrl:"app/sign-up/sign-up-complete.html"}).state("sign-in",{url:"/sign-in",templateUrl:"app/sign-in/sign-in.html",controller:"SignInCtrl"}).state("projects",{url:"/projects",templateUrl:"app/projects/projects.html",controller:"ProjectsCtrl"}).state("create-project",{url:"/projects/create",templateUrl:"app/projects/create-project.html",controller:"ProjectCtrl"}).state("view-project",{url:"/project/:projectId",templateUrl:"app/projects/project.html",controller:"ProjectCtrl"}).state("create-checkpoint",{url:"/project/:projectId/checkpoints/create",templateUrl:"app/checkpoints/create.html",controller:"CheckpointCtrl"}),o.setUrlBase("/api"),t.otherwise("/"),s.interceptors.push(["$q","$location",function(e,t){return{responseError:function(o){return 401===o.status&&(t.nextAfterLogin=t.path(),t.path("/sign-in")),e.reject(o)}}}])}]).run(function(){})}.call(this),angular.module("checkpoints").factory("AuthService",["Developer","$q","$rootScope",function(e,t,o){function s(t,s){return e.login({email:t,password:s}).$promise.then(function(e){o.currentUser={id:e.user.id,tokenId:e.id,email:t}})}function r(){return e.logout().$promise.then(function(){o.currentUser=null})}function n(t,o){return e.create({email:t,password:o}).$promise}return{login:s,logout:r,register:n}}]),function(){angular.module("checkpoints").controller("NavbarCtrl",["$scope","$rootScope","Developer","AuthService",function(e,t,o,s){return t.$watch("currentUser",function(){return e.isAuthenticated=o.isAuthenticated(),e.user=o.getCurrent()}),e.logOut=function(){return s.logout()}}])}.call(this),function(){angular.module("checkpoints").controller("SignUpCtrl",["$scope","$state","AuthService",function(e,t,o){return e.user={},e.register=function(e){return o.register(e.email,e.password).then(function(){return t.go("sign-up-complete")})["catch"](function(){})}}])}.call(this),function(){angular.module("checkpoints").controller("SignInCtrl",["$scope","$state","AuthService",function(e,t,o){return e.user={},e.signIn=function(s){return o.login(s.email,s.password).then(function(){return t.go("projects")})["catch"](function(t){return e.error=401===t.status?"Your email address and password combination was not correct":"Oops. Something went wrong. Please try again."})}}])}.call(this),function(){angular.module("checkpoints").controller("ProjectsCtrl",["$scope","$state","$window","Developer",function(e,t,o,s){return e.create=function(){return t.go("create-project")},e.init=function(){return e.projects=s.projects({id:s.getCurrentId(),filter:{include:["checkPoints","sessions"]}})},e.view=function(e){return t.go("view-project",{projectId:e.id})},e["delete"]=function(t){return o.confirm("Are you sure that you want to delete this project? Your tracking applications will lose all references to this project!")?t.$delete().then(function(){return console.log("yo"),e.init()})["catch"](function(e){return console.log(e)}):void 0}}])}.call(this),function(){angular.module("checkpoints").controller("ProjectCtrl",["$scope","$state","Developer","Project",function(e,t,o,s){return t.params.projectId&&(e.project=s.findOne({id:t.params.projectId,filter:{include:[{sessions:[{sessionCheckPoints:["checkPoint"]}]},"checkPoints"],where:{id:t.params.projectId}}})),e.create=function(e){var s;return s=o.getCurrentId(),e.created=new Date,o.projects.create({id:s},e,function(){return t.go("projects")})},e.createCheckpoint=function(){return t.go("create-checkpoint",{projectId:e.project.id})}}])}.call(this),function(){angular.module("checkpoints").controller("MainCtrl",["$scope",function(){}])}.call(this),function(){angular.module("checkpoints").controller("CheckpointCtrl",["$scope","$state","Developer","Project",function(e,t,o,s){return e.createCheckpoint=function(e){return e.created=new Date,s.checkPoints.create({id:t.params.projectId},e,function(){return t.go("view-project",{projectId:t.params.projectId})})}}])}.call(this),angular.module("checkpoints").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container" id="main"><div class="jumbotron text-center"><h1>CHECKPOINTS <i class="glyphicon glyphicon-ok"></i></h1><p class="lead">Straight-forward, easy and fast user-flow tracking.</p><p><a class="btn btn-lg btn-success sign-up" ng-href="#/sign-up">Sign up for free!</a></p><a ng-href="#/sign-in">log in</a></div><div class="row"><div class="col-xs-12 col-md-4 column"><h1><i class="glyphicon glyphicon-fast-forward"></i></h1><h3>Get started in minutes</h3><p>Checkpoints for iOS is available through CocoaPods. Add the dependency, add a one-line config and mark checkpoints in your code and you\'re good to go.</p></div><div class="col-xs-12 col-md-4 column"><h1><i class="fa fa-github"></i></h1><h3>Open Source</h3><p>All of the code is available on Github under the MIT license. Want to improve the code? Create a fork and get going!</p></div><div class="col-xs-12 col-md-4 column"><h1><i class="fa fa-apple"></i> <i class="fa fa-android"></i> <i class="fa fa-desktop"></i></h1><h3>Multi-platform</h3><p>Currently available for iOS, Checkpoints will be available for Android and AngularJS soon!</p></div></div></div>'),e.put("app/projects/create-project.html",'<div class="container"><h1>Create a new Project</h1><hr><form ng-submit="create(project)"><div class="form-group" ng-class="{\'has-error\': error}"><label for="exampleInputEmail1">Name</label> <input type="text" class="form-control" autofocus="autofocus" placeholder="Project name (i.e. \'My Awesome App\')" ng-model="project.name"></div><span ng-show="error" class="help-block">{{error}}</span> <button type="submit" class="btn btn-default">Create</button></form></div>'),e.put("app/projects/project.html",'<div class="container" ng-init="init()"><button class="btn btn-primary pull-right" ng-click="createCheckpoint()">Create Checkpoint</button><h1>{{project.name}}</h1><pre><b>ID</b> {{project.id}}</pre><hr><h2>Checkpoints</h2><table class="table table-striped"><tr><th>ID</th><th>Checkpoint</th><th>Created</th><th style="width:100px;"></th></tr><tr ng-repeat="checkpoint in project.checkPoints | orderBy:\'id\'"><td>{{checkpoint.id}}</td><td>{{checkpoint.name}}</td><td>{{checkpoint.created | date:\'short\'}}</td><td><button class="btn btn-danger" ng-click="delete(checkpoint)"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr ng-if="!project.checkPoints.length"><td colspan="10">No checkpoints found. Define a new Checkpoint by clicking \'Create Checkpoint\' in the upper right corner.</td></tr></table><h2>Sessions</h2><table class="table table-striped" ng-class="{disabled: !project.sessions.length}"><tr><th>Session Identifier</th><th>Checkpoint</th><th>Created</th></tr><tbody ng-repeat="session in project.sessions | orderBy:\'id\'"><tr><td>{{session.identifier}}</td><td></td><td>{{session.created | date:\'medium\'}}</td></tr><tr ng-repeat="sessionCheckPoint in session.sessionCheckPoints"><td></td><td>{{sessionCheckPoint.checkPoint.name}}</td><td>{{sessionCheckPoint.created | date:\'medium\'}}</td></tr><tbody ng-if="!project.sessions.length"><tr><td colspan="10">No Sessions found. Sessions are automatically created when your app is set up correctly and the SDK is initialized.</td></tr></tbody></tbody></table></div>'),e.put("app/projects/projects.html",'<div class="container" ng-init="init()"><button class="btn btn-primary pull-right" ng-click="create()">Create Project</button><h1>Projects</h1><hr><table class="table table-striped"><tr><th>Project ID</th><th>Project name</th><th>Created</th><th># Checkpoints</th><th># Sessions</th><th style="width: 100px;"></th></tr><tr ng-repeat="project in projects | orderBy:\'id\'"><td>{{project.id}}</td><td>{{project.name}}</td><td>{{project.created | date:\'short\'}}</td><td>{{project.checkPoints.length}}</td><td>{{project.sessions.length}}</td><td><button class="btn btn-default" ng-click="view(project)"><i class="glyphicon glyphicon-eye-open"></i></button> <button class="btn btn-danger" ng-click="delete(project)"><i class="glyphicon glyphicon-trash"></i></button></td></tr><tr ng-if="!projects.length"><td colspan="10">No projects found. Click "Create Project" to create a new project.</td></tr></table></div>'),e.put("app/sign-in/sign-in.html",'<div class="container"><h1>Sign in</h1><hr><form ng-submit="signIn(user)"><div class="form-group" ng-class="{\'has-error\': error}"><label for="exampleInputEmail1">Email address</label> <input type="email" class="form-control" placeholder="Enter email" ng-model="user.email"></div><div class="form-group" ng-class="{\'has-error\': error}"><label for="exampleInputPassword1">Password</label> <input type="password" class="form-control" placeholder="Password" ng-model="user.password"></div><span ng-show="error" class="help-block">{{error}}</span> <button type="submit" class="btn btn-primary"><i class="fa fa-lock"></i> Sign In</button></form></div>'),e.put("app/sign-up/sign-up-complete.html",'<div class="container"><div class="jumbotron text-center"><h1><i class="glyphicon glyphicon glyphicon-fire"></i> Bravo!</h1><p class="lead">Your account has been created. Please sign in to continue.</p><p><a class="btn btn-lg btn-success" ng-href="#/sign-in">Sign in</a></p></div></div>'),e.put("app/sign-up/sign-up.html",'<div class="container"><h1>Sign up</h1><hr><form ng-submit="register(user)"><div class="form-group"><label>Email address</label> <input type="email" class="form-control" placeholder="Your email" ng-model="user.email"></div><div class="form-group"><label>Name</label> <input type="text" class="form-control" placeholder="Your name" ng-model="user.name" required="required"></div><div class="form-group"><label>Password</label> <input type="password" class="form-control" placeholder="Password" ng-model="user.password"></div><button type="submit" class="btn btn-primary">Submit</button></form></div>'),e.put("app/checkpoints/create.html",'<div class="container"><h1>Create a new Checkpoint</h1><hr><form ng-submit="createCheckpoint(checkpoint)"><div class="form-group" ng-class="{\'has-error\': error}"><label for="exampleInputEmail1">Name</label> <input type="text" class="form-control" autofocus="autofocus" placeholder="Checkpoint name" ng-model="checkpoint.name"></div><span ng-show="error" class="help-block">{{error}}</span> <button type="submit" class="btn btn-default">Create</button></form></div>'),e.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="container-fluid"><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li><a class="" href="#/"><span class="glyphicon glyphicon-ok"></span> Checkpoints</a></li><li ng-if="isAuthenticated"><a ng-href="#/projects">Projects</a></li></ul><ul ng-if="!isAuthenticated" class="nav navbar-nav navbar-right"><li><a ng-href="#/sign-up">Sign Up</a></li><li><a ng-href="#/sign-in">Sign in</a></li></ul><ul ng-if="isAuthenticated" class="nav navbar-nav navbar-right"><li><a ng-href="#">{{user.email}}</a></li><li><a ng-href="#" ng-click="logOut()">Log Out</a></li></ul></div></div></nav>')
}]);