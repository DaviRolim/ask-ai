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
                Receba sugestoes baseadas nos filmes, series ou animes que voce mais gosta, 
                e me diz quais plataformas que voce tem acesso, para que eu possa te ajudar a encontrar o que voce procura.
                </div>
                {/* <div className={styles.cardText}>
                  Get suggestions of movies and series based on the platforms
                  you have available and your favorite movies/series!!
                </div> */}
              </Link>
            </motion.div>
            <motion.div
              className={styles.card}
              initial={{ opacity: 0, x: 350 }}
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
                <h3 className={styles.cardTitle}>Gifts Suggestion</h3>
                <div className={styles.cardText}>
                Posso te dar excelentes sugestões de presentes para você dar para seus amigos e familiares!
                Usando inteligencia artificial para sugerir presentes baseado no que eles gostam.
                
                </div>
                {/* <div className={styles.cardText}>
                  Tell me about the person you want to give a gift and let me
                  help you with great suggestions!
                </div> */}
              </Link>
            </motion.div>
          </div>
          <form onSubmit={handleSubmit}>
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
            <Button type="submit" mt={3} w="100%">
            Enviar pergunta
            </Button>
          </form>
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
