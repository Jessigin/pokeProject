import './App.css';

import { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const PokemonPage = lazy(() => import('./pages/PokemonPage'));
const PokemonListPage = lazy(() => import('./pages/PokemonListPage'));

function App() {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<PokemonListPage />} />
					<Route path="/pokemon/:name" element={<PokemonPage />} />

					<Route path="*" element={<PokemonListPage />} />
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
