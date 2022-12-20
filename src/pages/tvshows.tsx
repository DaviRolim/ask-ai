import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";

import { Box } from "@chakra-ui/react";
import TvShowSuggestionPannel from "../modules/tv_show/TvShowSuggestionPannel";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Series/Movies Suggestions</title>
        <meta name="description" content="Davi the Wise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>


      <Box maxW="sm" mx="auto">
        <TvShowSuggestionPannel />
      </Box>
      </main>
    </>
  );
};

export default Home;
