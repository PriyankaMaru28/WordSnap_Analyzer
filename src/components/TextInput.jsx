import React from "react";
import { useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState("");
  const toast = useToast();

  const OnSubmitText = (text) => {
    text === ""
      ? toast({
          title: "Text field is empty",
          description: "Please input Text for keyword extraction",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      : extractKeywords(text);
  };

  return (
    <>
      <Textarea
        color={"white"}
        bgColor="#e8cb8b"
        marginTop={220}
        padding={4}
        height={"20vh"}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Paste your text here to extract keywords .."
      />
      <Button
        bgColor={"#CEA03A"}
        color={"white"}
        width={"100%"}
        _hover={"green.700"}
        onClick={() => {
          OnSubmitText(text);
        }}
      >
        Extract Keywords
      </Button>
    </>
  );
};

export default TextInput;
