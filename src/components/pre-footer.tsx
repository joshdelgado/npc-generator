import React, { Component } from 'react';

export class PreFooter extends Component<any, any> {

	render() {
		return (
			<div className="pre-footer">
				<div className="pre-footer__content">
					<ul>
						<li>Send me bitcoin?</li>
						<li>Check out my <a href="https://www.youtube.com/thejunkdrawershow">D&D Campaign</a></li>
					</ul>
				</div>
			</div>
		);
	}
}