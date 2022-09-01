import React, { Component } from 'react';
// @ts-ignore
import { AppFooter } from './app-footer.tsx';
// @ts-ignore
import { AppHeader } from './app-header.tsx';
// @ts-ignore
import { NpcCard } from './npc-card.tsx';
// @ts-ignore
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