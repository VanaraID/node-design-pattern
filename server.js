/**
 * infra
 */
const RoutingServer = require("./infrastructures/routing-server");


/**
 * interface
 */
 const WebServerInterface = require("./interfaces/webserver");


 /**
 * usecase
 */

 const UserInteractor = require("./usecases/Users");





 const userInteractor = new UserInteractor();
 const webServerInterface = new WebServerInterface({
 	UserInteractor : userInteractor,
 });

 const expressWebServer = new RoutingServer({
  WebServerInterface: webServerInterface,
});

 expressWebServer.start();