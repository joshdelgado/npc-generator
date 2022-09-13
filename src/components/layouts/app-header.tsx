import React, { Component } from 'react';
import { Logo } from '../elements/logo';

export class AppHeader extends Component<any, any> {

	render() {
		return (
			<header className="app-header" style={{ backgroundImage: "url(img/grey-sandbag.webp)" }}>
				<div className="app-header__content">
					<Logo></Logo>
					<span className="app-header__title">Roll4d6</span>
				</div>
			</header>
		);
	}
}