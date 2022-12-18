import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({animal: "snake" });

  return (
    <>
      <Head>
        <title>Davi The Wise</title>
        <meta name="description" content="Davi the Wise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Davi <span className={styles.pinkSpan}>AI</span> Playground
          </h1>
          <div className={styles.cardRow}>
            <Link
              className={styles.card}
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className={styles.cardTitle}>Pet Names</h3>
              <div className={styles.cardText}>Get suggestion of super fun and creative names for your pets!!</div>
            </Link>
            <Link
              className={styles.card}
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className={styles.cardTitle}>Gifts Suggestion</h3>
              <div className={styles.cardText}>Tell me about the person you want to give a gift and let me help you with great suggestions!</div>
            </Link>
          </div>
          {/* Movie or TV Show Suggestion */}
          <p className={styles.showcaseText}>
            {hello.data ? hello.data : "Loading tRPC query..."}
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
