import { PokemonDetails } from "../../types/Pokemon";
import styles from "./PokemonListItem.module.css";
import { Option } from "../../types/Option";
import { useFav } from "../../hooks/useFav";
import {
	PokemonTypesKeys,
	TYPE_ICONS,
} from "../../pages/Details/TypeCard/TypeCard.service";
import React from "react";
import { HeartEmptyIcon, HeartFillIcon } from "../../assets/icons/Icons";

type Props = {
	pokemon: PokemonDetails;
	onFavChange?: () => void;
	onSelect: (value: Option) => void;
};

const PokemonListItem = ({ pokemon, onFavChange, onSelect }: Props) => {
	const { isFaved, handleFav } = useFav(pokemon, onFavChange);

	const handleSelect = () => {
		const value = { label: pokemon.name, value: pokemon.id };
		onSelect(value);
	};

	return (
		<div
			className={styles.pokemonCard}
			key={pokemon.name}
			onClick={handleSelect}
		>
			<div className={styles.cardHeader}>
				<span data-testid={pokemon.name}>{pokemon.name}</span>
			</div>
			<div className={styles.imageContainer}>
				<span className={styles.favIcon} onClick={handleFav}>
					{isFaved ? <HeartFillIcon /> : <HeartEmptyIcon />}
				</span>
				<img src={pokemon.sprites.front_default} alt={pokemon.name} />
			</div>
			<div className={styles.cardFooter}>
				<div className={styles.types}>
					{pokemon.types.map(({ type }) => (
						<React.Fragment key={type.name}>
							{TYPE_ICONS[type.name as PokemonTypesKeys]}
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	);
};

export default PokemonListItem;
