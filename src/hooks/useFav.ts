import { useEffect, useState } from "react";
import { MouseEvent } from "react";
import { PokemonDetails } from "../types/Pokemon";

type FavedType = {
	isFaved: boolean;
	handleFav: (e: MouseEvent<HTMLElement>) => void;
};

export const useFav = (
	pokemon: PokemonDetails | undefined,
	onFavChange?: () => void
): FavedType => {
	const [isFaved, setIsFaved] = useState(false);

	const handleFav = (e: MouseEvent<HTMLElement>) => {
		if (!pokemon) return;
		e.stopPropagation();
		setIsFaved((prev) => !prev);

		const favs =
			JSON.parse(localStorage.getItem("pokemonFavs") ?? "null") ?? {};

		if (!isFaved) {
			localStorage.setItem(
				"pokemonFavs",
				JSON.stringify({ ...favs, [pokemon.id]: pokemon })
			);
		}

		if (isFaved) {
			delete favs[pokemon.id];
			localStorage.setItem("pokemonFavs", JSON.stringify({ ...favs }));
			if (onFavChange) onFavChange();
		}
	};

	useEffect(() => {
		if (pokemon) {
			const favs =
				JSON.parse(localStorage.getItem("pokemonFavs") ?? "null") ?? {};
			const isFaved = favs[pokemon.id];
			setIsFaved(isFaved);
		}
	}, [pokemon]);

	return {
		isFaved,
		handleFav,
	};
};
