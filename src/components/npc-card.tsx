import React, { Component } from 'react';
import { NpcAbilityScores } from './card-elements/npc-ability-scores';
import { NpcBio } from './card-elements/npc-bio';
import { NpcHeader } from './card-elements/npc-header';
import { NpcImage } from './card-elements/npc-image';
import { NpcPlothook } from './card-elements/npc-plothook';

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

	render() {
		const npc = this.props.npcData;

		return (
			<div className={this.state.parentClasses}>
				<div className={`npc-card__first-load ${this.state.firstLoadState}`}>
					<p>Click <strong>Generate Npc</strong> above to get a totally random npc for whatever you need. If you have some npc criteria in mind, like race or class, click the <strong>down angle</strong> to reveal more options.</p>
				</div>
				<div className={`npc-card__spinner ${this.state.spinnerState}`}></div>
				<div className={`npc-card__npc ${this.state.npcState}`}>
					{this.state.loaded ? (<>
						<NpcHeader npc={npc}></NpcHeader>
						<NpcImage npc={npc}></NpcImage>
						<NpcBio npc={npc}></NpcBio>
						<NpcAbilityScores npc={npc}></NpcAbilityScores>
						{npc.plotHook ? <NpcPlothook npc={npc}></NpcPlothook> : null}
					</>) : null}
				</div>
			</div>
		)
	}
}