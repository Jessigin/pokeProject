import { useEffect, useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import { PokemonApi } from './services/pokemonApi';

function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			// const data = await PokemonApi.getPokemonList();

			// const data = await PokemonApi.searchPokemon('pikachu');

			const data = await PokemonApi.getPokemonSpecies(25);

			console.log(data);
		};

		fetchData();
	}, []);

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
