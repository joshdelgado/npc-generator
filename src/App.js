import './App.scss';
import { NpcCard } from './components/npc-card/npc-card.tsx';
import { AppHeader } from './components/app-header/app-header.tsx';

function App() {
	return (
		<div className="app">
			<AppHeader></AppHeader>
			<div className="app__content">
				<NpcCard></NpcCard>
			</div>
		</div>
	);
}

export default App;
