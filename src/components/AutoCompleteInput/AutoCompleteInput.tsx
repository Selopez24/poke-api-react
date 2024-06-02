import { ChangeEvent, useState } from "react";
import styles from "./AutoCompleteInput.module.css";
import { Option } from "../../types/Option";

type Props = {
	placeholder: string;
	options: Option[] | undefined;
	value: string;
	onChange: (value: string) => void;
	onSelectOption: (value: Option) => void;
};

const AutoCompleteInput = ({
	placeholder,
	options,
	value,
	onChange,
	onSelectOption,
}: Props) => {
	const [suggestions, setSuggestions] = useState(options);

	const handleGetSuggestions = (event: ChangeEvent<HTMLInputElement>) => {
		const searchValue = event.target.value;
		onChange(searchValue);

		const filteredOptions = searchValue
			? options?.filter((option) => option.label.includes(searchValue))
			: [];

		setSuggestions(filteredOptions);
	};

	return (
		<div className={styles.autocompleteContainer}>
			<input
				autoComplete="off"
				name="search"
				placeholder={placeholder}
				onChange={handleGetSuggestions}
				value={value}
			/>
			{value && (
				<ul>
					{suggestions?.map((suggestion) => (
						<li
							key={suggestion.value}
							onClick={() => onSelectOption(suggestion)}
						>
							{suggestion.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default AutoCompleteInput;
