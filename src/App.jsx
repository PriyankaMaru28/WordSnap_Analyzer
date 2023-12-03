import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import { Container, Box, Image } from "@chakra-ui/react";
import logo from "./assets/Keyword_pic.jpeg";
import Footer from "./components/footer";
import TextInput from "./components/TextInput";
import ModalComponent from "./components/ModalComponent";

const BG = {
  backgroundImage: `url(${logo})`,
  backgroundSize: "cover",
  backgroundRepeatY: "repeat",
  backgroundPosition: "bottom",

  backgroundAttachment: "scroll",
};
const App = () => {
  const [keywords, setkeywords] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isloading, setloading] = useState(false);

  const extractNewKeywords = async (newKeywords) => {
    setIsOpen(true);
    setloading(true);
    console.log(newKeywords);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt:
          "Extract keywords from this text . Captilize the First letter of the words and separate it with comma. \n\n" +
          newKeywords +
          "",
        temperature: 0.5,
        max_tokens: 60,
        frequency_penalty: 0.8,
      }),
    };

    const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);
    const json = await response.json();
    const data = json.choices[0].text;

    console.log(data);

    const newArray = data.split(",");

    setkeywords(newArray);
    setloading(false);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div style={BG}>
        <Box color="white" height="100vh" paddingTop={65}>
          <Container maxW="2XL" centerContent>
            <Header />
            <TextInput extractKeywords={extractNewKeywords} />
            <Footer />
            <ModalComponent
              keywords={keywords}
              isOpen={isOpen}
              loading={isloading}
              closeModal={closeModal}
            />
          </Container>
        </Box>
      </div>
    </>
  );
};

export default App;
