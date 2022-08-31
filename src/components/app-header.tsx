import React, { Component } from 'react';

export class AppHeader extends Component<any, any> {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="app-header">
				<div className="app-header__content">
					<h2 className="app-header__title">Roll4d6</h2>
				</div>
			</header>
		);
	}
}