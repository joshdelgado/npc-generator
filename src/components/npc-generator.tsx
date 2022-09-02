import React, { Component } from 'react';
import { alignments } from '../consts/alignments';
import { classes } from '../consts/consts';
import { gods } from '../consts/gods';
import { adjectives, traits, religiousAdjective, socioeconomic, traits2, quirks } from '../consts/npc-bio';
import { races } from '../consts/races';
import { randomNumber, getRandomMapKey, getRandomNumberStandardDist } from '../utility/functions';
import { NpcCard } from './npc-card';
import { NpcOptions } from './npc-options';

const baseUrl: string = 'https://www.dnd5eapi.co/api/';
const abilities: string[] = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

export class NpcGenerator extends Component<any, any> {

	constructor(props: any) {
		super(props);

		this.state = {
			userSelections: {
				level: '',
				gender: '',
				race: '',
				class: '',
				alignment: '',
			},
			npc: {
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
				}
			},
			loaded: false
		};
	}

	updateOptions = (userSelections: any) => {
		this.setState({ userSelections: userSelections });
	}

	getNpcGender(): string {
		return Math.floor(Math.random() * 2) === 0 ? 'Male' : 'Female';
	}

	getArmorClass(score: number): number {
		return 10 + this.getModifier(score);
	}

	getHitpoints(hitDie: number, score: number, level?: number): number {
		let hp = hitDie + this.getModifier(score),
			rollsLeft = level || 0;

		while (rollsLeft > 1) {
			// TODO The modifier should adjust as con increases but it doesn't right now
			hp += (randomNumber(1, hitDie) + this.getModifier(score));
			rollsLeft--;
		}

		return hp;
	}

	getAge = (race: any): number => {
		return getRandomNumberStandardDist(races.get(race.index)!.age.min, races.get(race.index)!.age.max, 1)
	}

	getHeight = (race: any): string => {
		const height = getRandomNumberStandardDist(races.get(race.index)!.height.min, races.get(race.index)!.height.max, 1),
			feet = Math.floor(height / 12),
			inches = height % 12;

		return feet + "' " + inches + '"';
	}

	getWeight = (race: any): number => {
		return getRandomNumberStandardDist(races.get(race.index)!.weight.min, races.get(race.index)!.weight.max, 1);
	}

	getNpcName = (race: string, gender: string): string => {
		if (gender !== 'male' && gender !== 'female') {
			gender = this.getNpcGender();
		}
		const rand1 = Math.floor(Math.random() * races.get(race)!.names.get(gender.toLowerCase())!.length),
			rand2 = Math.floor(Math.random() * races.get(race)!.names.get('surname')!.length);

		let last = races.get(race)!.names.get('surname')![rand2],
			first = races.get(race)!.names.get(gender.toLowerCase())![rand1];


		let returnName = first;
		if (last) { returnName = returnName + " " + last; }

		return returnName;
	}

	getModifier(score: number): number {
		return Math.floor((score - 10) / 2);
	}

	generateStats(hitDie: number, abilityBonuses: any, numOfAbi: number, level: number): any {
		let stats: { [key: string]: {} } = {},
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
			abilityBonuses.forEach((ab: any) => {
				bonuses.set(ab.ability_score.index, ab.bonus);
			});
		}

		// Distribute level-based bonuses to bonus map
		while (availableAbi > 0) {
			let randomStat = abilities[randomNumber(0, abilities.length - 1)].substring(0, 3);
			bonuses.set(randomStat, bonuses.get(randomStat)! + 1);
			availableAbi--;
		}

		abilities.forEach((key: string) => {
			let score: number = this.generateStat(),
				keyTrunc: string = key.substring(0, 3);

			if (bonuses && bonuses.has(keyTrunc)) {
				// @ts-ignore
				score += bonuses.get(keyTrunc);
			}

			if (key === 'dexterity') { ac = this.getArmorClass(score); }
			if (key === 'constitution') { hitpoints = this.getHitpoints(hitDie, score, level); }
			stats[key] = { score: score, modifier: this.getModifier(score) };
		});

		return {
			abilityScores: stats,
			armorClass: ac,
			hitpoints: hitpoints
		};
	}

	generateStat(): number {
		const reducer = (total: number, i: number) => total + i;
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

	generateDescription = (name: any, race: any, alignment: any) => {
		return (
			<>
				<p>{name} is a {adjectives[randomNumber(0, adjectives.length)]} {race.name} {traits[randomNumber(0, traits.length)]}</p>
				<p>They {religiousAdjective[randomNumber(0, religiousAdjective.length)]} follower of {gods.get(alignment.abbreviation)![0]} and {socioeconomic[randomNumber(0, socioeconomic.length)]} {traits2[randomNumber(0, traits2.length)]}</p>
				<p>{quirks[randomNumber(0, quirks.length)]}</p>
			</>
		)
	}

	generateNpc = () => {
		this.setState({ loaded: false });
		const selections = this.state.userSelections;
		let randomClass = selections.class || classes[randomNumber(0, classes.length)];
		let randomRace = selections.race || getRandomMapKey(races);
		let randomAlignment = selections.alignment || getRandomMapKey(alignments)
		let level = selections.level || randomNumber(1, 20);
		let npcRace = this.getNpcData('race', 'races/' + randomRace);
		let npcClass = this.getNpcData('class', 'classes/' + randomClass);
		let npcLevel = this.getNpcData('level', 'classes/' + randomClass + '/levels/' + level);
		let npcAlignment = this.getNpcData('alignment', 'alignments/' + randomAlignment);

		Promise.all([npcRace, npcClass, npcLevel, npcAlignment]).then((r) => {

			const age = this.getAge(r[0].race),
				height = this.getHeight(r[0].race),
				weight = this.getWeight(r[0].race),
				gender = selections.gender || this.getNpcGender(),
				name = this.getNpcName(r[0].race.index, gender),
				description = this.generateDescription(name, r[0].race, r[3].alignment),
				stats = this.generateStats(r[1].class.hit_die, r[0].race.ability_bonuses, r[2].level.ability_score_bonuses, level);

			this.setState({
				npc: {
					race: r[0].race,
					class: r[1].class,
					level: r[2].level,
					name: name,
					abilityScores: stats.abilityScores,
					armorClass: stats.armorClass,
					hitpoints: stats.hitpoints,
					attributes: {
						age: age,
						height: height,
						weight: weight,
						alignment: r[3].alignment,
						gender: gender
					},
					description: description
				}
			}, () => {
				setTimeout(() => {
					this.setState({ loaded: true })
				}, randomNumber(1000, 3000));
			});
		});
	}

	async getNpcData(key: string, endpoint: string): Promise<any> {
		try {
			const response = await fetch(baseUrl + endpoint);
			const data = await response.json();
			return { [key]: data };
		} catch (error) {
			this.setState({ [key]: 'problem' })
		}
	}

	render() {
		return (
			<main className="app__content" >
				<NpcOptions generateNpc={this.generateNpc} callback={this.updateOptions}></NpcOptions>
				<NpcCard loaded={this.state.loaded} npcData={this.state.npc} userSelections={this.state.userSelections}></NpcCard>
			</main>
		);
	}
}