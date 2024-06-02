import styles from "./Header.module.css";
import Logo from "../../Logo";
import Ash from "../../../assets/ash.png";

const Header = () => {
	const handleLogOut = () => {
		localStorage.removeItem("isLoggedIn");
		window.location.href = "/";
	};

	return (
		<header className={styles.header}>
			<Logo horizontal />
			<div className={styles.sessionContainer}>
				<div className={styles.userContainer}>
					<img src={Ash} />
					<span>Ash Ketchum</span>
				</div>
				<button className={styles.logoutButton} onClick={handleLogOut}>
					Log out
				</button>
			</div>
		</header>
	);
};

export default Header;
