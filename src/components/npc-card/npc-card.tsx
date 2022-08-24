import React, { Component } from 'react';
import { AbilityScores } from '../../interfaces/ability-scores';
import { SimpleRange } from '../../interfaces/simple-range';
import { Stat } from '../../interfaces/stat';

class RaceInfo {
	age: SimpleRange = { min: 0, max: 0 };
	height: SimpleRange = { min: 0, max: 0 };
	weight: SimpleRange = { min: 0, max: 0 };

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
const races: string[] = ['dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'half-orc', 'halfling', 'human', 'tiefling'];
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

function getHitpoints(hitDie: number, score: number): number {
	return hitDie + getModifier(score);
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
			<div className={`npc-stat ${props.hasBonus ? 'npc-stat--has-bonus' : ''}`}>
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
				strength: { score: null, modifier: null, hasBonus: null },
				dexterity: { score: null, modifier: null, hasBonus: null },
				intelligence: { score: null, modifier: null, hasBonus: null },
				wisdom: { score: null, modifier: null, hasBonus: null },
				constitution: { score: null, modifier: null, hasBonus: null },
				charisma: { score: null, modifier: null, hasBonus: null },
			},
			loaded: false
		};
	}

	generateStats(hitDie: number, abilityBonuses): void {
		let stats: {} = {},
			ac: number = 10,
			hitpoints = 0,
			bonuses: Map<string, number> = new Map<string, number>();

		if (abilityBonuses) {
			abilityBonuses.forEach((ab) => {
				bonuses.set(ab.ability_score.index, ab.bonus);
			});
		}

		abilities.forEach((key) => {
			let score: number = this.generateStat(),
				hasBonus: boolean = false;

			if (bonuses && bonuses.has(key.substring(0, 3))) {
				//@ts-ignore I check if the key exists above
				score += bonuses.get(key.substring(0, 3));
				hasBonus = true;
			}

			if (key === 'dexterity') { ac = getArmorClass(score); }
			if (key === 'constitution') { hitpoints = getHitpoints(hitDie, score); }
			stats[key] = { score: score, modifier: getModifier(score), hasBonus: hasBonus };
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
			this.generateStats(r[1].class.hit_die, r[0].race.ability_bonuses);

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

	renderAbilityScore(label: string, abilityScore: Stat) {
		return <NpcAbilityScore label={label} score={abilityScore.score} modifier={abilityScore.modifier} hasBonus={abilityScore.hasBonus} />
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
						{this.renderAbilityScore('Strength', npc.abilityScores.strength)}
						{this.renderAbilityScore('Dexterity', npc.abilityScores.dexterity)}
						{this.renderAbilityScore('Constitution', npc.abilityScores.constitution)}
						{this.renderAbilityScore('Intelligence', npc.abilityScores.intelligence)}
						{this.renderAbilityScore('Wisdom', npc.abilityScores.wisdom)}
						{this.renderAbilityScore('Charisma', npc.abilityScores.charisma)}
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