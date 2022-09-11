import React, { Component } from 'react';

export class NpcPlotHookCheckbox extends Component<any, any> {

	handleChange = (event: any) => {
		this.props.callback({ plotHook: event.target.checked });
	}

	render() {
		return (
			<label className="checkbox" htmlFor="plotHook">
				<input id="plotHook" type="checkbox" className="checkbox__hidden"
					checked={this.props.value}
					onChange={this.handleChange} />
				<span className="checkbox__checkmark"></span>
				<span className="checkbox__label">Generate a plot hook</span>
			</label>
		)
	}
}