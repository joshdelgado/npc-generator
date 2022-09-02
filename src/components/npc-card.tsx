import React, { Component } from 'react';
import { Stat } from '../interfaces/stat';

function NpcLineItem(props: any) {
	return (
		<li className="npc-card__value">{props.value}</li>
	);
}

function NpcAbilityScore(props: any) {
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

function NpcGenderIcon(props: any) {
	if (props.gender.toLowerCase() === 'male') {
		return (
			<svg className="npc-card__gender-symbol" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1506 1506.0001" enableBackground="new 0 0 1506 1506.0001" xmlSpace="preserve">
				<path d="M1189.1392,101.8608h-233.366c-83.9626,83.9626-131.0374,131.0372-214.9998,214.9998v0.0002h296.3376l-217.52,217.5201 c-71.9114-44.6514-156.7585-70.44-247.6311-70.44c-259.6284,0-470.0991,210.4705-470.0991,470.0991 s210.4707,470.0992,470.0991,470.0992s470.0991-210.4706,470.0991-470.0992c0-90.8726-25.7888-175.72-70.4399-247.6312 l217.52-217.52v296.3378l0,0c83.9629-83.9626,131.0371-131.037,215-214.9997V316.8608v-215H1189.1392z M571.96,1198.1173 c-145.8457,0-264.0771-118.2313-264.0771-264.0772S426.1143,669.9628,571.96,669.9628s264.0771,118.2313,264.0771,264.0773 S717.8057,1198.1173,571.96,1198.1173z" />
			</svg>

		);
	} else if (props.gender.toLowerCase() === 'female') {
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

	componentDidUpdate = (oldProps: any) => {
		if (oldProps.userSelections !== this.props.userSelections) {
			this.setState({ userSelections: this.props.userSelections });
		}
	}

	renderLineItem(value: string | number) {
		return <NpcLineItem value={value} />
	}

	renderAbilityScore(label: string, abilityScore: Stat) {
		return <NpcAbilityScore label={label} score={abilityScore.score} modifier={abilityScore.modifier} />
	}

	renderGenderIcon(gender: string) {
		return <NpcGenderIcon gender={gender}></NpcGenderIcon>
	}

	render() {
		const npc = this.props.npcData,
			loaded = this.props.loaded;
		if (!loaded) {
			return (
				<>
					<div className="npc-card"><div className="npc-card__spinner"></div></div>
					<button className="generate-npc-button generate-npc-button--disabled" disabled>Generate NPC</button>
				</>

			)
		}
		console.log('NPC State', this.props);
		return (
			<>
				<div className="npc-card" >
					<div className="npc-card__header">
						<div className="npc-card__titles">
							<h2 className="npc-card__name">{npc.name}{this.renderGenderIcon(npc.attributes.gender)}</h2>
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
						{this.renderAbilityScore('Strength', npc.abilityScores.strength)}
						{this.renderAbilityScore('Dexterity', npc.abilityScores.dexterity)}
						{this.renderAbilityScore('Constitution', npc.abilityScores.constitution)}
						{this.renderAbilityScore('Intelligence', npc.abilityScores.intelligence)}
						{this.renderAbilityScore('Wisdom', npc.abilityScores.wisdom)}
						{this.renderAbilityScore('Charisma', npc.abilityScores.charisma)}
					</ul>
				</div>
			</>
		)
	}
}