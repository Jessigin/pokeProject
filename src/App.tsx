import { useEffect, useState } from 'react';
import './App.css';

import PokemonCard from './components/PokemonCard';
import PokemonList from './components/PokemonList';
import type { Pokemon } from './features/properties/model/types';
import { PokemonApi } from './services/pokemonApi';

function App() {
	const [pokemon, setPokemon] = useState<Pokemon | null>(null);
	const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const dataPokemonList = await PokemonApi.getPokemonList();

			const dataPokemon = await PokemonApi.searchPokemon('pikachu');

			// const data = await PokemonApi.getPokemonSpecies(25);

			setPokemon(dataPokemon);
			setPokemonList(dataPokemonList);
		};

		fetchData();
	}, []);

	return (
		<>
			<PokemonCard pokemon={pokemon} />
			<PokemonList pokemonList={pokemonList} />
		</>
	);
}

export default App;
