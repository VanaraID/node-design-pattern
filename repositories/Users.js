const _ = require("lodash");


class Users {

	constructor() {}

	static getAllUsers() {
		const users = [
				{
					"nik" : 1809218,
					"name" : "Eko Wahyu Saputro",
					"address" : "jakarta timur"
				},
				{
					"nik" : 1809219,
					"name" : "Pramesti Hatta K",
					"address" : "jakarta timur"
				}
			]

		return JSON.stringify(users, null, 2);
	}

	static getUserById(nik) {
		const users = [
			{ "nik" : 1809218,"name" : "Eko Wahyu Saputro","address" : "jakarta timur"},
			{ "nik" : 1809219,"name" : "Pramesti Hatta K","address" : "jakarta timur"}
		];

		
		const searchUser = _.find(users, (obj) => {
			if (obj.nik == nik) {
				return JSON.stringify(obj.nik);
			}else {
				return false;
			}
		});

		return searchUser;
		
	}

}

module.exports = Users;