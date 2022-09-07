import React, { Component } from 'react';
import { NpcGenderIcon } from './gender-icon';
import { NpcAbilityScore } from './npc-ability-score';

export class NpcCard extends Component<any, any> {

	state = {
		userSelections: null,
		loaded: false,
		firstLoad: true,
		fadeOutContent: false,
		fadeOutSpinner: true,
		fadeOutIntro: false
	}

	componentDidUpdate = (oldProps: any) => {
		if (oldProps.userSelections !== this.props.userSelections) {
			this.setState({ userSelections: this.props.userSelections });
		}
		// from spinner to npc
		if (oldProps.loaded === false && this.props.loaded === true) {
			console.log('spinner to npc');
			this.setState({ fadeOutSpinner: true }, () => {
				setTimeout(() => {
					// loaded is true, showing npc
					this.setState({ loaded: this.props.loaded, fadeOutContent: false })
				}, 350);
			});
		}
		//from npc to spinner
		if (oldProps.loaded === true && this.props.loaded === false) {
			console.log('npc to spinner');
			this.setState({ fadeOutContent: true }, () => {
				setTimeout(() => {
					// loaded is false, showing spinner
					this.setState({ loaded: this.props.loaded, fadeOutSpinner: false })
				}, 350);
			});
		}
		// from intro to spinner
		if (oldProps.firstLoad === true && this.props.firstLoad === false) {
			console.log('intro to spinner');
			this.setState({ fadeOutIntro: true }, () => {
				setTimeout(() => {
					// firstLoad is false, showing spinner
					this.setState({ loaded: this.props.loaded, fadeOutSpinner: false })
				}, 350);
			});
		}
		if (oldProps.firstLoad !== this.state.firstLoad) {
			this.setState({ firstLoad: this.props.firstLoad });
		}
	}

	render() {
		const npc = this.props.npcData;

		return (
			<div className={!this.state.loaded ? this.state.firstLoad ? "npc-card npc-card--first-load" : "npc-card npc-card--loading" : "npc-card"}>
				{!this.state.loaded ?
					this.state.firstLoad ?
						(<div className={this.state.fadeOutIntro ? "npc-card__content npc-card__content--first-load fadeOut" : "npc-card__content npc-card__content--first-load"}>
							<p>Click <strong>Generate Npc</strong> above to get a totally random npc for whatever you need. If you have some npc criteria in mind, like race or class, click the <strong>+ button</strong> to reveal more options.</p>
						</div>) :
						(<div className={this.state.fadeOutSpinner ? "npc-card__spinner fadeOut" : "npc-card__spinner"}></div>)
					:
					(<div className={this.state.fadeOutContent ? "npc-card__content fadeOut" : "npc-card__content"}>
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
					</div>)
				}
			</div>
		)
	}
}