import React, { Component } from 'react';
import { races } from '../../consts/races';

export class NpcRaceSelect extends Component<any, any> {

	handleChange = (event: any) => {
		this.props.callback({ race: event.target.value });
	}

	render() {
		return (
			<>
				<label htmlFor="race">Race</label>
				<select id="race" onChange={this.handleChange} value={this.props.value}>
					<option key='random' value=''>Random</option>
					{Array.from(races.values()).map((r) => (
						<option key={r.name} value={r.name.toLowerCase()}>
							{r.name}
						</option>
					))}
				</select>
			</>
		)
	}
}