import React, { Component } from 'react';

export class NpcGenderSelect extends Component<any, any> {
	state = { gender: '' };

	handleChange = (event: any) => {
		this.setState({ gender: event.target.value }, () => {
			this.props.callback(this.state);
		});
	}

	render() {
		return (
			<>
				<label htmlFor="gender">Gender</label>
				<select id="gender" onChange={this.handleChange} value={this.state.gender}>
					<option value="">Random</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="other">Other</option>
				</select>
			</>
		)
	}
}