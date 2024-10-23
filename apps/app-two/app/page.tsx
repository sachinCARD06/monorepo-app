import styles from "./page.module.css";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomePage />
      <AboutPage />
    </div>
  );
}
