import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { trpc } from "../utils/trpc";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import MyForm from "../modules/gifts/components/Form";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gift Suggestions</title>
        <meta name="description" content="Davi the Wise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box maxW="sm" mx="auto">
        <MyForm />
      </Box>
    </>
  );
};

export default Home;
