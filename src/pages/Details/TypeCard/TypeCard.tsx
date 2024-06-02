import styles from "./TypeCard.module.css";
import { PokemonTypesKeys, TYPE_ICONS } from "./TypeCard.service";

type Props = { type: string };

const TypeCard = ({ type }: Props) => {
	return (
		<div className={styles.typeCard}>
			<span>{TYPE_ICONS[type as PokemonTypesKeys]}</span>
			<span>{type}</span>
		</div>
	);
};

export default TypeCard;
