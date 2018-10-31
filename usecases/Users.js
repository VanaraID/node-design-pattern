const UserRepositories = require("../repositories/Users");

class Users {

	displayUsers() {
		return UserRepositories.getAllUsers();
	}
}

module.exports = Users;