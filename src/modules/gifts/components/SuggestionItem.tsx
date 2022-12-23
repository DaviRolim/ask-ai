import { HStack, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

interface SuggestionItemProps {
  suggestion: string;
}

function SuggestionItem(props: React.PropsWithChildren<SuggestionItemProps>) {
  return (
    <HStack>
      <Image
        src="/images/gift.png"
        alt="gift"
        boxSize="40px"
        objectFit="cover"
      />
      <Text
        style={{
          color: "white",
          marginTop: "20px",
          whiteSpace: "pre-wrap",
        }}
      >
        {props.suggestion}
      </Text>
    </HStack>
  );
}

SuggestionItem.propTypes = {};

export default SuggestionItem;
