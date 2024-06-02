import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, vi, test, expect } from "vitest";
import { render, waitFor, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login";
import userEvent from "@testing-library/user-event";

const queryClient = new QueryClient();

const mockedUseNavigate = vi.fn();

const renderComponent = () => {
	return render(
		<QueryClientProvider client={queryClient}>
			<MemoryRouter>
				<Login />
			</MemoryRouter>
		</QueryClientProvider>
	);
};

describe("Login", () => {
	vi.mock("react-router-dom", async () => {
		const mod = await vi.importActual<typeof import("react-router-dom")>(
			"react-router-dom"
		);
		return {
			...mod,
			useNavigate: () => mockedUseNavigate,
		};
	});

	const user = userEvent.setup();

	renderComponent();

	test("should fill form and no log in if wrong credentials", async () => {
		const emailInput = screen.getByRole("textbox", { name: "email" });
		const passwordInput = screen.getByTestId("password-input");
		const loginButton = screen.getByRole("button", { name: "Login" });

		await user.type(emailInput, "ash@gmail.com");
		await user.type(passwordInput, "chicorita");
		await user.click(loginButton);

		await waitFor(() => {
			expect(screen.getByText("Invalid password")).toBeTruthy();
		});
	});

	test("should fill form and log in if successful", async () => {
		const passwordInput = screen.getByTestId("password-input");
		const loginButton = screen.getByRole("button", { name: "Login" });

		await user.clear(passwordInput);
		await user.type(passwordInput, "pikachu");
		await user.click(loginButton);

		await waitFor(() => {
			expect(mockedUseNavigate).toBeCalledTimes(1);
		});
	});
});
