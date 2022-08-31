import React, { Component } from 'react';

export class NpcRaceSelect extends Component<any, any> {
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
			<>
				<label htmlFor="race">Race</label>
				<select id="race" onChange={this.handleChange} value={value}>
					{options.map(item => (
						<option key={item.value} value={item.value}>
							{item.name}
						</option>
					))}
				</select>
			</>
		)
	}
}