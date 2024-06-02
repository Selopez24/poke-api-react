import { useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { PokemonDetails } from "../../types/Pokemon";
import { usePokemonDetails } from "../../queries/usePokemonDetials";
import LoadingSpinner from "../../components/LoadingSpinner";
import styles from "./Details.module.css";
import TypeCard from "./TypeCard";
import {
	HeartEmptyIcon,
	HeartFillIcon,
	HeightIcon,
	WeightIcon,
} from "../../assets/icons/Icons";
import Stats from "./Stats";
import { useFav } from "../../hooks/useFav";

const Details = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const pokemon = queryClient.getQueryData<PokemonDetails>([
		"pokemonDetails",
		id,
	]);
	const { data, isLoading } = usePokemonDetails(id);
	const pokemonDetails = pokemon ?? data;
	const { isFaved, handleFav } = useFav(pokemonDetails);

	if (!pokemonDetails || isLoading) {
		return <LoadingSpinner />;
	}

	return (
		<div className={styles.detailsContainer}>
			<button className={styles.backButton} onClick={() => navigate(-1)}>
				Back
			</button>
			<div className={styles.detailsCard}>
				<h1 className={styles.pokemonName}>{pokemonDetails.name}</h1>
				<div className={styles.basicInfoContainer}>
					<div className={styles.imageContainer}>
						<span className={styles.favIcon} onClick={handleFav}>
							{isFaved ? <HeartFillIcon /> : <HeartEmptyIcon />}
						</span>
						<img
							src={pokemonDetails.sprites.front_default}
							alt={pokemonDetails.name}
						/>
					</div>
					<div className={styles.measuresAndTypeContainer}>
						<div className={styles.measuresContainer}>
							<div>
								<h2>Height</h2>
								<div>
									<HeightIcon />
									<span>{pokemonDetails.height / 10} m</span>
								</div>
							</div>
							<div>
								<h2>Weight</h2>
								<div>
									<WeightIcon />
									<span>{pokemonDetails.weight / 10} kg</span>
								</div>
							</div>
						</div>
						<div className={styles.typeContainer}>
							<h2>Type</h2>
							<div>
								{pokemonDetails.types.map(({ type }) => (
									<TypeCard key={type.name} type={type.name} />
								))}
							</div>
						</div>
					</div>
				</div>
				<div className={styles.statsContainer}>
					<h2>Stats</h2>
					<Stats stats={pokemonDetails.stats} />
				</div>
			</div>
		</div>
	);
};

export default Details;
