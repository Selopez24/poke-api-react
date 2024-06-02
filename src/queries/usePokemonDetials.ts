import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PokemonDetails } from "../types/Pokemon";

export const usePokemonDetails = (id: string | undefined) => {
	return useQuery({
		queryKey: ["pokemonDetails", id],
		queryFn: async () => {
			const response = await axios.get<PokemonDetails>(
				`https://pokeapi.co/api/v2/pokemon/${id}`
			);
			return response.data;
		},
	});
};
