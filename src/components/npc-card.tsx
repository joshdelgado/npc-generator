import React, { Component } from 'react';
import { NpcGenderIcon } from './gender-icon';
import { NpcAbilityScore } from './npc-ability-score';

export class NpcCard extends Component<any, any> {

	componentDidUpdate = (oldProps: any) => {
		if (oldProps.userSelections !== this.props.userSelections) {
			this.setState({ userSelections: this.props.userSelections });
		}
	}

	render() {
		const npc = this.props.npcData,
			loaded = this.props.loaded;
		if (!loaded) {
			return (
				<div className="npc-card"><div className="npc-card__spinner"></div></div>

			)
		}
		console.log('NPC State', this.props);
		return (
			<div className="npc-card" >
				<div className="npc-card__header">
					<div className="npc-card__titles">
						<h2 className="npc-card__name">{npc.name}<NpcGenderIcon gender={npc.attributes.gender}></NpcGenderIcon></h2>
						<ol className="npc-card__info">
							<li className="npc-card__value">{npc.race.name}</li>
							<li className="npc-card__value">{npc.class.name}</li>
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
						<li><strong>Age</strong>{npc.attributes.age} years</li>
						<li><strong>Height</strong>{npc.attributes.height}</li>
						<li><strong>Weight</strong>{npc.attributes.weight} lbs</li>
						<li><strong>Alignment</strong>{npc.attributes.alignment.name}</li>
					</ol>
					<div className="npc-card__description">
						{npc.description}
					</div>
				</div>
				<ul className="npc-card__ability-scores" >
					<NpcAbilityScore label="Strength" score={npc.abilityScores.strength}></NpcAbilityScore>
					<NpcAbilityScore label="Dexterity" score={npc.abilityScores.dexterity}></NpcAbilityScore>
					<NpcAbilityScore label="Constitution" score={npc.abilityScores.constitution}></NpcAbilityScore>
					<NpcAbilityScore label="Intelligence" score={npc.abilityScores.intelligence}></NpcAbilityScore>
					<NpcAbilityScore label="Wisdom" score={npc.abilityScores.wisdom}></NpcAbilityScore>
					<NpcAbilityScore label="Charisma" score={npc.abilityScores.charisma}></NpcAbilityScore>
				</ul>
			</div>
		)
	}
}