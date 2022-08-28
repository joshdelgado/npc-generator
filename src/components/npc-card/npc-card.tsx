import React, { Component } from 'react';
import { SimpleRange } from '../../interfaces/simple-range';
import { Stat } from '../../interfaces/stat';

class RaceInfo {
	age: SimpleRange = { min: 0, max: 0 };
	height: SimpleRange = { min: 0, max: 0 };
	weight: SimpleRange = { min: 0, max: 0 };
	names: { male: string[], female: string[], surname: string[] } = { male: [], female: [], surname: [] };

	constructor(name: string, minAge: number, maxAge: number, minHeight: number, maxHeight: number, minWeight: number, maxWeight: number) {
		this.setNames(name);
		this.age.min = minAge;
		this.age.max = maxAge;
		this.height.min = minHeight;
		this.height.max = maxHeight;
		this.weight.min = minWeight;
		this.weight.max = maxWeight;
	}

	setNames(name: string): void {
		this.names.male = [];
		this.names.female = [];
		this.names.surname = [];
		switch (name) {
			case 'dragonborn':
				this.names.male = ['Arjhan', 'Balasar', 'Bharash', 'Donaar', 'Ghesh', 'Heskan', 'Kriv', 'Medrash', 'Mehen', 'Nadarr', 'Pandjed', 'Patrin', 'Rhogar', 'Shamash', 'Shedinn', 'Tarhun', 'Torinn'];
				this.names.female = ['Akra', 'Biri', 'Daar', 'Farideh', 'Harann', 'Havilar', 'Jheri', 'Kava', 'Korinn', 'Mishann', 'Nala', 'Perra', 'Raiann', 'Sora', 'Surina', 'Thava', 'Uadjit'];
				this.names.surname = ['Clethtinthiallor', 'Daardendrian', 'Delmirev', 'Drachedandion', 'Fenkenkabradon', 'Kepeshkmolik', 'Kerrhylon', 'Kimbatuul', 'Linxakasendalor', 'Myastan', 'Nemmonis', 'Norixius', 'Ophinshtalajiir', 'Prexijandilin', 'Shestendeliath', 'Turnuroth', 'Verthisathurgiesh', 'Yarjerit'];
				break;
			case 'dwarf':
				this.names.male = ['Adrik', 'Alberich', 'Baern', 'Barendd', 'Brottor', 'Bruenor', 'Dain', 'Darrak', 'Delg', 'Eberk', 'Einkil', 'Fargrim', 'Flint', 'Gardain', 'Harbek', 'Kildrak', 'Morgran', 'Orsik', 'Oskar', 'Rangrim', 'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Veit', 'Vondal'];
				this.names.female = ['Amber', 'Artin', 'Audhild', 'Bardryn', 'Dagnal', 'Diesa', 'Eldeth', 'Falkrunn', 'Finellen', 'Gunnloda', 'Gurdis', 'Helja', 'Hlin', 'Kathra', 'Kristryd', 'Ilde', 'Liftrasa', 'Mardred', 'Riswynn', 'Sannl', 'Torbera', 'Torgga', 'Vistra'];
				this.names.surname = ['Balderk', 'Battlehammer', 'Brawnanvil', 'Dankil', 'Fireforge', 'Frostbeard', 'Gorunn', 'Holderhek', 'Ironfist', 'Loderr', 'Lutgehr', 'Rumnaheim', 'Strakeln', 'Torunn', 'Ungart'];
				break;
			case 'elf':
				this.names.male = ['Adran', 'Aelar', 'Aramil', 'Arannis', 'Aust', 'Beiro', 'Berrian', 'Carric', 'Enialis', 'Erdan', 'Erevan', 'Galinndan', 'Hadarai', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Laucian', 'Mindartis', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Thamior', 'Tharivol', 'Theren', 'Varis', 'Aseir', 'Bardeid', 'Haseid', 'Khemed', 'Mehmen', 'Sudeiman', 'Zasheir', 'Darvin', 'Dorn', 'Evendur', 'Gorstag', 'Grim', 'Helm', 'Malark', 'Morn', 'Randal', 'Stedd', 'Bor', 'Fodel', 'Glar', 'Grigor', 'Igan', 'Ivor', 'Kosef', 'Mival', 'Orel', 'Pavel', 'Sergor', 'Ander', 'Blath', 'Bran', 'Frath', 'Geth', 'Lander', 'Luth', 'Malcer', 'Stor', 'Taman', 'Urth Aoth', 'Bareris', 'Ehput-Ki', 'Kethoth', 'Mumed', 'Ramas', 'So-Kehur', 'Thazar-De', 'Urhur', 'Borivik', 'Faurgar', 'Jandar', 'Kanithar', 'Madislak', 'Ralmevik', 'Shaumar', 'Vladislak', 'An', 'Chen', 'Chi', 'Fai', 'Jiang', 'Jun', 'Lian', 'Long', 'Meng', 'On', 'Shan', 'Shui', 'Wen', 'Anton', 'Diero', 'Marcon', 'Pieron', 'Rimardo', 'Romero', 'Salazar', 'Umbero'];
				this.names.female = ['Adrie', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Bethrynna', 'Birel', 'Caelynn', 'Drusilia', 'Enna', 'Felosial', 'Ielenia', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Meriele', 'Mialee', 'Naivara', 'Quelenna', 'Quillathe', 'Sariel', 'Shanairra', 'Shava', 'Silaqui', 'Theirastra', 'Thia', 'Vadania', 'Valanthe', 'Xanaphia'];
				this.names.surname = ['Amakiir (Gemflower)', 'Amastacia (Starflower)', 'Galanodel (Moonwhisper)', 'Holimion (Diamonddew)', 'Ilphelkiir (Gemblossom)', 'Liadon (Silverfrond)', 'Meliamne (Oakenheel)', 'Naïlo (Nightbreeze)', 'Siannodel (Moonbrook)', 'Xiloscient (Goldpetal)'];
				break;
			case 'gnome':
				this.names.male = ['Alston', 'Alvyn', 'Boddynock', 'Brocc', 'Burgell', 'Dimble', 'Eldon', 'Erky', 'Fonkin', 'Frug', 'Gerbo', 'Gimble', 'Glim', 'Jebeddo', 'Kellen', 'Namfoodle', 'Orryn', 'Roondar', 'Seebo', 'Sindri', 'Warryn', 'Wrenn', 'Zook'];
				this.names.female = ['Bimpnottin', 'Breena', 'Caramip', 'Carlin', 'Donella', 'Duvamil', 'Ella', 'Ellyjobell', 'Ellywick', 'Lilli', 'Loopmottin', 'Lorilla', 'Mardnab', 'Nissa', 'Nyx', 'Oda', 'Orla', 'Roywyn', 'Shamil', 'Tana', 'Waywocket', 'Zanna'];
				this.names.surname = ['Beren', 'Daergel', 'Folkor', 'Garrick', 'Nackle', 'Murnig', 'Ningel', 'Raulnor', 'Scheppen', 'Timbers', 'Turen'];
				break;
			case 'half-elf':
				// combine elf and human
				this.names.male = ['Adran', 'Aelar', 'Aramil', 'Arannis', 'Aust', 'Beiro', 'Berrian', 'Carric', 'Enialis', 'Erdan', 'Erevan', 'Galinndan', 'Hadarai', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Laucian', 'Mindartis', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Thamior', 'Tharivol', 'Theren', 'Varis'];
				this.names.female = ['Adrie', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Bethrynna', 'Birel', 'Caelynn', 'Drusilia', 'Enna', 'Felosial', 'Ielenia', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Meriele', 'Mialee', 'Naivara', 'Quelenna', 'Quillathe', 'Sariel', 'Shanairra', 'Shava', 'Silaqui', 'Theirastra', 'Thia', 'Vadania', 'Valanthe', 'Xanaphia', 'Atala', 'Ceidil', 'Hama', 'Jasmal', 'Meilil', 'Seipora', 'Yasheira', 'Zasheida', 'Arveene', 'Esvele', 'Jhessail', 'Kerri', 'Lureene', 'Miri', 'Rowan', 'Shandri', 'Tessele', 'Alethra', 'Kara', 'Katernin', 'Mara', 'Natali', 'Olma', 'Tana', 'Zora', 'Amafrey', 'Betha', 'Cefrey', 'Kethra', 'Mara', 'Olga', 'Silifrey', 'Westra', 'Arizima', 'Chathi', 'Nephis', 'Nulara', 'Murithi', 'Sefris', 'Thola', 'Umara', 'Zolis', 'Fyevarra', 'Hulmarra', 'Immith', 'Imzel', 'Navarra', 'Shevarra', 'Tammith', 'Yuldra', 'Bai', 'Chao', 'Jia', 'Lei', 'Mei', 'Qiao', 'Shui', 'Tai', 'Balama', 'Dona', 'Faila', 'Jalana', 'Luisa', 'Marta', 'Quara', 'Selise', 'Vonda'];
				this.names.surname = ['Amakiir (Gemflower)', 'Amastacia (Starflower)', 'Galanodel (Moonwhisper)', 'Holimion (Diamonddew)', 'Ilphelkiir (Gemblossom)', 'Liadon (Silverfrond)', 'Meliamne (Oakenheel)', 'Naïlo (Nightbreeze)', 'Siannodel (Moonbrook)', 'Xiloscient (Goldpetal)', 'Basha', 'Dumein', 'Jassan', 'Khalid', 'Mostana', 'Pashar', 'Rein', 'Amblecrown', 'Buckman', 'Dundragon', 'Evenwood', 'Greycastle', 'Tallstag', 'Bersk', 'Chernin', 'Dotsk', 'Kulenov', 'Marsk', 'Nemetsk', 'Shemov', 'Starag', 'Brightwood', 'Helder', 'Hornraven', 'Lackman', 'Stormwind', 'Windrivver', 'Ankhalab', 'Anskuld', 'Fezim', 'Hahpet', 'Nathandem', 'Sepret', 'Uuthrakt', 'Chergoba', 'Dyernina', 'Iltazyara', 'Murnyethara', 'Stayanoga', 'Ulmokina', 'Chien', 'Huang', 'Kao', 'Kung', 'Lao', 'Ling', 'Mei', 'Pin', 'Shin', 'Sum', 'Tan', 'Wan', 'Agosto', 'Astorio', 'Calabra', 'Domine', 'Falone', 'Marivaldi', 'Pisacar', 'Ramondo'];
				break;
			case 'half-orc':
				// combine human and orc
				this.names.male = ['Dench', 'Feng', 'Gell', 'Henk', 'Holg', 'Imsh', 'Keth', 'Krusk', 'Mhurren', 'Ront', 'Shump', 'Thokk'];
				this.names.female = ['Baggi', 'Emen', 'Engong', 'Kansif', 'Myev', 'Neega', 'Ovak', 'Ownka', 'Shautha', 'Sutha', 'Vola', 'Volen', 'Yevelda'];
				// no last names
				this.names.surname = [''];
				break;
			case 'halfling':
				this.names.male = ['Alton', 'Ander', 'Cade', 'Corrin', 'Eldon', 'Errich', 'Finnan', 'Garret', 'Lindal', 'Lyle', 'Merric', 'Milo', 'Osborn', 'Perrin', 'Reed', 'Roscoe', 'Wellby'];
				this.names.female = ['Andry', 'Bree', 'Callie', 'Cora', 'Euphemia', 'Jillian', 'Kithri', 'Lavinia', 'Lidda', 'Merla', 'Nedda', 'Paela', 'Portia', 'Seraphina', 'Shaena', 'Trym', 'Vani', 'Verna'];
				this.names.surname = ['Brushgather', 'Goodbarrel', 'Greenbottle', 'High-hill', 'Hilltopple', 'Leagallow', 'Tealeaf', 'Thorngage', 'Tosscobble', 'Underbough'];
				break;
			case 'human':
				this.names.male = ['Aseir', 'Bardeid', 'Haseid', 'Khemed', 'Mehmen', 'Sudeiman', 'Zasheir', 'Darvin', 'Dorn', 'Evendur', 'Gorstag', 'Grim', 'Helm', 'Malark', 'Morn', 'Randal', 'Stedd', 'Bor', 'Fodel', 'Glar', 'Grigor', 'Igan', 'Ivor', 'Kosef', 'Mival', 'Orel', 'Pavel', 'Sergor', 'Ander', 'Blath', 'Bran', 'Frath', 'Geth', 'Lander', 'Luth', 'Malcer', 'Stor', 'Taman', 'Urth Aoth', 'Bareris', 'Ehput-Ki', 'Kethoth', 'Mumed', 'Ramas', 'So-Kehur', 'Thazar-De', 'Urhur', 'Borivik', 'Faurgar', 'Jandar', 'Kanithar', 'Madislak', 'Ralmevik', 'Shaumar', 'Vladislak', 'An', 'Chen', 'Chi', 'Fai', 'Jiang', 'Jun', 'Lian', 'Long', 'Meng', 'On', 'Shan', 'Shui', 'Wen', 'Anton', 'Diero', 'Marcon', 'Pieron', 'Rimardo', 'Romero', 'Salazar', 'Umbero'];
				this.names.female = ['Atala', 'Ceidil', 'Hama', 'Jasmal', 'Meilil', 'Seipora', 'Yasheira', 'Zasheida', 'Arveene', 'Esvele', 'Jhessail', 'Kerri', 'Lureene', 'Miri', 'Rowan', 'Shandri', 'Tessele', 'Alethra', 'Kara', 'Katernin', 'Mara', 'Natali', 'Olma', 'Tana', 'Zora', 'Amafrey', 'Betha', 'Cefrey', 'Kethra', 'Mara', 'Olga', 'Silifrey', 'Westra', 'Arizima', 'Chathi', 'Nephis', 'Nulara', 'Murithi', 'Sefris', 'Thola', 'Umara', 'Zolis', 'Fyevarra', 'Hulmarra', 'Immith', 'Imzel', 'Navarra', 'Shevarra', 'Tammith', 'Yuldra', 'Bai', 'Chao', 'Jia', 'Lei', 'Mei', 'Qiao', 'Shui', 'Tai', 'Balama', 'Dona', 'Faila', 'Jalana', 'Luisa', 'Marta', 'Quara', 'Selise', 'Vonda'];
				this.names.surname = ['Basha', 'Dumein', 'Jassan', 'Khalid', 'Mostana', 'Pashar', 'Rein', 'Amblecrown', 'Buckman', 'Dundragon', 'Evenwood', 'Greycastle', 'Tallstag', 'Bersk', 'Chernin', 'Dotsk', 'Kulenov', 'Marsk', 'Nemetsk', 'Shemov', 'Starag', 'Brightwood', 'Helder', 'Hornraven', 'Lackman', 'Stormwind', 'Windrivver', 'Ankhalab', 'Anskuld', 'Fezim', 'Hahpet', 'Nathandem', 'Sepret', 'Uuthrakt', 'Chergoba', 'Dyernina', 'Iltazyara', 'Murnyethara', 'Stayanoga', 'Ulmokina', 'Chien', 'Huang', 'Kao', 'Kung', 'Lao', 'Ling', 'Mei', 'Pin', 'Shin', 'Sum', 'Tan', 'Wan', 'Agosto', 'Astorio', 'Calabra', 'Domine', 'Falone', 'Marivaldi', 'Pisacar', 'Ramondo'];
				break;
			case 'tiefling':
				this.names.male = ['Akmenos', 'Amnon', 'Barakas', 'Damakos', 'Ekemon', 'Iados', 'Kairon', 'Leucis', 'Melech', 'Mordai', 'Morthos', 'Pelaios', 'Skamos', 'Therai'];
				this.names.female = ['Akta', 'Anakis', 'Bryseis', 'Criella', 'Damaia', 'Ea', 'Kallista', 'Lerissa', 'Makaria', 'Nemeia', 'Orianna', 'Phelaia', 'Rieta'];
				// virtue names
				this.names.surname = ['Art', 'Carrion', 'Chant', 'Creed', 'Despair', 'Excellence', 'Fear', 'Glory', 'Hope', 'Ideal', 'Music', 'Nowhere', 'Open', 'Poetry', 'Quest', 'Random', 'Reverence', 'Sorrow', 'Temerity', 'Torment', 'Weary'];
				break;
			default:
				this.names.male = ['Josh', 'Mike', 'Pat', 'Justin', 'Hector The Well Endowed', 'Marrrrrr'];
				this.names.female = ['Jess', 'Shannon', 'Mal', 'Riley'];
				this.names.surname = ['Calderon', 'Batman', 'Graveler', 'Peepee', 'Poopoo'];
				break;
		}
	}
}

const baseUrl: string = 'https://www.dnd5eapi.co/api/';
const abilities: string[] = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
const classes: string[] = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard'];
const races: string[] = ['dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'half-orc', 'halfling', 'human', 'tiefling'];
const alignments: string[] = ['chaotic-evil', 'chaotic-neutral', 'chaotic-good', 'lawful-evil', 'lawful-neutral', 'lawful-good', 'neutral-evil', 'neutral', 'neutral-good']
const raceInfo: Map<string, RaceInfo> = new Map<string, RaceInfo>([
	['dragonborn', new RaceInfo('dragonborn', 15, 80, 78, 90, 215, 300)],
	['dwarf', new RaceInfo('dwarf', 50, 350, 48, 60, 120, 200)],
	['elf', new RaceInfo('elf', 100, 750, 54, 78, 125, 215)],
	['gnome', new RaceInfo('gnome', 40, 480, 32, 48, 40, 45)],
	['half-elf', new RaceInfo('half-elf', 20, 190, 58, 74, 140, 220)],
	['half-orc', new RaceInfo('half-orc', 14, 75, 60, 80, 150, 250)],
	['halfling', new RaceInfo('halfling', 20, 250, 32, 42, 35, 45)],
	['human', new RaceInfo('human', 18, 80, 60, 78, 130, 225)],
	['tiefling', new RaceInfo('tiefling', 18, 90, 60, 78, 130, 225)]
]);
const quirks: string[] = [
	'They are an aspiring matress salesman.',
	'Their favorite thing to do is eat pinecones.',
	'They believe they are a God stuck in mortal form.',
	'They don\'t like cheese unless it is frozen solid.',
	'They like to watch.',
	'They always wear an eye patch but often change which eye. No one seems to notice.',
	'Their nickname is "Jabonicus" but refuses to elaborate on why.',
	'They have died three times... so far.',
	'They were raised by wolves and are searching for their two brothers, Vin and Paul.',
	'They are an accomplished boar racer.',
	'They have a wooden pegleg that is filled with a secret.',
	'When they hear a special word they instantly fall asleep.'
];
const adjectives: string[] = ['fiesty', 'stubborn', 'timid', 'sneaky', 'aggressive', 'horny', 'punctual'];
const traits: string[] = [
	'who runs their family\'s business.',
	'who collects toads in their free time.',
	'with more clothing options than common sense.',
	'that loves their dog more than anything.'
]
const traits2: string[] = [
	'They are a skilled fighter and are proud of it.',
	'They are not a fan of small talk.'
]
const religiousAdjective: string[] = ['are a devout', 'are a lazy', 'pretend to be a'];
const religion: Map<string, string[]> = new Map<string, string[]>([
	['CE', ['Beshaba, goddess of misfortune', 'Cyric, god of lies', 'Malar, god of the hunt', 'Talona, goddess of disease and poison', 'Talos, god of storms', 'Umberlee, goddess of the sea']],
	['CN', ['Leira, goddess of illusion', 'Mask, god of thieves']],
	['CG', ['Lliira, goddess of joy', 'Selûne, goddess of the moon', 'Sune, goddess of love and beauty', 'Tymora, goddess of good fortune']],
	['LE', ['Bane, god of tyranny', 'Loviatar, goddess of pain']],
	['LN', ['Azuth, god of wizards', 'Helm, god of protection', 'Kelemvor, god of the dead', 'Savras, god of divination and fate']],
	['LG', ['Ilmater, god of endurance', 'Torm, god of courage and self-sacrifice', 'Tyr, god of justice']],
	['NE', ['Auril, goddess of winter', 'Bhaal, god of murder', 'Myrkul, god of death', 'Shar, goddess of darkness and loss']],
	['N', ['Gond, god of craft', 'Oghma, god of knowledge', 'Silvanus, god of wild nature', 'Tempus, god of war', 'Waukeen, goddess of trade']],
	['NG', ['Chauntea, goddess of agriculture', 'Deneir, god of writing', 'Eldath, goddess of peace', 'Lathander, god of birth and renewal', 'Mielikki, goddess of forests', 'Milil, god of poetry and song', 'Mystra, goddess of magic']]
]);
const socioeconomic: string[] = [
	'They are positively abreast with currency.',
	'They are poor as fuck.',
	'They were born rich but are terrible with money.',
	'They live comfortably.',
	'Though they have little money, they are content.'
];


// Utility

// Answer by joshuakcockrell: https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve
function getRandomNumberStandardDist(min, max, skew) {
	let u = 0, v = 0;
	while (u === 0) u = Math.random() //Converting [0,1) to (0,1)
	while (v === 0) v = Math.random()
	let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)

	num = num / 10.0 + 0.5 // Translate to 0 -> 1
	if (num > 1 || num < 0)
		num = getRandomNumberStandardDist(min, max, skew) // resample between 0 and 1 if out of range

	else {
		num = Math.pow(num, skew) // Skew
		num *= max - min // Stretch to fill range
		num += min // offset to min
	}
	return Math.floor(num);
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function getNpcGender(): string {
	return Math.floor(Math.random() * 2) === 0 ? 'Male' : 'Female';
}

function getArmorClass(score: number): number {
	return 10 + getModifier(score);
}

function getHitpoints(hitDie: number, score: number, level?: number): number {
	let hp = hitDie + getModifier(score),
		rollsLeft = level || 0;
	while (rollsLeft > 1) {
		// TODO YeahThe modifier should adjust as con increases but it doesn't right now
		hp += randomNumber(1, hitDie) + getModifier(score);
		rollsLeft--;
	}
	return hp;
}

function getHeight(min, max, skew): string {
	const height = getRandomNumberStandardDist(min, max, skew),
		feet = Math.floor(height / 12),
		inches = height % 12;

	return feet + "' " + inches + '"';
}

function getNpcName(race: string, gender: string): string {
	// @ts-ignore
	const rand1 = Math.floor(Math.random() * raceInfo.get(race)!.names[gender.toLowerCase()].length),
		// @ts-ignore
		rand2 = Math.floor(Math.random() * raceInfo.get(race)!.names.surname.length);

	// @ts-ignore
	let last = raceInfo.get(race)!.names.surname[rand2],
		// @ts-ignore
		first = raceInfo.get(race)!.names[gender.toLowerCase()][rand1];

	return first + " " + last;
}

function getModifier(score: number): number {
	return Math.floor((score - 10) / 2);
}

function NpcLineItem(props) {
	return (
		<li className="npc-card__value">{props.value}</li>
	);
}

function NpcAbilityScore(props) {
	return (
		<li className="npc-card__ability-score">
			<div className='npc-stat'>
				<span className="npc-stat__label">{props.label}</span>
				<span className="npc-stat__score">{props.score}</span>
				<span className="npc-stat__modifier">{props.modifier}</span>
			</div>
		</li>
	);
}

export class NpcCard extends Component<any, any> {

	constructor(props: any) {
		super(props);
		this.state = {
			name: null,
			race: null,
			class: null,
			gender: null,
			abilityScores: {
				strength: { score: null, modifier: null },
				dexterity: { score: null, modifier: null },
				intelligence: { score: null, modifier: null },
				wisdom: { score: null, modifier: null },
				constitution: { score: null, modifier: null },
				charisma: { score: null, modifier: null },
			},
			loaded: false
		};
	}

	generateStats(hitDie: number, abilityBonuses, numOfAbi: number, level: number): void {
		let stats: {} = {},
			ac: number = 10,
			hitpoints = 0,
			bonuses: Map<string, number> = new Map<string, number>([
				['str', 0],
				['dex', 0],
				['con', 0],
				['int', 0],
				['wis', 0],
				['cha', 0],
			]),
			availableAbi = numOfAbi * 2;

		// If there are Ability bonuses, loop through and set them to the bonus map
		if (abilityBonuses) {
			abilityBonuses.forEach((ab) => {
				bonuses.set(ab.ability_score.index, ab.bonus);
			});
		}

		// Distribute level-based bonuses to bonus map
		while (availableAbi > 0) {
			let randomStat = abilities[randomNumber(0, abilities.length - 1)].substring(0, 3);
			bonuses.set(randomStat, bonuses.get(randomStat)! + 1);
			availableAbi--;
		}

		abilities.forEach((key) => {
			let score: number = this.generateStat();

			if (bonuses && bonuses.has(key.substring(0, 3))) {
				//@ts-ignore I check if the key exists above
				score += bonuses.get(key.substring(0, 3));
			}

			if (key === 'dexterity') { ac = getArmorClass(score); }
			if (key === 'constitution') { hitpoints = getHitpoints(hitDie, score, level); }
			stats[key] = { score: score, modifier: getModifier(score) };
		});

		this.setState({
			abilityScores: stats,
			armorClass: ac,
			hitpoints: hitpoints
		});
	}

	generateStat(): number {
		const reducer = (total, i) => total + i;
		let statArray: number[] = [];

		// 4d6 drop lowest
		for (let i = 0; i < 4; i++) {
			statArray.push(randomNumber(1, 6));
		}

		let min = Math.min(...statArray);
		let index = statArray.indexOf(min);

		statArray.splice(index, 1);
		return statArray.reduce(reducer)

		// Random
		// return randomNumber(3,18);
	}

	generateNpc = () => {
		let randomClass = classes[randomNumber(0, classes.length)];
		let randomRace = races[randomNumber(0, races.length)];
		let randomAlignment = alignments[randomNumber(0, alignments.length)];
		let level = randomNumber(1, 20);
		let npcRace = this.getNpcData('race', 'races/' + randomRace);
		let npcClass = this.getNpcData('class', 'classes/' + randomClass);
		let npcLevel = this.getNpcData('level', 'classes/' + randomClass + '/levels/' + level);
		let npcAlignment = this.getNpcData('alignment', 'alignments/' + randomAlignment);

		Promise.all([npcRace, npcClass, npcLevel, npcAlignment]).then((r) => {
			this.generateStats(r[1].class.hit_die, r[0].race.ability_bonuses, r[2].level.ability_score_bonuses, level);
			const gender = getNpcGender();

			this.setState({
				name: getNpcName(r[0].race.index, gender),
				gender: gender,
				alignment: r[3].alignment
			});

			setTimeout(() => {
				this.setState({ loaded: true });
			}, 1000);
		});
	}

	async getNpcData(key, endpoint: string): Promise<any> {
		try {
			const response = await fetch(baseUrl + endpoint);
			const data = await response.json();
			this.setState({ [key]: data });
			return { [key]: data };
		} catch (error) {
			this.setState({ [key]: 'problem' })
		}
	}

	componentDidMount() {
		this.generateNpc();
	}

	renderLineItem(value) {
		return <NpcLineItem value={value} />
	}

	renderAbilityScore(label: string, abilityScore: Stat) {
		return <NpcAbilityScore label={label} score={abilityScore.score} modifier={abilityScore.modifier} />
	}

	handleClick = (): void => {
		this.setState({ loaded: false });
		this.generateNpc();
	}

	render() {
		const npc = this.state;
		if (!npc.loaded) {
			return (
				<>
					<div className="npc-card">Loading...</div>
					<button className="generate-npc-button generate-npc-button--disabled" disabled>Generate NPC</button>
				</>

			)
		}
		console.log('NPC State', npc);
		return (
			<>
				{/* <select>
					{[...Array(20)].map((a, index) => <option key={Math.random() + index} value={index + 1}>{index + 1}</option>)}
				</select> */}
				<div className="npc-card" >
					<div className="npc-card__header">
						<div>
							<h2 className="npc-card__name">{npc.name}</h2>
							<ol className="npc-card__info">
								{this.renderLineItem('Level ' + npc.level.level)}
								{this.renderLineItem(npc.gender)}
								{this.renderLineItem(npc.race.name)}
								{this.renderLineItem(npc.class.name)}
							</ol>
						</div>
						<ol className="npc-card__sturdiness">
							<li><span>HP</span>{npc.hitpoints}</li>
							<li><span>AC</span>{npc.armorClass}</li>
						</ol>
					</div>
					<div className="npc-card__image" >
						<img src={`${process.env.PUBLIC_URL}/img/${npc.race.index}.png`} alt={npc.race.name} />
					</div>
					<div className="npc-card__bio">
						<ol className="npc-card__attributes">
							<li><strong>Age</strong>{getRandomNumberStandardDist(raceInfo.get(npc.race.index)!.age.min, raceInfo.get(npc.race.index)!.age.max, 1)} years</li>
							<li><strong>Height</strong>{getHeight(raceInfo.get(npc.race.index)!.height.min, raceInfo.get(npc.race.index)!.height.max, 1)}</li>
							<li><strong>Weight</strong>{getRandomNumberStandardDist(raceInfo.get(npc.race.index)!.weight.min, raceInfo.get(npc.race.index)!.weight.max, 1)} lbs</li>
						</ol>
						<span className="npc-card__alignment">{npc.alignment.name}</span>
						<p>{npc.name} is a {adjectives[randomNumber(0, adjectives.length)]} {npc.race.name} {traits[randomNumber(0, traits.length)]}</p>
						<p>They {religiousAdjective[randomNumber(0, religiousAdjective.length)]} follower of {religion.get(npc.alignment.abbreviation)![0]}. {socioeconomic[randomNumber(0, socioeconomic.length)]} {traits2[randomNumber(0, traits2.length)]}</p>
						<p>{quirks[randomNumber(0, quirks.length)]}</p>
					</div>
					<ul className="npc-card__ability-scores" >
						{this.renderAbilityScore('Strength', npc.abilityScores.strength)}
						{this.renderAbilityScore('Dexterity', npc.abilityScores.dexterity)}
						{this.renderAbilityScore('Constitution', npc.abilityScores.constitution)}
						{this.renderAbilityScore('Intelligence', npc.abilityScores.intelligence)}
						{this.renderAbilityScore('Wisdom', npc.abilityScores.wisdom)}
						{this.renderAbilityScore('Charisma', npc.abilityScores.charisma)}
					</ul>
				</div>
				<button className="generate-npc-button" onClick={this.handleClick}>Generate NPC</button>
			</>
		)
	}
}