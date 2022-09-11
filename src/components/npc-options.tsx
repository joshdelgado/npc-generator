import React, { Component } from 'react';
import { NpcAlignmentSelect } from './inputs/npc-alignment-select';
import { NpcClassSelect } from './inputs/npc-class-select';
import { NpcGenderSelect } from './inputs/npc-gender-select';
import { NpcLevelSelect } from './inputs/npc-level-select';
import { NpcPlotHookCheckbox } from './inputs/npc-plot-hook-checkbox';
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
		statAlgo: false,
		plotHook: false
	}

	cleanFormState = {
		level: '',
		gender: '',
		race: '',
		class: '',
		alignment: '',
		statAlgo: false,
		plotHook: false
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
						<h1 className="npc-options__header-title">Roll4d6</h1>
						<h2 className="npc-options__header-subtitle">A Random NPC Generator JUST For You ❤️</h2>
					</div>
					<svg className="npc-options__header-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.344 185.344" xmlSpace="preserve">
						<path fill="#010002" d="M92.672,144.373c-2.752,0-5.493-1.044-7.593-3.138L3.145,59.301c-4.194-4.199-4.194-10.992,0-15.18 c4.194-4.199,10.987-4.199,15.18,0l74.347,74.341l74.347-74.341c4.194-4.199,10.987-4.199,15.18,0 c4.194,4.194,4.194,10.981,0,15.18l-81.939,81.934C98.166,143.329,95.419,144.373,92.672,144.373z" />
					</svg>
				</div>
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
						<div className="npc-options__input">
							<NpcPlotHookCheckbox value={this.state.plotHook} callback={this.assignState}></NpcPlotHookCheckbox>
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