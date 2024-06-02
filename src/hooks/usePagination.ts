import { useState } from "react";

type DataType<T> = Array<T> | undefined;

type PaginationType<T> = {
	dataToDisplay: DataType<T>;
	currentPage: number;
	totalDisplayedData: number | undefined;
	nextPage: () => void;
	previousPage: () => void;
	resetPagination: () => void;
};

export const usePagination = <T>(data: DataType<T>): PaginationType<T> => {
	const [currentPage, setCurrentPage] = useState(1);

	const nextPage = () => {
		setCurrentPage((prevCurrentPageValue) => prevCurrentPageValue + 1);
	};
	const previousPage = () => {
		if (currentPage === 1) return;
		setCurrentPage((prevPreviousPageValue) => prevPreviousPageValue - 1);
	};

	const resetPagination = () => {
		setCurrentPage(1);
	};

	return {
		dataToDisplay: data,
		currentPage,
		totalDisplayedData: data?.length,
		nextPage,
		previousPage,
		resetPagination,
	};
};
