import React, { Component } from 'react';

export class AppFooter extends Component<any, any> {
	constructor(props: any) {
		super(props);
	}
	render() {
		return (
			<footer className="app-footer">
				<div className="app-footer__content">
					<p>Created by <a href="https://www.joshdelgado.com" rel="nofollow">Josh Delgado</a></p>
				</div>
			</footer>
		);
	}
}