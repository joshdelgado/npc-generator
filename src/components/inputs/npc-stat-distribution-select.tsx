import React, { Component } from 'react';

export class NpcStatDistributionSelect extends Component<any, any> {

	handleChange = (event: any) => {
		this.props.callback({ statAlgo: event.target.value });
	}

	render() {
		return (
			<>
				<label htmlFor="statAlgo">Stat Algorithm</label>
				<select id="statAlgo" onChange={this.handleChange} value={this.props.value}>
					<option key="blank" value="">Random</option>
					<option key="minmax" value="minmax">MinMax</option>
				</select>
			</>
		)
	}
}