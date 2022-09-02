import './App.scss';
import { AppHeader } from './components/app-header';
import { AppFooter } from './components/app-footer';
import { NpcGenerator } from './components/npc-generator';


function App() {
	return (
		<div className="app">
			<AppHeader></AppHeader>
			<NpcGenerator></NpcGenerator>
			<AppFooter> </AppFooter>
		</div>
	);
}

export default App;
