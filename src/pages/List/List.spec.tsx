import { describe, expect, test, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import List from "./List";
import userEvent from "@testing-library/user-event";

const queryClient = new QueryClient();

const renderListComponent = () => {
	return render(
		<QueryClientProvider client={queryClient}>
			<MemoryRouter>
				<List />
			</MemoryRouter>
		</QueryClientProvider>
	);
};

const mockedUseNavigate = vi.fn();

describe("Pokemon List", () => {
	renderListComponent();

	const user = userEvent.setup();
	const pokemonNameInFirstPage = "bulbasaur";
	const pokemonNameInSecondPage = "ekans";

	//TODO; remove timeout when replacing with msw since there will be no delay in response
	test("Renders pokemon list", async () => {
		await waitFor(
			() => {
				expect(screen.getByText(pokemonNameInFirstPage)).toBeTruthy();
			},
			{ timeout: 10000 }
		);
	});

	test("Renders details when a suggestion from search bar is selected", async () => {
		vi.mock("react-router-dom", async () => {
			const mod = await vi.importActual<typeof import("react-router-dom")>(
				"react-router-dom"
			);
			return {
				...mod,
				useNavigate: () => mockedUseNavigate,
			};
		});

		await waitFor(() => {
			expect(screen.getByText(pokemonNameInFirstPage)).toBeTruthy();
		});

		const searchInput = screen.getByRole("textbox");

		await user.type(searchInput, pokemonNameInFirstPage);

		const suggestionItem = screen.getByText(pokemonNameInFirstPage, {
			selector: "li",
		});

		await waitFor(() => {
			expect(suggestionItem).toBeTruthy();
		});

		await user.click(suggestionItem);

		await waitFor(() => {
			expect(mockedUseNavigate).toBeCalledTimes(1);
		});
	});

	test("Renders next page", async () => {
		await waitFor(() => {
			expect(screen.getByTestId(pokemonNameInFirstPage)).toBeTruthy();
		});

		const nextButton = screen.getByTestId("next-page-button");

		await user.click(nextButton);

		waitFor(() => {
			expect(screen.getByText(pokemonNameInSecondPage)).toBeTruthy();
		});
	});
});
