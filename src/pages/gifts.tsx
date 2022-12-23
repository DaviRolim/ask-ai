import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";

import { Box } from "@chakra-ui/react";
import GiftSuggestionPannel from "../modules/gifts/GiftSuggestionPannel";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gift Suggestions</title>
        <meta name="description" content="Davi the Wise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <GiftSuggestionPannel />
      </main>
    </>
  );
};

export default Home;
