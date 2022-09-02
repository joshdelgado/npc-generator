import React, { Component } from 'react';
import { alignments } from '../../consts/alignments';

export class NpcAlignmentSelect extends Component<any, any> {
	state = { alignment: '' };

	handleChange = (event: any) => {
		this.setState({ alignment: event.target.value }, () => {
			this.props.callback(this.state);
		});
	}

	render() {
		return (
			<>
				<label htmlFor="alignment">Alignment</label>
				<select id="alignment" onChange={this.handleChange} value={this.state.alignment}>
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