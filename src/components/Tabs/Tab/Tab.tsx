import { NavLink } from "react-router-dom";
import styles from "./Tab.module.css";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
	path: string;
};

const Tab = ({ children, path }: Props) => {
	return (
		<NavLink
			className={({ isActive }) =>
				`${styles.tab} ${isActive ? styles.active : ""}`
			}
			to={path}
		>
			{children}
		</NavLink>
	);
};

export default Tab;
