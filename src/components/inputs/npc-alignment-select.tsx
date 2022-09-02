import React, { Component } from 'react';
import { alignments } from '../../consts/alignments';

export class NpcAlignmentSelect extends Component<any, any> {

	handleChange = (event: any) => {
		this.props.callback({ alignment: event.target.value });
	}

	render() {
		return (
			<>
				<label htmlFor="alignment">Alignment</label>
				<select id="alignment" onChange={this.handleChange} value={this.props.value}>
					<option key='blank' value=''>Random</option>
					{Array.from(alignments.values()).map((a) => (
						<option key={a.alias} value={a.alias}>
							{a.name}
						</option>
					))}
				</select>
			</>
		)
	}
}