import { type Pokemon } from '../features/properties/model/types';

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
	console.log(pokemon);

	if (!pokemon) return <div>No Pokemon found</div>;

	return (
		<div>
			<div>PokemonCard</div>
			<h2>{pokemon.name}</h2>
		</div>
	);
}
