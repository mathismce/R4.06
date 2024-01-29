import Image from "next/image";
import styles from "./page.module.css";
import Square from "./ttt/Board.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Square></Square>
      </div>
    </main>
  );
}
