import { SimpleRange } from "../interfaces/simple-range";

export const elvenTranslations: Map<string, string> = new Map<string, string>([
	['Amakiir', 'Gemflower'],
	['Amastacia', 'Starflower'],
	['Galanodel', 'Moonwhisper'],
	['Holimion', 'Diamonddew'],
	['Ilphelkiir', 'Gemblossom'],
	['Liadon', 'Silverfrond'],
	['Meliamne', 'Oakenheel'],
	['Naïlo', 'Nightbreeze'],
	['Siannodel', 'Moonbrook'],
	['Xiloscient', 'Goldpetal']
]);

const allNames: Map<string, Map<string, string[]>> = new Map<string, Map<string, string[]>>([
	['dragonborn', new Map<string, string[]>([
		['male', ['Arjhan', 'Balasar', 'Bharash', 'Donaar', 'Ghesh', 'Heskan', 'Kriv', 'Medrash', 'Mehen', 'Nadarr', 'Pandjed', 'Patrin', 'Rhogar', 'Shamash', 'Shedinn', 'Tarhun', 'Torinn']],
		['female', ['Akra', 'Biri', 'Daar', 'Farideh', 'Harann', 'Havilar', 'Jheri', 'Kava', 'Korinn', 'Mishann', 'Nala', 'Perra', 'Raiann', 'Sora', 'Surina', 'Thava', 'Uadjit']],
		['surname', ['Clethtinthiallor', 'Daardendrian', 'Delmirev', 'Drachedandion', 'Fenkenkabradon', 'Kepeshkmolik', 'Kerrhylon', 'Kimbatuul', 'Linxakasendalor', 'Myastan', 'Nemmonis', 'Norixius', 'Ophinshtalajiir', 'Prexijandilin', 'Shestendeliath', 'Turnuroth', 'Verthisathurgiesh', 'Yarjerit']]
	])],
	['dwarf', new Map<string, string[]>([
		['male', ['Adrik', 'Alberich', 'Baern', 'Barendd', 'Brottor', 'Bruenor', 'Dain', 'Darrak', 'Delg', 'Eberk', 'Einkil', 'Fargrim', 'Flint', 'Gardain', 'Harbek', 'Kildrak', 'Morgran', 'Orsik', 'Oskar', 'Rangrim', 'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Veit', 'Vondal']],
		['female', ['Amber', 'Artin', 'Audhild', 'Bardryn', 'Dagnal', 'Diesa', 'Eldeth', 'Falkrunn', 'Finellen', 'Gunnloda', 'Gurdis', 'Helja', 'Hlin', 'Kathra', 'Kristryd', 'Ilde', 'Liftrasa', 'Mardred', 'Riswynn', 'Sannl', 'Torbera', 'Torgga', 'Vistra']],
		['surname', ['Balderk', 'Battlehammer', 'Brawnanvil', 'Dankil', 'Fireforge', 'Frostbeard', 'Gorunn', 'Holderhek', 'Ironfist', 'Loderr', 'Lutgehr', 'Rumnaheim', 'Strakeln', 'Torunn', 'Ungart']]
	])],
	['elf', new Map<string, string[]>([
		['male', ['Adran', 'Aelar', 'Aramil', 'Arannis', 'Aust', 'Beiro', 'Berrian', 'Carric', 'Enialis', 'Erdan', 'Erevan', 'Galinndan', 'Hadarai', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Laucian', 'Mindartis', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Thamior', 'Tharivol', 'Theren', 'Varis']],
		['female', ['Adrie', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Bethrynna', 'Birel', 'Caelynn', 'Drusilia', 'Enna', 'Felosial', 'Ielenia', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Meriele', 'Mialee', 'Naivara', 'Quelenna', 'Quillathe', 'Sariel', 'Shanairra', 'Shava', 'Silaqui', 'Theirastra', 'Thia', 'Vadania', 'Valanthe', 'Xanaphia']],
		['surname', ['Amakiir', 'Amastacia', 'Galanodel', 'Holimion', 'Ilphelkiir', 'Liadon', 'Meliamne', 'Naïlo', 'Siannodel', 'Xiloscient']]
	])],
	['gnome', new Map<string, string[]>([
		['male', ['Alston', 'Alvyn', 'Boddynock', 'Brocc', 'Burgell', 'Dimble', 'Eldon', 'Erky', 'Fonkin', 'Frug', 'Gerbo', 'Gimble', 'Glim', 'Jebeddo', 'Kellen', 'Namfoodle', 'Orryn', 'Roondar', 'Seebo', 'Sindri', 'Warryn', 'Wrenn', 'Zook']],
		['female', ['Bimpnottin', 'Breena', 'Caramip', 'Carlin', 'Donella', 'Duvamil', 'Ella', 'Ellyjobell', 'Ellywick', 'Lilli', 'Loopmottin', 'Lorilla', 'Mardnab', 'Nissa', 'Nyx', 'Oda', 'Orla', 'Roywyn', 'Shamil', 'Tana', 'Waywocket', 'Zanna']],
		['surname', ['Beren', 'Daergel', 'Folkor', 'Garrick', 'Nackle', 'Murnig', 'Ningel', 'Raulnor', 'Scheppen', 'Timbers', 'Turen']]
	])],
	['halfling', new Map<string, string[]>([
		['male', ['Alton', 'Ander', 'Cade', 'Corrin', 'Eldon', 'Errich', 'Finnan', 'Garret', 'Lindal', 'Lyle', 'Merric', 'Milo', 'Osborn', 'Perrin', 'Reed', 'Roscoe', 'Wellby']],
		['female', ['Andry', 'Bree', 'Callie', 'Cora', 'Euphemia', 'Jillian', 'Kithri', 'Lavinia', 'Lidda', 'Merla', 'Nedda', 'Paela', 'Portia', 'Seraphina', 'Shaena', 'Trym', 'Vani', 'Verna']],
		['surname', ['Brushgather', 'Goodbarrel', 'Greenbottle', 'High-hill', 'Hilltopple', 'Leagallow', 'Tealeaf', 'Thorngage', 'Tosscobble', 'Underbough']]
	])],
	['human', new Map<string, string[]>([
		['male', ['Aseir', 'Bardeid', 'Haseid', 'Khemed', 'Mehmen', 'Sudeiman', 'Zasheir', 'Darvin', 'Dorn', 'Evendur', 'Gorstag', 'Grim', 'Helm', 'Malark', 'Morn', 'Randal', 'Stedd', 'Bor', 'Fodel', 'Glar', 'Grigor', 'Igan', 'Ivor', 'Kosef', 'Mival', 'Orel', 'Pavel', 'Sergor', 'Ander', 'Blath', 'Bran', 'Frath', 'Geth', 'Lander', 'Luth', 'Malcer', 'Stor', 'Taman', 'Urth Aoth', 'Bareris', 'Ehput-Ki', 'Kethoth', 'Mumed', 'Ramas', 'So-Kehur', 'Thazar-De', 'Urhur', 'Borivik', 'Faurgar', 'Jandar', 'Kanithar', 'Madislak', 'Ralmevik', 'Shaumar', 'Vladislak', 'An', 'Chen', 'Chi', 'Fai', 'Jiang', 'Jun', 'Lian', 'Long', 'Meng', 'On', 'Shan', 'Shui', 'Wen', 'Anton', 'Diero', 'Marcon', 'Pieron', 'Rimardo', 'Romero', 'Salazar', 'Umbero']],
		['female', ['Atala', 'Ceidil', 'Hama', 'Jasmal', 'Meilil', 'Seipora', 'Yasheira', 'Zasheida', 'Arveene', 'Esvele', 'Jhessail', 'Kerri', 'Lureene', 'Miri', 'Rowan', 'Shandri', 'Tessele', 'Alethra', 'Kara', 'Katernin', 'Mara', 'Natali', 'Olma', 'Tana', 'Zora', 'Amafrey', 'Betha', 'Cefrey', 'Kethra', 'Mara', 'Olga', 'Silifrey', 'Westra', 'Arizima', 'Chathi', 'Nephis', 'Nulara', 'Murithi', 'Sefris', 'Thola', 'Umara', 'Zolis', 'Fyevarra', 'Hulmarra', 'Immith', 'Imzel', 'Navarra', 'Shevarra', 'Tammith', 'Yuldra', 'Bai', 'Chao', 'Jia', 'Lei', 'Mei', 'Qiao', 'Shui', 'Tai', 'Balama', 'Dona', 'Faila', 'Jalana', 'Luisa', 'Marta', 'Quara', 'Selise', 'Vonda']],
		['surname', ['Basha', 'Dumein', 'Jassan', 'Khalid', 'Mostana', 'Pashar', 'Rein', 'Amblecrown', 'Buckman', 'Dundragon', 'Evenwood', 'Greycastle', 'Tallstag', 'Bersk', 'Chernin', 'Dotsk', 'Kulenov', 'Marsk', 'Nemetsk', 'Shemov', 'Starag', 'Brightwood', 'Helder', 'Hornraven', 'Lackman', 'Stormwind', 'Windrivver', 'Ankhalab', 'Anskuld', 'Fezim', 'Hahpet', 'Nathandem', 'Sepret', 'Uuthrakt', 'Chergoba', 'Dyernina', 'Iltazyara', 'Murnyethara', 'Stayanoga', 'Ulmokina', 'Chien', 'Huang', 'Kao', 'Kung', 'Lao', 'Ling', 'Mei', 'Pin', 'Shin', 'Sum', 'Tan', 'Wan', 'Agosto', 'Astorio', 'Calabra', 'Domine', 'Falone', 'Marivaldi', 'Pisacar', 'Ramondo']]
	])],
	['orc', new Map<string, string[]>([
		['male', ['Dench', 'Feng', 'Gell', 'Henk', 'Holg', 'Imsh', 'Keth', 'Krusk', 'Mhurren', 'Ront', 'Shump', 'Thokk']],
		['female', ['Baggi', 'Emen', 'Engong', 'Kansif', 'Myev', 'Neega', 'Ovak', 'Ownka', 'Shautha', 'Sutha', 'Vola', 'Volen', 'Yevelda']]
	])],
	['tiefling', new Map<string, string[]>([
		['male', ['Akmenos', 'Amnon', 'Barakas', 'Damakos', 'Ekemon', 'Iados', 'Kairon', 'Leucis', 'Melech', 'Mordai', 'Morthos', 'Pelaios', 'Skamos', 'Therai']],
		['female', ['Akta', 'Anakis', 'Bryseis', 'Criella', 'Damaia', 'Ea', 'Kallista', 'Lerissa', 'Makaria', 'Nemeia', 'Orianna', 'Phelaia', 'Rieta']],
		['virtue', ['Art', 'Carrion', 'Chant', 'Creed', 'Despair', 'Excellence', 'Fear', 'Glory', 'Hope', 'Ideal', 'Music', 'Nowhere', 'Open', 'Poetry', 'Quest', 'Random', 'Reverence', 'Sorrow', 'Temerity', 'Torment', 'Weary']]
	])],
]);

class RaceInfo {
	name: string;
	age: SimpleRange = { min: 0, max: 0 };
	height: SimpleRange = { min: 0, max: 0 };
	weight: SimpleRange = { min: 0, max: 0 };
	names: Map<string, string[]> = new Map<string, string[]>();

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

	setNames(race: string): void {
		switch (race) {
			case 'dragonborn':
				this.names.set('male', allNames.get('dragonborn')?.get('male')!);
				this.names.set('female', allNames.get('dragonborn')?.get('female')!);
				this.names.set('surname', allNames.get('dragonborn')?.get('surname')!);
				break;
			case 'dwarf':
				this.names.set('male', allNames.get('dwarf')?.get('male')!);
				this.names.set('female', allNames.get('dwarf')?.get('female')!);
				this.names.set('surname', allNames.get('dwarf')?.get('surname')!);
				break;
			case 'elf':
				this.names.set('male', allNames.get('elf')?.get('male')!);
				this.names.set('female', allNames.get('elf')?.get('female')!);
				this.names.set('surname', allNames.get('elf')?.get('surname')!);
				break;
			case 'gnome':
				this.names.set('male', allNames.get('gnome')?.get('male')!);
				this.names.set('female', allNames.get('gnome')?.get('female')!);
				this.names.set('surname', allNames.get('gnome')?.get('surname')!);
				break;
			case 'half-elf':
				this.names.set('male', [...allNames.get('elf')?.get('male')!, ...allNames.get('human')?.get('male')!]);
				this.names.set('female', [...allNames.get('elf')?.get('female')!, ...allNames.get('human')?.get('female')!]);
				this.names.set('surname', [...allNames.get('elf')?.get('surname')!, ...allNames.get('human')?.get('surname')!]);
				break;
			case 'half-orc':
				this.names.set('male', [...allNames.get('orc')?.get('male')!, ...allNames.get('human')?.get('male')!]);
				this.names.set('female', [...allNames.get('orc')?.get('female')!, ...allNames.get('human')?.get('female')!]);
				this.names.set('surname', [...Array(20).fill(''), ...allNames.get('human')?.get('surname')!]);
				break;
			case 'halfling':
				this.names.set('male', allNames.get('halfling')?.get('male')!);
				this.names.set('female', allNames.get('halfling')?.get('female')!);
				this.names.set('surname', allNames.get('halfling')?.get('surname')!);
				break;
			case 'human':
				this.names.set('male', allNames.get('human')?.get('male')!);
				this.names.set('female', allNames.get('human')?.get('female')!);
				this.names.set('surname', allNames.get('human')?.get('surname')!);
				break;
			case 'tiefling':
				this.names.set('male', allNames.get('tiefling')?.get('male')!);
				this.names.set('female', allNames.get('tiefling')?.get('female')!);
				this.names.set('surname', [...Array(1).fill('')]);
				this.names.set('virtue', allNames.get('tiefling')?.get('virtue')!);
				break;
			default:
				this.names.set('male', ['Josh', 'Mike', 'Pat', 'Justin', 'Hector The Well Endowed', 'Marrrrrr']);
				this.names.set('female', ['Jess', 'Shannon', 'Mal', 'Riley']);
				this.names.set('surname', ['Calderon', 'Batman', 'Graveler', 'Peepee', 'Poopoo']);
				break;
		}
	}
}

export const races: Map<string, RaceInfo> = new Map<string, RaceInfo>([
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

