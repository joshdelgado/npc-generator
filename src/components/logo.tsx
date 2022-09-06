import React, { Component } from "react";

export class Logo extends Component<any, any> {

	strings: string[] = ['one', 'two', 'three', 'four', 'five'];

	getRandomModClass = (): string => {
		return this.strings[Math.floor(Math.random() * this.strings.length)];
	}

	render() {
		return (
			<div className="logo">
				<Die></Die>
				<Die modClass={this.getRandomModClass()}></Die>
				<Die modClass={this.getRandomModClass()}></Die>
				<Die modClass={this.getRandomModClass()}></Die>
			</div>
		)
	}
}

function Die(props: any) {
	return (
		<div className={props.modClass ? "logo__die logo__die--" + props.modClass : 'logo__die'}>
			<div className="logo__die-inner">
				<span className="logo__dot"></span>
				<span className="logo__dot"></span>
				<span className="logo__dot"></span>
				<span className="logo__dot"></span>
				<span className="logo__dot"></span>
				<span className="logo__dot"></span>
			</div>
		</div>
	)
}