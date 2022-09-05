import React, { Component } from 'react';
import { classes } from '../../consts/consts';
import { capitalize } from '../../utility/functions';

export class NpcClassSelect extends Component<any, any> {

	handleChange = (event: any) => {
		this.props.callback({ class: event.target.value });
	}

	render() {
		return (
			<>
				<label htmlFor="class">Class</label>
				<select id="class" onChange={this.handleChange} value={this.props.value}>
					<option key='blank' value=''>Random</option>
					{Array.from(classes.keys()).map((c) => (
						<option key={c.toLowerCase()} value={c.toLowerCase()}>
							{capitalize(c)}
						</option>
					))}
				</select>
			</>
		)
	}
}