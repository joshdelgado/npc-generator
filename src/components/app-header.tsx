import React, { Component } from 'react';

export class AppHeader extends Component<any, any> {

	render() {
		return (
			<header className="app-header" style={{ backgroundImage: "url(img/grey-sandbag.webp)" }}>
				<div className="app-header__content">
					<div className="logo">
						<div className="logo__die"></div>
						<div className="logo__die"></div>
						<div className="logo__die"></div>
						<div className="logo__die"></div>
					</div>
					<h2 className="app-header__title">Roll4d6</h2>
				</div>
			</header>
		);
	}
}