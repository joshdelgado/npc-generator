import React, { Component } from 'react';
import { SimpleRange } from '../../interfaces/simple-range';

class RaceInfo {
	age: SimpleRange;
	height: SimpleRange;
	weight: SimpleRange;

	constructor(minAge: number, maxAge: number, minHeight: number, maxHeight: number, minWeight: number, maxWeight: number) {
		this.age.min = minAge;
		this.age.max = maxAge;
		this.height.min = minHeight;
		this.height.max = maxHeight;
		this.weight.min = minWeight;
		this.weight.max = maxWeight;
	}
}

const baseUrl: string = 'https://www.dnd5eapi.co/api/';
const abilities: string[] = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
const classes: string[] = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard'];
const races: string[] = ['dragonborn', 'dwarf', 'elf', 'gnome', 'helf-elf', 'half-orc', 'halfling', 'human', 'tiefling'];
const raceInfo: Map<string, RaceInfo> = new Map<string, RaceInfo>([
	['dragonborn', new RaceInfo(18, 100, 60, 120, 150, 300)],
	['dwarf', new RaceInfo(18, 100, 60, 120, 150, 300)],
	['elf', new RaceInfo(18, 100, 60, 120, 150, 300)],
	['gnome', new RaceInfo(18, 100, 60, 120, 150, 300)],
	['helf-elf', new RaceInfo(18, 100, 60, 120, 150, 300)],
	['half-orc', new RaceInfo(18, 100, 60, 120, 150, 300)],
	['halfling', new RaceInfo(18, 100, 60, 120, 150, 300)],
	['human', new RaceInfo(18, 100, 60, 120, 150, 300)],
	['tiefling', new RaceInfo(18, 100, 60, 120, 150, 300)]
]);


// Utility
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function getRandomResult(data) {
	return data.results[Math.floor(Math.random() * (data.results.length))];
};

function getNpcGender(): string {
	return Math.floor(Math.random() * 2) == 0 ? 'Male' : 'Female';
}

function getArmorClass(score: number): number {
	return 10 + getModifier(score);
}

function getHitpoints(npcClass, score): number {
	return npcClass.hit_die + getModifier(score);
}

function getNpcName(): string {
	return Math.floor(Math.random() * 2) == 0 ? 'Hector The Well Endowed' : 'Marrrrrr';
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
			<div className="npc-stat">
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

	generateStats(npcClass): void {
		let stats: {} = {},
			ac: number = 10,
			hitpoints = 0;

		abilities.forEach((key) => {
			const score = this.generateStat();
			if (key == 'dexterity') { ac = getArmorClass(score); }
			if (key == 'constitution') { hitpoints = getHitpoints(npcClass, score); }
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

		statArray = statArray.filter(i => i !== index);
		return statArray.reduce(reducer)

		// Random
		// return randomNumber(3,18);
	}

	generateNpc = () => {
		let race = this.getNpcData('race', 'races/' + races[randomNumber(0, races.length - 1)]);
		let npcClass = this.getNpcData('class', 'classes/' + classes[randomNumber(0, classes.length - 1)]);

		Promise.all([race, npcClass]).then((r) => {
			console.log(r);
			this.generateStats(r[1].class);

			this.setState({
				name: getNpcName(),
				gender: getNpcGender()
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

	renderAbilityScore(label, score, modifier) {
		return <NpcAbilityScore label={label} score={score} modifier={modifier} />
	}

	handleClick = (): void => {
		this.setState({ loaded: false });
		this.generateNpc();
	}

	render() {
		const npc = this.state;
		if (!npc.loaded) {
			return <div className="npc-card">Loading...</div>
		}
		console.log('NPC State', npc);
		return (
			<>
				<div className="npc-card" >
					<div className="npc-card__header">
						<div>
							<h2 className="npc-card__name">{npc.name}</h2>
							<ol className="npc-card__info">
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
						<img src="https://www.fillmurray.com/300/300" />
					</div>
					<ul className="npc-card__ability-scores" >
						{this.renderAbilityScore('Strength', npc.abilityScores.strength.score, npc.abilityScores.strength.modifier)}
						{this.renderAbilityScore('Dexterity', npc.abilityScores.dexterity.score, npc.abilityScores.dexterity.modifier)}
						{this.renderAbilityScore('Constitution', npc.abilityScores.constitution.score, npc.abilityScores.constitution.modifier)}
						{this.renderAbilityScore('Intelligence', npc.abilityScores.intelligence.score, npc.abilityScores.intelligence.modifier)}
						{this.renderAbilityScore('Wisdom', npc.abilityScores.wisdom.score, npc.abilityScores.wisdom.modifier)}
						{this.renderAbilityScore('Charisma', npc.abilityScores.charisma.score, npc.abilityScores.charisma.modifier)}
					</ul>
					<div className='npc-card__bio'>
						<p>blah blah blah</p>
					</div>
				</div>
				<button className="generate-npc-button" onClick={this.handleClick}>Generate NPC</button>
			</>
		)
	}
}