export default class Team {
	constructor() {
		this.characters = []; // Здесь храним персонажей
	}

	addCharacter(character) {
		this.characters.push(character); // Метод для добавления персонажа в команду
	}

	*[Symbol.iterator]() {
		for (const character of this.characters) {
			yield character; // Используем генератор для последовательного перебора персонажей
		}
	}
}

