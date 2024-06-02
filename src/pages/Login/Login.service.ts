export const MOCK_CREDENTIALS = {
	email: "ash@gmail.com",
	password: "pikachu",
};

export type LoginFormData = {
	email: string;
	password: string;
};

export enum LoginFormFields {
	email = "email",
	password = "password",
}

export type LoginKeys = `${LoginFormFields}`;

export const validateLogin = (loginFormData: LoginFormData) => {
	const errors = {
		email: false,
		password: false,
	};

	errors.email =
		loginFormData.email.toLocaleLowerCase() !== MOCK_CREDENTIALS.email;
	errors.password = loginFormData.password !== MOCK_CREDENTIALS.password;

	return errors;
};

export const validateSession = () =>
	JSON.parse(localStorage.getItem("isLoggedIn") ?? "null");
