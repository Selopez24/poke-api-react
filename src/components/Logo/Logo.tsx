import LogoImage from "../../assets/logo-image.png";
import { default as LogoTitle } from "../../assets/logo-title.svg";
import styles from "./Logo.module.css";

type Props = {
	horizontal?: boolean;
};

const Logo = ({ horizontal }: Props) => {
	const direction = horizontal ? styles.row : styles.column;

	return (
		<div className={`${styles.logoContainer} ${direction}`}>
			<img src={LogoImage} className={styles.logoImage} />
			<LogoTitle />
			<img />
		</div>
	);
};

export default Logo;
