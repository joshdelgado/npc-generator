import React, { Component } from 'react';

export class AppFooter extends Component<any, any> {

	render() {
		return (
			<footer className="app-footer">
				<ul className="app-footer__content">
					<li className="app-footer__spacer">shhh I'm hiding</li>
					<li className="app-footer__version"><a href="https://github.com/joshdelgado/npc-generator">Roll4d6 v0.3.0</a></li>
					<li className="app-footer__credit">Created by <a href="https://www.joshdelgado.com" rel="nofollow">Josh Delgado</a></li>
				</ul>
			</footer>
		);
	}
}