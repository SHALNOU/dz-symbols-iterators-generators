class Team {
	constructor() {
		this.characters = [];
	}

	addCharacter(character) {
		this.characters.push(character);
	}

	[Symbol.iterator]() {
		let index = 0;

		return {
			next: () => {
				if (index < this.characters.length) {
					return { value: this.characters[index++], done: false };
				} else {
					return { done: true };
				}
			}
		};
	}
}

export default Team;
