import { Link } from 'react-router-dom';
import { type Pokemon } from '../features/properties/model/types';
import './PokemonCard.css'; // Import CSS file

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  console.log(pokemon);

  if (!pokemon) return <div className="pokemon-card">No Pokemon found</div>;

  return (
    <div className="pokemon-card">
      {pokemon ? (
        <div className="pokemon-card-content">
          <h2 className="pokemon-card-title">{pokemon.name}</h2>
          <img
            className="pokemon-card-image"
            src={pokemon.sprites.front_default ?? undefined}
            alt={pokemon.name}
          />
          <p>ID: {pokemon.id}</p>
          <p>Insignias:</p>
          <p>Altura: {pokemon.height}</p>
          <p>Experiencia: {pokemon.base_experience}</p>
          <p>
            Habilidades:{' '}
            {pokemon.abilities
              .map((ability) => ability.ability.name)
              .join(', ')}
          </p>

          <Link className="pokemon-card-link" to="/">
            Back to Home
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
