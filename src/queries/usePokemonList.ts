import { useQuery, useQueryClient } from "@tanstack/react-query";
import { PokemonDetails, PokemonListItem } from "../types/Pokemon";
import axios from "axios";

type PokemonListResponse = {
	results: PokemonListItem[];
};

const fetchPokemonListDetails = (item: PokemonListItem) => {
	return axios.get<PokemonDetails>(item.url);
};

export const usePokemonList = (offset?: string) => {
	const queryClient = useQueryClient();

	return useQuery({
		queryKey: ["pokemonList"],
		queryFn: async (): Promise<PokemonDetails[]> => {
			const response = await axios<PokemonListResponse>(
				`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset ?? "0"}`
			);

			const pokemonList = response.data.results;

			//needed to get more info on each Pokemon since API just responds with name
			const details = Promise.all(
				pokemonList.map((pokemon) =>
					queryClient.fetchQuery({
						queryKey: ["pokemonDetails", pokemon.name],
						queryFn: async () => {
							const response = await fetchPokemonListDetails(pokemon);
							return response.data;
						},
					})
				)
			);

			return details;
		},
	});
};
