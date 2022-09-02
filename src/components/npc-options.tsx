import React, { Component } from 'react';
import { NpcAlignmentSelect } from './inputs/npc-alignment-select';
import { NpcClassSelect } from './inputs/npc-class-select';
import { NpcGenderSelect } from './inputs/npc-gender-select';
import { NpcLevelSelect } from './inputs/npc-level-select';
import { NpcRaceSelect } from './inputs/npc-race-select';
import { NpcStatDistributionSelect } from './inputs/npc-stat-distribution-select';

export class NpcOptions extends Component<any, any> {

	state = {
		level: '',
		gender: '',
		race: '',
		class: '',
		alignment: '',
		statAlgo: ''
	}

	ogState = this.state;

	assignState = (value: string) => {
		this.setState(value, () => {
			this.props.callback(this.state);
		});
	}

	resetSelctions = () => {
		this.setState(this.ogState, () => {
			this.props.callback(this.state);
		});
	}

	render() {
		return (
			<div className="npc-options">
				<div className="npc-options__content">
					<div className="npc-options__input">
						<NpcLevelSelect value={this.state.level} callback={this.assignState}></NpcLevelSelect>
					</div>
					<div className="npc-options__input">
						<NpcGenderSelect value={this.state.gender} callback={this.assignState}></NpcGenderSelect>
					</div>
					<div className="npc-options__input">
						<NpcRaceSelect value={this.state.race} callback={this.assignState}></NpcRaceSelect>
					</div>
					<div className="npc-options__input">
						<NpcClassSelect value={this.state.class} callback={this.assignState}></NpcClassSelect>
					</div>
					<div className="npc-options__input">
						<NpcAlignmentSelect value={this.state.alignment} callback={this.assignState}></NpcAlignmentSelect>
					</div>
					<div className="npc-options__input">
						<NpcStatDistributionSelect value={this.state.statAlgo} callback={this.assignState}></NpcStatDistributionSelect>
					</div>
					<div className="npc-options__input npc-options__input--reset">
						<button className="npc-options__button" onClick={this.resetSelctions}>Reset</button>
					</div>
				</div>
			</div>
		)
	}
}