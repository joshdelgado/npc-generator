import React, { Component } from 'react';

export class PreFooter extends Component<any, any> {

	render() {
		return (
			<div className="pre-footer">
				<div className="pre-footer__content">
					<ul>
						<li className="pre-footer__cta">Find this useful? Buy me a drink! <span>(please and thank you)</span></li>
						<li className="pre-footer__wallets">
							<img src={`${process.env.PUBLIC_URL}/img/btc-wallet.png`} />
							<img src={`${process.env.PUBLIC_URL}/img/eth-wallet.png`} />
						</li>
						<li className="pre-footer__cta">Check out my <a href="https://www.youtube.com/thejunkdrawershow">D&D Campaign</a> <span>🤙</span></li>
					</ul>
				</div>
			</div>
		);
	}
}