import React, { Component } from 'react';

export class NpcLevelSelect extends Component<any, any> {
	state = { level: '' };

	handleChange = (event: any) => {
		this.setState({ level: event.target.value }, () => {
			this.props.callback(this.state);
		});
	}

	render() {
		return (
			<>
				<label htmlFor="level">Level</label>
				<select id="level" onChange={this.handleChange} value={this.state.level}>
					<option value="">Random</option>
					{[...Array(20)].map((a, index) => <option key={Math.random() + index} value={index + 1}>{index + 1}</option>)}
				</select>
			</>
		)
	}
}