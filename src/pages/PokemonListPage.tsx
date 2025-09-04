import { useEffect, useState } from 'react';

import LoadingSpinner from '../components/LoadingSpinner';
import PokemonList from '../components/PokemonList';
import type { Pokemon } from '../features/properties/model/types';
import { PokemonApi } from '../services/pokemonApi';

export default function PokemonListPage() {
	const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const dataPokemonList = await PokemonApi.getPokemonList();

			setPokemonList(dataPokemonList);
		};

		fetchData();
	}, []);

	return (
		<div>
			{pokemonList.length === 0 ? (
				<LoadingSpinner />
			) : (
				<>
					<h1>Pokemon List</h1>

					<PokemonList pokemonList={pokemonList} />
				</>
			)}
		</div>
	);
}
