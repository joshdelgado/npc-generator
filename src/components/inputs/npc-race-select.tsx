import React, { Component } from 'react';
import { races } from '../../consts/races';

export class NpcRaceSelect extends Component<any, any> {
	state = { race: '' };

	handleChange = (event: any) => {
		this.setState({ race: event.target.value }, () => {
			this.props.callback(this.state);
		});
	}

	render() {
		return (
			<>
				<label htmlFor="race">Race</label>
				<select id="race" onChange={this.handleChange} value={this.state.race}>
					<option value=''>Random</option>
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