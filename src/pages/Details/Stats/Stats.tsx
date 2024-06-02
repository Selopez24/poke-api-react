import React from "react";
import { PokemonStats } from "../../../types/Pokemon";
import styles from "./Stats.module.css";

type Props = {
	stats: PokemonStats[];
};

const normalizeStat = (stat: number) => {
	return (stat / 255) * 100;
};

type StatLabel = {
	hp: string;
	attack: string;
	defense: string;
	"special-attack": string;
	"special-defense": string;
	speed: string;
};

type StatLabelKey = keyof StatLabel;

const StatLabelValue: StatLabel = {
	hp: "HP",
	attack: "Attack",
	defense: "Defense",
	"special-attack": "Sp. Attack",
	"special-defense": "Sp. Defense",
	speed: "Speed",
};

const Stats = ({ stats }: Props) => {
	return (
		<div className={styles.container}>
			{stats.map((stat) => (
				<div key={stat.stat.name} className={styles.statContainer}>
					<div className={`${styles.progress}`}>
						<div
							className={styles.progressBar}
							style={
								{
									"--progress-width": `${normalizeStat(stat.base_stat)}%`,
								} as React.CSSProperties
							}
						></div>
					</div>
					<span>{StatLabelValue[stat.stat.name as StatLabelKey]}</span>
				</div>
			))}
		</div>
	);
};

export default Stats;
