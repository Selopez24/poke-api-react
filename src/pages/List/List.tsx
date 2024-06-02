import { useEffect, useMemo, useState } from "react";
import { usePokemonList } from "../../queries/usePokemonList";
import PaginationFooter from "../../components/PaginationFooter";
import { usePagination } from "../../hooks/usePagination";
import PokemonListItem from "../../components/PokemonListItem/PokemonListItem";
import styles from "./List.module.css";
import PokemonListContainer from "../../components/PokemonListContainer/PokemonListContainer";
import AutoCompleteInput from "../../components/AutoCompleteInput";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

const List = () => {
	const [search, setSearch] = useState("");
	const [paginationOffset, setPaginationOffset] = useState("0");

	const navigate = useNavigate();

	const {
		data: pokemonList,
		isLoading,
		refetch,
	} = usePokemonList(paginationOffset);

	const pokemonOptions = useMemo(
		() =>
			pokemonList?.map((pokemon) => ({
				label: pokemon.name,
				value: pokemon.id,
			})),
		[pokemonList]
	);

	const {
		currentPage,
		dataToDisplay,
		nextPage,
		previousPage,
		resetPagination,
		totalDisplayedData,
	} = usePagination(pokemonList);

	const handleSearch = (value: string) => {
		setSearch(value);
	};

	const handleSelectOption = (value: { label: string; value: string }) => {
		navigate(`/details/${value.label}`);
	};

	useEffect(() => {
		setPaginationOffset(String(currentPage * 20 - 20));
	}, [currentPage, refetch]);

	useEffect(() => {
		refetch();
	}, [refetch, paginationOffset]);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	return (
		<div className={styles.listContainer}>
			<div className={styles.autocompleteContainer}>
				<AutoCompleteInput
					placeholder="Search pokémon..."
					options={pokemonOptions}
					onSelectOption={handleSelectOption}
					onChange={handleSearch}
					value={search}
				/>
			</div>
			<PokemonListContainer>
				{dataToDisplay?.map((pokemon) => (
					<PokemonListItem
						key={pokemon.name}
						pokemon={pokemon}
						onSelect={handleSelectOption}
					/>
				))}
			</PokemonListContainer>
			<PaginationFooter
				resetPagination={resetPagination}
				totalDisplayed={totalDisplayedData}
				previousPage={previousPage}
				nextPage={nextPage}
				currentPage={currentPage}
			/>
		</div>
	);
};

export default List;
