import React, { Component } from 'react';
import { NpcRaceSelect } from './npc-race-select';

export class NpcOptions extends Component<any, any> {
	state = {
		level: '',
		gender: '',
		race: '',
		class: '',
		alignment: '',
	}

	handleChange = (event: any) => {
		this.setState({ value: event.target.value })
	}

	assignState = (value: string) => {
		this.setState(value);
	}

	render() {
		return (
			<div className="npc-options">
				<div className="npc-options__content">
					<div className="npc-options__input">
						<label htmlFor="level-select">Level</label>
						<select name="level" id="level-select">
							<option value="">Random</option>
							{[...Array(20)].map((a, index) => <option key={Math.random() + index} value={index + 1}>{index + 1}</option>)}
						</select>
					</div>

					<div className="npc-options__input">
						<label htmlFor="gender-select">Gender</label>
						<select name="gender" id="gender-select">
							<option value="">Random</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
					</div>

					<div className="npc-options__input">
						<NpcRaceSelect callback={this.assignState}></NpcRaceSelect>
					</div>


					{/* 

				<label htmlFor="class-select">Class</label>
				<select name="class" id="class-select">
					<option value="">Random</option>
					{Array.from(classes).map((c) => {
						return (<option key={c} value={c}>{capitalize(c)}</option>);
					})}
				</select>

				<label htmlFor="alignment-select">Alignment</label>
				<select name="alignment" id="alignment-select">
					<option value="">Random</option>
					{Array.from(alignments.entries()).map((entry) => {
						const [_, value] = entry;
						return (<option key={value.code} value={value.alias}>{value.name}</option>);
					})}
				</select> */}

					<div className="npc-options__input">
						<label htmlFor="roll-type-select">Stat Point Algorithm</label>
						<select name="roll-type" id="roll-type-select">
							<option value="">Random</option>
							<option value="4d6dropLowest">4d6 Drop Lowest</option>
						</select>
					</div>

					<div className="npc-options__input">
						<label htmlFor="algo-select">Stat Distribution</label>
						<select name="algo" id="algo-select">
							<option value="">Random</option>
							<option value="intelligent">Intelligent</option>
						</select>
					</div>
				</div>
			</div>
		)
	}
}