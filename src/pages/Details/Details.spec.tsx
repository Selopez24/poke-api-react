import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, expect, test } from "vitest";
import { render, waitFor, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routesConfig } from "../../routes/routesConfig";

const queryClient = new QueryClient();

const pokemonName = "charmander";

const renderComponent = () => {
	const router = createMemoryRouter(routesConfig, {
		initialEntries: [`/details/${pokemonName}`],
	});

	return render(
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};

describe("Pokémon Details", () => {
	renderComponent();

	test("should render details page", async () => {
		await waitFor(() => {
			expect(screen.getByText(pokemonName)).toBeTruthy();
		});
	});
});
