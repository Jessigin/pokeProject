import './App.css';

import { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// import PokemonCard from './components/PokemonCard';
// import PokemonList from './components/PokemonList';
// import type { Pokemon } from './features/properties/model/types';
// import { PokemonApi } from './services/pokemonApi';

const PokemonPage = lazy(() => import('./pages/PokemonPage'));
const PokemonListPage = lazy(() => import('./pages/PokemonListPage'));

function App() {
	// const [pokemon, setPokemon] = useState<Pokemon | null>(null);
	// const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const dataPokemonList = await PokemonApi.getPokemonList();

	// 		const dataPokemon = await PokemonApi.searchPokemon('pikachu');

	// 		// const data = await PokemonApi.getPokemonSpecies(25);

	// 		setPokemon(dataPokemon);
	// 		setPokemonList(dataPokemonList);
	// 	};

	// 	fetchData();
	// }, []);

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
