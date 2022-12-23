import React from "react";
import GiftForm from "./components/GiftForm";
import Snowfall from "react-snowfall";
import { Flex } from "@chakra-ui/react";

const imageUrl = `/images/bgchistma3.jpg`;

function GiftSuggestionPannel() {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
      }}
    >
      <Snowfall />
      <Flex justifyContent="center" alignItems="center" w="full">
        <GiftForm />
      </Flex>
    </div>
  );
}

GiftSuggestionPannel.propTypes = {};

export default GiftSuggestionPannel;
