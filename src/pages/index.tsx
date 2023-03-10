import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { trpc } from "../utils/trpc";
import { motion } from "framer-motion";
import {
  Button,
  FormControl,
  FormLabel,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

const titleVariant = {
  hidden: { opacity: 0, y: "-100px" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, duration: 1 },
  },
};
const formVariant = {
  hidden: { opacity: 0, y: "100vh" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.25,
      duration: 0.75,
      when: "beforeChildren",
      // delayChildren: 0.5,
      // staggerChildren : 0.1 // Compounds for each child
    },
  },
};
const submitFormButtonVariant = {
  hidden: { opacity: 0, y: "100vh" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0 },
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    // borderRadius: ["0%", "50%", "25%", "25%", "50%"],
    // width: ["50%", "100%", "125%", "25%", "50%"],
    transition: { duration: 0.3, yoyo: 2 },
  },
};
const Home: NextPage = () => {
  const mutation = trpc.example.hello.useMutation();
  const [text, setText] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({
      text,
    });
    setText("");
  };
  return (
    <>
      <Head>
        <title>Davi The Wise</title>
        <meta name="description" content="Davi the Wise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full h-full flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]" style={{height: "100vh", width: "100vw"}}>
        <div className="m-16 flex w-full flex-col items-center justify-center gap-12 px-4">
          <motion.h1
            className={styles.title}
            variants={titleVariant}
            initial="hidden"
            animate="visible"
          >
            Davi <span className={styles.pinkSpan}>AI</span> Playground
          </motion.h1>
          <div className={styles.cardRow}>
            <motion.div
              className={styles.card}
              initial={{ opacity: 0, x: "-100px" }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.5, duration: 0.75 },
              }}
              whileHover={{
                scale: 1.05,
                transition: {},
              }}
            >
              <Link className={styles.link} href="/tvshows">
                <h3 className={styles.cardTitle}>Achar Filmes e Series</h3>
                <div className={styles.cardText}>
                  Receba sugestoes baseadas nos filmes, series ou animes que
                  voce mais gosta, e me diz quais plataformas que voce tem
                  acesso, para que eu possa te ajudar a encontrar o que voce
                  procura.
                </div>
                {/* <div className={styles.cardText}>
                  Get suggestions of movies and series based on the platforms
                  you have available and your favorite movies/series!!
                </div> */}
              </Link>
            </motion.div>
            <motion.div
              className={styles.card}
              initial={{ opacity: 0, x: "100vw" }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 1, duration: 0.75 },
              }}
              whileHover={{
                scale: 1.05,
                transition: {},
              }}
            >
              <Link className={styles.link} href="gifts">
                <h3 className={styles.cardTitle}>Sugestao de presentes</h3>
                <div className={styles.cardText}>
                  Posso te dar excelentes sugest??es de presentes para voc?? dar
                  para seus amigos e familiares! Usando inteligencia artificial
                  para sugerir presentes baseado no que eles gostam.
                </div>
                {/* <div className={styles.cardText}>
                  Tell me about the person you want to give a gift and let me
                  help you with great suggestions!
                </div> */}
              </Link>
            </motion.div>
          </div>
          <motion.form
            onSubmit={handleSubmit}
            variants={formVariant}
            initial="hidden"
            animate="visible"
          >
            <FormControl>
              <FormLabel color={"white"} htmlFor="text">
                Me pergunte qualquer coisa! Vou tentar responder!
              </FormLabel>
              <Textarea
                id="text"
                color="white"
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
            </FormControl>
            <Button
              as={motion.button}
              variants={submitFormButtonVariant}
              whileHover="hover"
              type="submit"
              mt={3}
              w="100%"
            >
              Enviar pergunta
            </Button>
          </motion.form>
          <p className={styles.showcaseText}>
            {mutation.data && (
              <p
                style={{
                  color: "white",
                  marginTop: "20px",
                  whiteSpace: "pre-wrap",
                }}
              >
                {mutation.data}
              </p>
            )}

            {mutation.isLoading && <Spinner size={"xl"} color="white" />}

            {mutation.error && (
              <p style={{ color: "white" }}>
                Something went wrong! {mutation.error.message}
              </p>
            )}
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
