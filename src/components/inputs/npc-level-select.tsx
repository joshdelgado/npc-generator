import React, { Component } from 'react';

export class NpcLevelSelect extends Component<any, any> {

	handleChange = (event: any) => {
		this.props.callback({ level: event.target.value })
	}

	render() {
		return (
			<>
				<label htmlFor="level">Level</label>
				<select id="level" onChange={this.handleChange} value={this.props.value}>
					<option key='blank' value=''>Random</option>
					{[...Array(20)].map((a, index) => <option key={Math.random() + index} value={index + 1}>{index + 1}</option>)}
				</select>
			</>
		)
	}
}