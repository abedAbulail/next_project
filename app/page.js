import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="main-div">
        <div>
          <h1 className={styles.title}>Welcome to My Next.js App</h1>
          <p className={styles.description}>
            This is a simple example of a Next.js application.
          </p>

          <p>© 2023 My Next.js App</p>
        </div>
      </div>
    </>
  );
}
