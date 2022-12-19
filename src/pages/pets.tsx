import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { trpc } from "../utils/trpc";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ animal: "snake" });

  return (
    <>
      <Head>
        <title>Pet Names</title>
        <meta name="description" content="Davi the Wise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              // repeatType: "reverse",
              duration: 1,
            }}
          >
            Davi <span className={styles.pinkSpan}>AI</span> Playground
          </motion.h1>
          <div className={styles.cardRow}>
            <motion.div
              className={styles.card}
              initial={{ opacity: 0, x: -350 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.5, duration: 1 },
              }}
              whileHover={{
                scale: 1.05,
                transition: {},
              }}
            >
              <Link
                className={styles.link}
                href="https://create.t3.gg/en/usage/first-steps"
                target="_blank"
              >
                <h3 className={styles.cardTitle}>Pet Names</h3>
                <div className={styles.cardText}>
                  Get suggestion of super fun and creative names for your pets!!
                </div>
              </Link>
            </motion.div>
            <motion.div
              className={styles.card}
              initial={{ opacity: 0, x: 350 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 1, duration: 1 },
              }}
              whileHover={{
                scale: 1.05,
                transition: {},
              }}
            >
              <Link
                className={styles.link}
                href="https://create.t3.gg/en/introduction"
                target="_blank"
              >
                <h3 className={styles.cardTitle}>Gifts Suggestion</h3>
                <div className={styles.cardText}>
                  Tell me about the person you want to give a gift and let me
                  help you with great suggestions!
                </div>
              </Link>
            </motion.div>
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
