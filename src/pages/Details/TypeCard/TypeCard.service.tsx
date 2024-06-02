import { ReactElement } from "react";
import {
	BugTypeIcon,
	DarkTypeIcon,
	DragonTypeIcon,
	ElectricTypeIcon,
	FairyTypeIcon,
	FightingTypeIcon,
	FireTypeIcon,
	FlyingTypeIcon,
	GhostTypeIcon,
	GrassTypeIcon,
	GroundTypeIcon,
	IceTypeIcon,
	NormalTypeIcon,
	PoisonTypeIcon,
	PsychicTypeIcon,
	RockTypeIcon,
	SteelTypeIcon,
	WaterTypeIcon,
} from "../../../assets/icons/Icons";

export type PokemonTypesIcons = {
	fire: ReactElement;
	water: ReactElement;
	bug: ReactElement;
	dark: ReactElement;
	dragon: ReactElement;
	electric: ReactElement;
	fairy: ReactElement;
	fighting: ReactElement;
	flying: ReactElement;
	ghost: ReactElement;
	grass: ReactElement;
	ground: ReactElement;
	ice: ReactElement;
	normal: ReactElement;
	poison: ReactElement;
	psychic: ReactElement;
	rock: ReactElement;
	steel: ReactElement;
};

export type PokemonTypesKeys = keyof PokemonTypesIcons;

export const TYPE_ICONS: PokemonTypesIcons = {
	fire: <FireTypeIcon />,
	water: <WaterTypeIcon />,
	bug: <BugTypeIcon />,
	dark: <DarkTypeIcon />,
	dragon: <DragonTypeIcon />,
	electric: <ElectricTypeIcon />,
	fairy: <FairyTypeIcon />,
	fighting: <FightingTypeIcon />,
	flying: <FlyingTypeIcon />,
	ghost: <GhostTypeIcon />,
	grass: <GrassTypeIcon />,
	ground: <GroundTypeIcon />,
	ice: <IceTypeIcon />,
	normal: <NormalTypeIcon />,
	poison: <PoisonTypeIcon />,
	psychic: <PsychicTypeIcon />,
	rock: <RockTypeIcon />,
	steel: <SteelTypeIcon />,
};
