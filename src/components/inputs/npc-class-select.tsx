import React, { Component } from 'react';
import { classes } from '../../consts/consts';
import { capitalize } from '../../utility/functions';

export class NpcClassSelect extends Component<any, any> {
	state = { class: '' };

	handleChange = (event: any) => {
		this.setState({ class: event.target.value }, () => {
			this.props.callback(this.state);
		});
	}

	render() {
		return (
			<>
				<label htmlFor="class">Class</label>
				<select id="class" onChange={this.handleChange} value={this.state.class}>
					<option key='blank' value=''>Random</option>
					{classes.map((c) => (
						<option key={c.toLowerCase()} value={c.toLowerCase()}>
							{capitalize(c)}
						</option>
					))}
				</select>
			</>
		)
	}
}