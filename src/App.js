import './App.scss';
import { NpcCard } from './components/npc-card.tsx';
import { AppHeader } from './components/app-header.tsx';
import { AppFooter } from './components/app-footer.tsx';
import { NpcOptions } from './components/npc-options.tsx';

function App() {
	return (
		<div className="app">
			<AppHeader></AppHeader>
			<main className="app__content">
				<NpcOptions></NpcOptions>
				<NpcCard></NpcCard>
			</main>
			<AppFooter></AppFooter>
		</div>
	);
}

export default App;
