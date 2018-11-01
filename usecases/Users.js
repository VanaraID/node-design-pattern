const UserRepositories = require("../repositories/Users");

class Users {

	displayUsers() {
		return UserRepositories.getAllUsers();
	}
	displayUserById(nik) {
		return UserRepositories.getUserById(nik);
	}
}

module.exports = Users;