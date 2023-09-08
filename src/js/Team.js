class Team {
	constructor() {
		this.characters = [];
	}

	addCharacter(character) {
		this.characters.push(character);
	}

	*[Symbol.iterator]() {
		let index = 0;

		while (index < this.characters.length) {
			yield this.characters[index++];
		}
	}
}

export default Team;
