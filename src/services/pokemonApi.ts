import { type Pokemon } from '../features/properties/model/types';
import { apiClient } from '../shared/api/client';

export class PokemonApi {
	static async getPokemonList(): Promise<Pokemon[]> {
		try {
			const response = await apiClient.get('/pokemon?limit=151&offset=0');

			return response.data.results;
		} catch (error) {
			console.error('Error fetching Pokemon:', error);
			throw error;
		}
	}

	static async searchPokemon(name: string): Promise<Pokemon> {
		try {
			const response = await apiClient.get(`/pokemon/${name}`);
			return response.data;
		} catch (error) {
			console.error('Error fetching Pokemon by name:', error);
			throw error;
		}
	}

	static async getPokemonSpecies(id: number): Promise<unknown[]> {
		try {
			const response = await apiClient.get(`/pokemon-species/${id}`);
			return response.data;
		} catch (error) {
			console.error('Error fetching Pokemon species by ID:', error);
			throw error;
		}
	}
}
