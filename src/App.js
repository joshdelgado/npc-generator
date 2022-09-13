import './App.scss';
import { AppHeader } from './components/layout/app-header';
import { AppFooter } from './components/layout/app-footer';
import { NpcGenerator } from './components/npc-generator';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
	gtmId: 'G-L9ND5XE2K1'
}

TagManager.initialize(tagManagerArgs);

function App() {
	return (
		<div className="app">
			<AppHeader></AppHeader>
			<NpcGenerator></NpcGenerator>
			<AppFooter> </AppFooter>
		</div >
	);
}

export default App;
