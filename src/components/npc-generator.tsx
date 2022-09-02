import React, { Component } from 'react';
import { NpcCard } from './npc-card';
import { NpcOptions } from './npc-options';

export class NpcGenerator extends Component<any, any> {

	constructor(props: any) {
		super(props);

		this.state = {
			userSelections: {
				level: '',
				gender: '',
				race: '',
				class: '',
				alignment: '',
			},
			npc: {
				name: null,
				race: null,
				class: null,
				gender: null,
				abilityScores: {
					strength: { score: null, modifier: null },
					dexterity: { score: null, modifier: null },
					intelligence: { score: null, modifier: null },
					wisdom: { score: null, modifier: null },
					constitution: { score: null, modifier: null },
					charisma: { score: null, modifier: null },
				},
				loaded: false
			}
		};
	}

	updateOptions = (userSelections: any) => {
		this.setState({ userSelections: userSelections });
	}

	render() {
		return (
			<main className="app__content" >
				<NpcOptions callback={this.updateOptions}></NpcOptions>
				<NpcCard userSelections={this.state.userSelections}></NpcCard>
			</main>
		);
	}
}