export type PokemonListItem = {
	name: string;
	url: string;
};

export type PokemonStats = {
	base_stat: number;
	stat: {
		name: string;
	};
};

export type PokemonDetails = {
	id: string;
	name: string;
	sprites: {
		front_default: string;
	};
	types: [
		{
			type: {
				name: string;
			};
		}
	];
	stats: PokemonStats[];
	weight: number;
	height: number;
};
