export default function* createTeamIterator(team) {
	for (const character of team.characters) {
		yield character;
	}
}
export class Team {
	constructor() {
		this.characters = [];
	}

	addCharacter(character) {
		this.characters.push(character);
	}
}

