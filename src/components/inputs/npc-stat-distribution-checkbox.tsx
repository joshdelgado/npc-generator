import React, { Component } from 'react';

export class NpcStatDistributionCheckbox extends Component<any, any> {

	handleChange = (event: any) => {
		this.props.callback({ statAlgo: event.target.checked });
	}

	render() {
		return (
			<>
				<label className="checkbox" htmlFor="statAlgo">
					<input id="statAlgo" type="checkbox" className="checkbox__hidden"
						checked={this.props.value}
						onChange={this.handleChange} />
					<span className="checkbox__checkmark"></span>
					<span className="checkbox__label">Distribute points smartly</span>
				</label>
			</>
		)
	}
}