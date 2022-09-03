import React, { Component } from 'react';

export class NpcGenderSelect extends Component<any, any> {

	handleChange = (event: any) => {
		this.props.callback({ gender: event.target.value });
	}

	render() {
		return (
			<>
				<label htmlFor="gender">Gender</label>
				<select id="gender" onChange={this.handleChange} value={this.props.value}>
					<option key='blank' value=''>Random</option>
					<option key="male" value="male">Male</option>
					<option key="female" value="female">Female</option>
					<option key="none" value="none">None</option>
				</select>
			</>
		)
	}
}