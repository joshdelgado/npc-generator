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
	}

	assignState = (value: string) => {
		this.setState(value, () => {
			this.props.callback(this.state);
		});
	}

	render() {
		return (
			<div className="npc-options">
				<div className="npc-options__content">
					<div className="npc-options__input">
						<NpcLevelSelect callback={this.assignState}></NpcLevelSelect>
					</div>
					<div className="npc-options__input">
						<NpcGenderSelect callback={this.assignState}></NpcGenderSelect>
					</div>
					<div className="npc-options__input">
						<NpcRaceSelect callback={this.assignState}></NpcRaceSelect>
					</div>
					<div className="npc-options__input">
						<NpcAlignmentSelect callback={this.assignState}></NpcAlignmentSelect>
					</div>
					<div className="npc-options__input">
						<NpcClassSelect callback={this.assignState}></NpcClassSelect>
					</div>
					<div className="npc-options__input">
						<NpcStatDistributionSelect callback={this.assignState}></NpcStatDistributionSelect>
					</div>
				</div>
			</div>
		)
	}
}