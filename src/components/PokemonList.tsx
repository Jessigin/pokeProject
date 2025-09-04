import { useNavigate } from 'react-router-dom';
import { type Pokemon } from '../features/properties/model/types';
import './PokemonList.css';

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

		<div className="pokemon-list-container">
			{pokemonList.map((pokemon, index) => (
				<div className="pokemon-list" key={index} onClick={() => handleCardClick(pokemon.name)}>
					<h2>{pokemon.name}</h2>
				</div>
			))}
		</div>
		
	);
}
