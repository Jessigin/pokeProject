import { Link } from 'react-router-dom';
import { type Pokemon } from '../features/properties/model/types';

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
	console.log(pokemon);

	if (!pokemon) return <div>No Pokemon found</div>;

	return (
		<div>
			{pokemon ? (
				<div>
					<h2>{pokemon.name}</h2>
					<img
						src={pokemon.sprites.front_default ?? undefined}
						alt={pokemon.name}
					/>
					<p>Height: {pokemon.height}</p>
					<Link to="/">Back to Home</Link>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}
