import React, { Component } from 'react';
import { NpcAlignmentSelect } from './inputs/npc-alignment-select';
import { NpcClassSelect } from './inputs/npc-class-select';
import { NpcGenderSelect } from './inputs/npc-gender-select';
import { NpcLevelSelect } from './inputs/npc-level-select';
import { NpcRaceSelect } from './inputs/npc-race-select';
import { NpcStatDistributionCheckbox } from './inputs/npc-stat-distribution-checkbox';

export class NpcOptions extends Component<any, any> {

	state = {
		closed: true,
		level: '',
		gender: '',
		race: '',
		class: '',
		alignment: '',
		statAlgo: false
	}

	cleanFormState = {
		level: '',
		gender: '',
		race: '',
		class: '',
		alignment: '',
		statAlgo: false
	};

	toggleOptions = (): void => {
		this.setState({ closed: !this.state.closed });
		this.resetSelctions();
	}

	assignState = (value: string) => {
		this.setState(value, () => {
			this.props.callback(this.state);
		});
	}

	resetSelctions = () => {
		this.setState(this.cleanFormState, () => {
			this.props.callback(this.state);
		});
	}

	handleSubmit = () => {
		this.props.generateNpc();
	}

	render() {
		let disableForm = this.props.disableForm;
		return (
			<div className={this.state.closed ? 'npc-options npc-options--closed' : 'npc-options'}>
				<div className="npc-options__header" onClick={this.toggleOptions} >
					<div className="npc-options__header-title-area">
						<h3 className="npc-options__header-title">Roll4d6</h3>
						<span className="npc-options__header-subtitle">A Random NPC Generator JUST For You ❤️</span>
					</div>
					<span className="npc-options__header-icon"></span>
				</div >
				<div className="npc-options__content">
					<div className="npc-options__options">
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
					</div>
					<div className="npc-options__input npc-options__input--buttons">
						<button className={"npc-options__reset button button--secondary " + (disableForm ? 'button--disabled' : null)} onClick={this.resetSelctions}>Reset</button>
						<button className={"button " + (disableForm ? 'button--disabled' : null)} onClick={this.handleSubmit}>Generate NPC</button>
					</div>
				</div>
			</div >
		)
	}
}