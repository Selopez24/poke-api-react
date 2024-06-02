import React, { ReactNode } from "react";
import styles from "./PokemonListContainer.module.css";

type Props = {
	children: ReactNode;
};

function PokemonListContainer({ children }: Props) {
	return <div className={styles.pokemonList}>{children}</div>;
}

export default PokemonListContainer;
