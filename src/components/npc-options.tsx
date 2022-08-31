import React, { Component } from 'react';
// @ts-ignore
import { NpcRaceSelect } from './npc-race-select.tsx';

export class NpcOptions extends Component<any, any> {
	state = {
		options: [
			{
				name: 'no',
				value: 'no'
			},
			{
				name: 'yes',
				value: 'yes'
			}
		],
		value: ''
	}

	handleChange = (event) => {
		this.setState({ value: event.target.value })
	}

	render() {
		const { options, value } = this.state;

		return (
			<div className="npc-options">
				<label htmlFor="level-select">Level</label>
				<select name="level" id="level-select">
					<option value="">Random</option>
					{[...Array(20)].map((a, index) => <option key={Math.random() + index} value={index + 1}>{index + 1}</option>)}
				</select>

				<label htmlFor="gender-select">Gender</label>
				<select name="gender" id="gender-select">
					<option value="">Random</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="other">Other</option>
				</select>

				<NpcRaceSelect></NpcRaceSelect>

				{/* <label htmlFor="race-select">Race</label>
				<select name="race" id="race-select">
					<option value="">Random</option>
					{Array.from(races.entries()).map((entry) => {
						const [key, value] = entry;
						return (<option key={key} value={key}>{value.name}</option>);
					})}
				</select>

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

				<label htmlFor="roll-type-select">Stat Point Algorithm</label>
				<select name="roll-type" id="roll-type-select">
					<option value="">Random</option>
					<option value="4d6dropLowest">4d6 Drop Lowest</option>
				</select>

				<label htmlFor="algo-select">Stat Distribution</label>
				<select name="algo" id="algo-select">
					<option value="">Random</option>
					<option value="intelligent">Intelligent</option>
				</select>
			</div>
		)
	}
}