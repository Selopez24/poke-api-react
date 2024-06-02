import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import Tab from "../../components/Tabs/Tab";
import Tabs from "../../components/Tabs";

const Home = () => {
	const [isSessionActive, setIsSessionActive] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn") ?? "null");

		if (!isLoggedIn) {
			navigate("/", { replace: true });
		} else {
			setIsSessionActive(true);
		}
	}, [navigate]);

	if (!isSessionActive) {
		return <></>;
	}

	return (
		<div className={styles.homeContainer}>
			<Tabs>
				<Tab path="list">All</Tab>
				<Tab path="favorites">Favorites</Tab>
			</Tabs>
			<Outlet />
		</div>
	);
};

export default Home;
