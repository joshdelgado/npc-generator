import React, { Component } from 'react';
import { elvenTranslations } from '../consts/races';
import { NpcGenderIcon } from './gender-icon';
import { NpcAbilityScore } from './npc-ability-score';

export class NpcCard extends Component<any, any> {

	state = {
		userSelections: null,
		loaded: false,
		parentClasses: 'npc-card npc-card--first-load',
		firstLoadState: 'active',
		spinnerState: 'hidden',
		npcState: 'hidden gone',
	}

	componentDidUpdate = (oldProps: any) => {
		if (oldProps.userSelections !== this.props.userSelections) {
			this.setState({ userSelections: this.props.userSelections });
		}

		// from intro to spinner
		if (oldProps.firstLoad === true && this.props.firstLoad === false) {
			this.setState({ firstLoadState: 'active hidden', parentClasses: 'npc-card npc-card--spinner' }, () => {
				setTimeout(() => {
					this.setState({ firstLoadState: 'hidden gone', spinnerState: 'active' })
				}, 500);
			});
			return;
		}
		// from spinner to npc
		if (oldProps.loaded === false && this.props.loaded === true) {
			this.setState({ spinnerState: 'active hidden', npcState: 'hidden', firstLoadState: 'hidden gone', parentClasses: 'npc-card', loaded: true }, () => {
				setTimeout(() => {
					this.setState({ spinnerState: 'hidden', npcState: 'active' })
				}, 500);
			});
			return;
		}
		//from npc to spinner
		if (oldProps.loaded === true && this.props.loaded === false) {
			this.setState({ npcState: 'active hidden', spinnerState: 'hidden', firstLoadState: 'hidden gone', parentClasses: 'npc-card npc-card--spinner' }, () => {
				setTimeout(() => {
					this.setState({ npcState: 'hidden', spinnerState: 'active' })
				}, 500);
			});
			return;
		}
	}

	renderNpcName = (npc: any, hasTranslation: boolean, hasVirtueName: boolean): any => {
		let classes = 'npc-card__name',
			title: string | undefined = undefined;

		if (hasTranslation) {
			classes += ' npc-card__name--has-tooltip';
			title = 'Common translation: ' + npc.firstName + ' ' + elvenTranslations.get(npc.surname);
		}

		if (hasVirtueName) {
			classes += ' npc-card__name--has-tooltip';
			title = 'Virtue name: ' + npc.virtueName;
		}

		return (<>
			<h2 className={classes} title={title}>{npc.fullName}</h2>
			<NpcGenderIcon gender={npc.attributes.gender}></NpcGenderIcon>
		</>);
	}

	render() {
		const npc = this.props.npcData,
			hasTranslation = elvenTranslations.has(npc.surname),
			hasVirtueName = !!npc.virtueName;

		return (
			<div className={this.state.parentClasses}>
				<div className={`npc-card__first-load ${this.state.firstLoadState}`}>
					<p>Click <strong>Generate Npc</strong> above to get a totally random npc for whatever you need. If you have some npc criteria in mind, like race or class, click the <strong>+ button</strong> to reveal more options.</p>
				</div>
				<div className={`npc-card__spinner ${this.state.spinnerState}`}></div>
				<div className={`npc-card__npc ${this.state.npcState}`}>
					{this.state.loaded ? (<>
						<div className="npc-card__header">
							<div className="npc-card__titles">
								{this.renderNpcName(npc, hasTranslation, hasVirtueName)}
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
						<div className="npc-card__plothook">
							<h4 className="npc-card__plothook-title">Plothook</h4>
							<p className="npc-card__plothook-text">"{npc.plothook}" <strong>-&nbsp;{npc.fullName}</strong></p>
						</div>
					</>) : (<></>)}
				</div>
			</div>
		)
	}
}