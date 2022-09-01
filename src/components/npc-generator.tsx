import React, { Component } from 'react';
import { AppFooter } from './app-footer';
import { AppHeader } from './app-header';
import { NpcCard } from './npc-card';
import { NpcOptions } from './npc-options';

export class NpcGenerator extends Component<any, any> {

	constructor(props: any) {
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