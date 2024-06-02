import {
	ArrowBackIcon,
	ArrowRightIcon,
	DoubleArrowIcon,
} from "../../assets/icons/Icons";
import styles from "./PaginationFooter.module.css";

type Props = {
	totalDisplayed: number | undefined;
	previousPage: () => void;
	nextPage: () => void;
	currentPage: number;
	resetPagination: () => void;
};

const PaginationFooter = ({
	totalDisplayed,
	previousPage,
	nextPage,
	currentPage,
	resetPagination,
}: Props) => {
	return (
		<div className={styles.footerContainer}>
			<button onClick={resetPagination}>
				<DoubleArrowIcon />
				<span>Reset</span>
			</button>
			<button onClick={previousPage}>
				<ArrowBackIcon></ArrowBackIcon>
			</button>
			<span className={styles.currentPage}>{currentPage}</span>
			<button data-testid="next-page-button" onClick={nextPage}>
				<ArrowRightIcon />
			</button>
			<span className={styles.displaying}>Displaying {totalDisplayed}</span>
		</div>
	);
};

export default PaginationFooter;
