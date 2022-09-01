import React, { Component } from 'react';
import { SimpleRange } from '../interfaces/simple-range';
import { Stat } from '../interfaces/stat';
import { Alignment } from '../interfaces/alignment';
// @ts-ignore
import { gods } from '../consts/consts.ts';

class RaceInfo {
	name: string;
	age: SimpleRange = { min: 0, max: 0 };
	height: SimpleRange = { min: 0, max: 0 };
	weight: SimpleRange = { min: 0, max: 0 };
	names: { male: string[], female: string[], surname: string[] } = { male: [], female: [], surname: [] };

	constructor(name: string, minAge: number, maxAge: number, minHeight: number, maxHeight: number, minWeight: number, maxWeight: number) {
		this.setNames(name.toLowerCase());
		this.name = name;
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
const alignments: Map<string, Alignment> = new Map<string, Alignment>([
	['chaotic-evil', { alias: 'chaotic-evil', code: 'CE', name: 'Chaotic Evil' }],
	['chaotic-neutral', { alias: 'chaotic-neutral', code: 'CN', name: 'Chaotic Neutral' }],
	['chaotic-good', { alias: 'chaotic-good', code: 'CG', name: 'Chaotic Good' }],
	['lawful-evil', { alias: 'lawful-evil', code: 'LE', name: 'Lawful Evil' }],
	['lawful-neutral', { alias: 'lawful-neutral', code: 'LN', name: 'Lawful Neutral' }],
	['lawful-good', { alias: 'lawful-good', code: 'LG', name: 'Lawful Good' }],
	['neutral-evil', { alias: 'neutral-evil', code: 'NE', name: 'Neutral Evil' }],
	['neutral', { alias: 'neutral', code: 'N', name: 'Neutral' }],
	['neutral-good', { alias: 'neutral-good', code: 'NG', name: 'Neutral Good' }],
]);
const races: Map<string, RaceInfo> = new Map<string, RaceInfo>([
	['dragonborn', new RaceInfo('Dragonborn', 15, 80, 78, 90, 215, 300)],
	['dwarf', new RaceInfo('Dwarf', 50, 350, 48, 60, 120, 200)],
	['elf', new RaceInfo('Elf', 100, 750, 54, 78, 125, 215)],
	['gnome', new RaceInfo('Gnome', 40, 480, 32, 48, 40, 45)],
	['half-elf', new RaceInfo('Half-Elf', 20, 190, 58, 74, 140, 220)],
	['half-orc', new RaceInfo('Half-Orc', 14, 75, 60, 80, 150, 250)],
	['halfling', new RaceInfo('Halfling', 20, 250, 32, 42, 35, 45)],
	['human', new RaceInfo('Human', 18, 80, 60, 78, 130, 225)],
	['tiefling', new RaceInfo('Tiefling', 18, 90, 60, 78, 130, 225)]
]);
// const gods: Map<string, string[]> = new Map<string, string[]>([
// 	['CE', ['Beshaba, goddess of misfortune', 'Cyric, god of lies', 'Malar, god of the hunt', 'Talona, goddess of disease and poison', 'Talos, god of storms', 'Umberlee, goddess of the sea']],
// 	['CN', ['Leira, goddess of illusion', 'Mask, god of thieves']],
// 	['CG', ['Lliira, goddess of joy', 'Selûne, goddess of the moon', 'Sune, goddess of love and beauty', 'Tymora, goddess of good fortune']],
// 	['LE', ['Bane, god of tyranny', 'Loviatar, goddess of pain']],
// 	['LN', ['Azuth, god of wizards', 'Helm, god of protection', 'Kelemvor, god of the dead', 'Savras, god of divination and fate']],
// 	['LG', ['Ilmater, god of endurance', 'Torm, god of courage and self-sacrifice', 'Tyr, god of justice']],
// 	['NE', ['Auril, goddess of winter', 'Bhaal, god of murder', 'Myrkul, god of death', 'Shar, goddess of darkness and loss']],
// 	['N', ['Gond, god of craft', 'Oghma, god of knowledge', 'Silvanus, god of wild nature', 'Tempus, god of war', 'Waukeen, goddess of trade']],
// 	['NG', ['Chauntea, goddess of agriculture', 'Deneir, god of writing', 'Eldath, goddess of peace', 'Lathander, god of birth and renewal', 'Mielikki, goddess of forests', 'Milil, god of poetry and song', 'Mystra, goddess of magic']]
// ]);

/*
*
* These constants are used to generate the NCp's bio
*
*/

// General adjective to describe personality
const adjectives: string[] = ['fiesty', 'stubborn', 'timid', 'sneaky', 'aggressive', 'horny', 'punctual'];

// Things they do
const traits: string[] = [
	'who runs their family\'s business.',
	'who collects toads in their free time.',
	'with more clothing options than common sense.',
	'that loves their dog more than anything.',
	'with a love-hate relationship with cooking.'
]

// Ways they behave
const traits2: string[] = [
	'They are a skilled combatant and are proud of it.',
	'They are not a fan of small talk.',
	'They look for the good in everyone they meet.',
	'They manage to find something wrong with everything.'
]

// Modifies how strong their faith is
const religiousAdjective: string[] = [
	'are a devout',
	'are a zealous',
	'pretend to be a',
	'are a nominal',
	'are a bregrudging'
];

// Describes how much wealth they have
const socioeconomic: string[] = [
	'are positively abreast with currency.',
	'are poor as fuck.',
	'were born rich but are terrible with money.',
	'live comfortably.',
	'though they have little money, they are content.'
];

// A quirk they have to give them some el oh el ha ha
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

/*
*
* Utility
*
*/

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

function getRandomMapKey(map): string {
	const items: string[] = Array.from(map.keys());
	return items[Math.floor(randomNumber(0, items.length))];
}

function capitalize(word): string {
	return word.split('').map((letter, i) => i ? letter.toLowerCase() : letter.toUpperCase()).join('');
}

// Functions below this comment should probably be in the component

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
		hp += (randomNumber(1, hitDie) + getModifier(score));
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
	const rand1 = Math.floor(Math.random() * races.get(race)!.names[gender.toLowerCase()].length),
		// @ts-ignore
		rand2 = Math.floor(Math.random() * races.get(race)!.names.surname.length);

	// @ts-ignore
	let last = races.get(race)!.names.surname[rand2],
		// @ts-ignore
		first = races.get(race)!.names[gender.toLowerCase()][rand1];


	let returnName = first;
	if (last) { returnName = returnName + " " + last; }

	return returnName;
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
				<span className="npc-stat__modifier">{props.modifier > 0 ? '+' + props.modifier : props.modifier}</span>
			</div>
		</li>
	);
}

function NpcGenderIcon(props) {
	if (props.gender === 'Male') {
		return (
			<svg className="npc-card__gender-symbol" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1506 1506.0001" enableBackground="new 0 0 1506 1506.0001" xmlSpace="preserve">
				<path d="M1189.1392,101.8608h-233.366c-83.9626,83.9626-131.0374,131.0372-214.9998,214.9998v0.0002h296.3376l-217.52,217.5201 c-71.9114-44.6514-156.7585-70.44-247.6311-70.44c-259.6284,0-470.0991,210.4705-470.0991,470.0991 s210.4707,470.0992,470.0991,470.0992s470.0991-210.4706,470.0991-470.0992c0-90.8726-25.7888-175.72-70.4399-247.6312 l217.52-217.52v296.3378l0,0c83.9629-83.9626,131.0371-131.037,215-214.9997V316.8608v-215H1189.1392z M571.96,1198.1173 c-145.8457,0-264.0771-118.2313-264.0771-264.0772S426.1143,669.9628,571.96,669.9628s264.0771,118.2313,264.0771,264.0773 S717.8057,1198.1173,571.96,1198.1173z" />
			</svg>

		);
	} else if (props.gender === 'Female') {
		return (
			<svg className="npc-card__gender-symbol" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="1582.8676 -62.4635 987.1324 1679.4772" enableBackground="new 1582.8676 -62.4635 987.1324 1679.4772" xmlSpace="preserve">
				<path id="path7" d="M2183.3582,906.0996c89.7476-19.7531,167.9011-64.4122,234.031-134.4069 c85.8831-90.6066,129.2539-199.678,129.2539-323.7789c0-81.1594-20.6118-159.3129-61.4063-232.3135 c-41.6533-75.1476-100.4832-134.4069-175.6309-176.0601c-73.4299-41.2238-151.5833-62.2651-232.7427-62.2651 c-81.5889,0-160.1718,20.6119-233.1724,61.4063c-74.2888,41.6532-133.548,100.4831-175.6307,175.6307l-0.4294,0.4294 c-40.7943,73.8594-61.4064,152.0129-61.4064,233.1723c0,83.3065,21.4708,163.1777,63.9828,237.8959l0.4294,0.8588 c43.8004,74.7181,103.0596,132.6891,176.4895,172.1953l0.8589,0.4294c41.2238,21.9002,81.1594,37.3591,120.2362,46.8062v133.9774 H1630.701v215.1368h337.5201v322.0614h215.1367v-322.0613h336.6614v-215.1368h-336.6614V906.0996H2183.3582z M2076.0044,190.2649 c44.2297,0,85.8831,11.1648,128.395,34.3532l0.8589,0.4294c40.7944,21.4707,71.7122,51.9592,94.4712,92.7536 c23.6179,42.5121,35.2122,85.4536,35.2122,130.5421c0,72.5711-24.9063,132.2598-76.0066,183.7896 c-50.6709,50.671-110.3596,75.577-182.9307,75.577c-71.7123,0-131.8303-24.4766-182.9307-75.577 c-50.671-51.1003-75.5771-111.2185-75.5771-183.7896c0-45.0886,11.5942-88.0301,35.212-130.5421 c22.759-40.7944,53.6769-71.2829,94.0419-93.183C1990.1215,201.4297,2032.2041,190.2649,2076.0044,190.2649z" />
			</svg>
		);
	} else {
		return (<span>oops</span>);
	}
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
			loaded: false,
			selections: {
				alignment: null,
				class: null,
				gender: null,
				level: null,
				race: null
			}
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

	generateDescription = () => {
		return (
			<>
				<p>{this.state.npc.name} is a {adjectives[randomNumber(0, adjectives.length)]} {this.state.npc.race.name} {traits[randomNumber(0, traits.length)]}</p>
				<p>They {religiousAdjective[randomNumber(0, religiousAdjective.length)]} follower of {gods.get(this.state.npc.alignment.abbreviation)![0]} and {socioeconomic[randomNumber(0, socioeconomic.length)]} {traits2[randomNumber(0, traits2.length)]}</p>
				<p>{quirks[randomNumber(0, quirks.length)]}</p>
			</>)
	}

	generateNpc = () => {
		const selections = this.state.selections;
		let randomClass = selections.class ? classes[selections.class] : classes[randomNumber(0, classes.length)];
		let randomRace = getRandomMapKey(races);
		let randomAlignment = getRandomMapKey(alignments)
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
			}, randomNumber(1000, 3000));
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

	renderGenderIcon(gender: string) {
		return <NpcGenderIcon gender={gender}></NpcGenderIcon>
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
					<div className="npc-card"><div className="npc-card__spinner"></div></div>
					<button className="generate-npc-button generate-npc-button--disabled" disabled>Generate NPC</button>
				</>

			)
		}
		console.log('NPC State', npc);
		return (
			<>
				<div className="npc-card" >
					<div className="npc-card__header">
						<div className="npc-card__titles">
							<h2 className="npc-card__name">{npc.name}{this.renderGenderIcon(this.state.gender)}</h2>
							<ol className="npc-card__info">
								{this.renderLineItem(npc.race.name)}
								{this.renderLineItem(npc.class.name)}

							</ol>
						</div>
						<ol className="npc-card__sturdiness">
							<li><span>Level</span>{npc.level.level}</li>
							<li><span>HP</span>{npc.hitpoints}</li>
							<li><span>AC</span>{npc.armorClass}</li>
						</ol>
					</div>
					<div className="npc-card__image" >
						<img src={`${process.env.PUBLIC_URL}/img/${npc.race.index}.png`} alt={npc.race.name} />
					</div>
					<div className="npc-card__bio">
						<ol className="npc-card__attributes">
							<li><strong>Age</strong>{getRandomNumberStandardDist(races.get(npc.race.index)!.age.min, races.get(npc.race.index)!.age.max, 1)} years</li>
							<li><strong>Height</strong>{getHeight(races.get(npc.race.index)!.height.min, races.get(npc.race.index)!.height.max, 1)}</li>
							<li><strong>Weight</strong>{getRandomNumberStandardDist(races.get(npc.race.index)!.weight.min, races.get(npc.race.index)!.weight.max, 1)} lbs</li>
							<li><strong>Alignment</strong>{npc.alignment.name}</li>
						</ol>
						<div className="npc-card__description">
							<p>{npc.name} is a {adjectives[randomNumber(0, adjectives.length)]} {npc.race.name} {traits[randomNumber(0, traits.length)]}</p>
							<p>They {religiousAdjective[randomNumber(0, religiousAdjective.length)]} follower of {gods.get(npc.alignment.abbreviation)![0]} and {socioeconomic[randomNumber(0, socioeconomic.length)]} {traits2[randomNumber(0, traits2.length)]}</p>
							<p>{quirks[randomNumber(0, quirks.length)]}</p>
						</div>
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