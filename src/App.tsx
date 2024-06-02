import { ReactNode } from "react";
import styles from "./index.module.css";
import Layout from "./components/Layout";

type Props = {
	children: ReactNode;
};

const App = ({ children }: Props) => {
	return <Layout className={styles.mainContainer}>{children}</Layout>;
};

export default App;
