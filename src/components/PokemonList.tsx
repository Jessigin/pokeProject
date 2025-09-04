import { useNavigate } from 'react-router-dom';
import { type Pokemon } from '../features/properties/model/types';

export default function PokemonList({
	pokemonList,
}: {
	pokemonList: Pokemon[];
}) {
	console.log(pokemonList);

	const navigate = useNavigate();

	const handleCardClick = (name: string) => {
		navigate(`/pokemon/${name}`);
	};

	return (
		<div>
			{pokemonList.map((pokemon, index) => (
				<div key={index} onClick={() => handleCardClick(pokemon.name)}>
					<h2>{pokemon.name}</h2>
				</div>
			))}
		</div>
	);
}
