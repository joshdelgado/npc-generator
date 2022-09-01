import React, { Component } from 'react';
import { races } from '../consts/races';

export class NpcRaceSelect extends Component<any, any> {
	state = { value: '' };

	handleChange = (event: any) => {
		this.setState({ value: event.target.value })
	}

	render() {

		return (
			<>
				<label htmlFor="race">Race</label>
				<select id="race" onChange={this.handleChange} value={this.state.value}>
					<option value=''>Random</option>
					{Array.from(races.values()).map(r => (
						<option key={r.name} value={r.name}>
							{r.name}
						</option>
					))}
				</select>
			</>
		)
	}
}