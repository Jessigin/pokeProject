import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';
import type { Pokemon } from '../features/properties/model/types';
import { PokemonApi } from '../services/pokemonApi';

export default function PokemonPage() {
	const { name } = useParams<{ name: string }>();

	const [pokemon, setPokemon] = useState<Pokemon | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const dataPokemonList = await PokemonApi.searchPokemon(
				name as string
			);

			setPokemon(dataPokemonList);
		};

		fetchData();
	}, [name]);

	return (
		<div>
			{pokemon ? <PokemonCard pokemon={pokemon} /> : <p>Loading...</p>}
		</div>
	);
}
