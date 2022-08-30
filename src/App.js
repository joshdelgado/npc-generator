import './App.scss';
import { NpcCard } from './components/npc-card.tsx';
import { AppHeader } from './components/app-header.tsx';
import { AppFooter } from './components/app-footer.tsx';

function App() {
	return (
		<div className="app">
			<AppHeader></AppHeader>
			<main className="app__content">
				<NpcCard></NpcCard>
			</main>
			<AppFooter></AppFooter>
		</div>
	);
}

export default App;
