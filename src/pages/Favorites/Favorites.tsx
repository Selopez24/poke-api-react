import { useCallback, useState } from "react";
import PokemonListItem from "../../components/PokemonListItem/PokemonListItem";
import styles from "./Favorites.module.css";
import { PokemonDetails } from "../../types/Pokemon";
import PokemonListContainer from "../../components/PokemonListContainer/PokemonListContainer";
import { useNavigate } from "react-router-dom";

const getInitialState = (): PokemonDetails[] => {
	const favs = JSON.parse(localStorage.getItem("pokemonFavs") ?? "null") ?? {};
	return Object.values(favs);
};

const Favorites = () => {
	const [favs, setFavs] = useState<PokemonDetails[]>(() => getInitialState());

	const navigate = useNavigate();

	const handleFavChange = useCallback(() => {
		const favs: PokemonDetails[] =
			JSON.parse(localStorage.getItem("pokemonFavs") ?? "null") ?? {};

		setFavs(Object.values(favs));
	}, []);

	const handleSelectOption = (value: { label: string; value: string }) => {
		navigate(`/details/${value.label}`);
	};

	return (
		<div className={styles.favoritesContainer}>
			<PokemonListContainer>
				{favs?.map((pokemon) => (
					<PokemonListItem
						onSelect={handleSelectOption}
						key={pokemon.name}
						pokemon={pokemon}
						onFavChange={handleFavChange}
					/>
				))}
			</PokemonListContainer>
		</div>
	);
};

export default Favorites;
