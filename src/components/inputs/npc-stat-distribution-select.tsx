import React, { Component } from 'react';

export class NpcStatDistributionSelect extends Component<any, any> {
	state = { statAlgo: '' };

	handleChange = (event: any) => {
		this.setState({ statAlgo: event.target.value }, () => {
			this.props.callback(this.state);
		});
	}

	render() {
		return (
			<>
				<label htmlFor="statAlgo">Stat Algorithm</label>
				<select id="statAlgo" onChange={this.handleChange} value={this.state.statAlgo}>
					<option value=''>Random</option>
					<option value='minmax'>MinMax</option>
				</select>
			</>
		)
	}
}