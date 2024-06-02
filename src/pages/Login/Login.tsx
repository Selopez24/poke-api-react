import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { LoginKeys, validateLogin, validateSession } from "./Login.service";
import Input from "../../components/Input";
import Logo from "../../components/Logo";

const loginInitialState = {
	email: "",
	password: "",
};

type PropsErrorMessage = {
	errors: { email: boolean; password: boolean };
};

const errorsInitialState = {
	email: false,
	password: false,
};

const ErrorMessage = ({ errors }: PropsErrorMessage) => {
	if (errors.email) {
		return <p className={styles.errorMessage}>Email does not exists</p>;
	}

	if (errors.password) {
		return <p className={styles.errorMessage}>Invalid password</p>;
	}
};

const Login = () => {
	const [loginFormData, setLoginFormData] = useState(loginInitialState);
	const [errors, setErrors] = useState(errorsInitialState);

	const navigate = useNavigate();

	const formRef = useRef(null);

	const handleLogin = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const errors = validateLogin(loginFormData);

		setErrors(errors);
		if (!errors.email && !errors.password) {
			localStorage.setItem("isLoggedIn", "true");
			navigate("/home");
		}
	};

	const handleLoginFormChange =
		(field: LoginKeys) => (event: ChangeEvent<HTMLInputElement>) => {
			setErrors(errorsInitialState);
			const value = event.target.value;

			setLoginFormData({
				...loginFormData,
				[field]: value,
			});
		};

	useEffect(() => {
		const isLoggedIn = validateSession();
		if (isLoggedIn) navigate("/home");
	}, [navigate]);

	return (
		<div className={styles.container}>
			<div>
				<Logo />
				<form ref={formRef} className={styles.loginCard} onSubmit={handleLogin}>
					<Input
						aria-label="email"
						placeholder="E-mail"
						name="email"
						required
						type="email"
						onChange={handleLoginFormChange("email")}
						value={loginFormData.email}
					/>
					<Input
						data-testid="password-input"
						type="password"
						aria-label="password"
						placeholder="Password"
						name="password"
						required
						onChange={handleLoginFormChange("password")}
						value={loginFormData.password}
					/>
					<button className={styles.loginButton} type="submit">
						Login
					</button>
				</form>
				<ErrorMessage errors={errors} />
			</div>
		</div>
	);
};

export default Login;
