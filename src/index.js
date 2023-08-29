import Team from "/Users/macbookair/Desktop/dz-symbols-iterators-generators/src/js/Team.js";
import canIterate from "/Users/macbookair/Desktop/dz-symbols-iterators-generators/src/js/CanIterate.js";
import createTeamIterator from "/Users/macbookair/Desktop/dz-symbols-iterators-generators/src/js/CreateTeamIterator.js";
import "/Users/macbookair/Desktop/dz-symbols-iterators-generators/src/css/style.css"


const team = new Team();

const character1 = {
	name: 'Лучник',
	type: 'Bowman',
	health: 50,
	level: 1,
	attack: 40,
	defence: 10
};

const character2 = {
	name: 'Маг',
	type: 'Wizard',
	health: 60,
	level: 2,
	attack: 60,
	defence: 5
};

team.addCharacter(character1);
team.addCharacter(character2);

for (const character of team) {
	console.log(character.name); // Выводим имена персонажей
}


console.log(canIterate(new Map())); // true - Map поддерживает итерацию
console.log(canIterate(new Set())); // true - Set поддерживает итерацию
console.log(canIterate(null)); // false - null не является итерируемым
console.log(canIterate(10)); // false - число не является итерируемым
console.log(canIterate("Netology")); // true - строка поддерживает итерацию


const teamTwo = new Team();

const characterOne = {
	name: 'Лучник',
	type: 'Bowman',
	health: 50,
	level: 1,
	attack: 40,
	defence: 10
};

const characterTwo = {
	name: 'Маг',
	type: 'Wizard',
	health: 60,
	level: 2,
	attack: 60,
	defence: 5
};

team.addCharacter(characterOne);
team.addCharacter(characterTwo);

const teamIterator = createTeamIterator(teamTwo);

for (const character of teamIterator) {
	console.log(character.name);
}
