
class Users {

	static getAllUsers() {
		const users = {
			name : "Eko Wahyu Saputro",
			nik : 1809218,
			address : "jakarta timur"
		}

		return JSON.stringify(users, null, 2);
	}

}

module.exports = Users;