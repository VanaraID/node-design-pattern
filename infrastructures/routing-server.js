const express = require('express');
const app = express();

class RoutingServer {
	//use constructor 
	constructor(options) {
		this.webServerInterface = options.WebServerInterface;
	}

	start() {
		app.get('/', (req, res) => {
			res.setHeader('content-type', 'application/json');
			res.status(200).send(this.webServerInterface.displayApiUsers());
		});

		app.get('/user/:id', (req,res) => {
			let nik = req.params.id;
			res.setHeader('content-type', 'application/json');
			res.status(200).send(this.webServerInterface.diplayApiUserById(nik));
		});

		app.listen(5000, () => {
	      console.log('Example app listening on port 5000!');
	    });
	}
}

module.exports = RoutingServer;

