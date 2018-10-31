/**
 * WebServer interface is a gateway between usecases and web server detail
 * implementation
 */

 class WebServer {
 	constructor(options) {
 		this.userInteractor = options.UserInteractor;
 	}

 	displayApiUsers() {
 		return this.userInteractor.displayUsers();
 	}
 }

 module.exports = WebServer;