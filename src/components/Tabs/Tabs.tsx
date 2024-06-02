import styles from "./Tabs.module.css";

type Props = {
	children: React.ReactNode;
};

const Tabs = ({ children }: Props) => {
	return <nav className={styles.container}>{children}</nav>;
};

export default Tabs;
