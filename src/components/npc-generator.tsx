import React, { Component } from 'react';
import { AppFooter } from './app-footer.tsx';
import { AppHeader } from './app-header.tsx';
import { NpcCard } from './npc-card.tsx';
import { NpcOptions } from './npc-options.tsx';

export class NpcGenerator extends Component<any, any> {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<AppHeader></AppHeader>
				<main className="app__content" >
					<NpcOptions></NpcOptions>
					<NpcCard> </NpcCard>
				</main>
				<AppFooter> </AppFooter>
			</>
		);
	}
}