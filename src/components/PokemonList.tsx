import { type Pokemon } from '../features/properties/model/types';

export default function PokemonList({
	pokemonList,
}: {
	pokemonList: Pokemon[];
}) {
	return (
		<div>
			<div>PokemonList</div>
			{pokemonList.map((pokemon, index) => (
				<div key={index}>
					<h2>{pokemon.name}</h2>
				</div>
			))}
		</div>
	);
}
