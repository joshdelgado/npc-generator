import React, { Component } from 'react';
import { NpcAlignmentSelect } from './inputs/npc-alignment-select';
import { NpcClassSelect } from './inputs/npc-class-select';
import { NpcGenderSelect } from './inputs/npc-gender-select';
import { NpcLevelSelect } from './inputs/npc-level-select';
import { NpcRaceSelect } from './inputs/npc-race-select';
import { NpcStatDistributionCheckbox } from './inputs/npc-stat-distribution-checkbox';

export class NpcOptions extends Component<any, any> {

	state = {
		open: false,
		level: '',
		gender: '',
		race: '',
		class: '',
		alignment: '',
		statAlgo: false
	}

	ogState = this.state;

	toggleOptions = (): void => {
		this.setState({ open: !this.state.open });
	}

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

	handleSubmit = () => {
		this.props.generateNpc();
	}

	render() {
		return (
			<div className={this.state.open ? 'npc-options npc-options--open' : 'npc-options'}>
				<div className="npc-options__header" onClick={this.toggleOptions} >
					<h3 className="npc-options__header-title">Advanced Options</h3>
					<span className="npc-options__header-icon"></span>
				</div >
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
						<NpcStatDistributionCheckbox value={this.state.statAlgo} callback={this.assignState}></NpcStatDistributionCheckbox>
					</div>
					<div className="npc-options__input npc-options__input--buttons">
						<button className="button button--secondary" onClick={this.resetSelctions}>Reset</button>
						<button className="button" onClick={this.handleSubmit}>Generate NPC</button>
					</div>
				</div>
			</div >
		)
	}
}