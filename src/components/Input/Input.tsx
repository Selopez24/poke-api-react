import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<div className={styles.inputContainer}>
			<input {...props} />
		</div>
	);
};

export default Input;
