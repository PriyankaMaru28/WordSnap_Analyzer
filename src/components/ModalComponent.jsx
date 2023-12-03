import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress,
  Button,
  Tag,
  HStack,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";

const ModalComponent = ({ keywords, loading, isOpen, closeModal }) => {
  const [keywordremoved, setRemovedKeyword] = useState("");
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={closeModal}>
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {loading ? (
              <CircularProgress isIndeterminate color="red.300" />
            ) : (
              <HStack
                display={"inline-block"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                {["lg"].map((size) =>
                  keywords.map((el) => {
                    return (
                      <Tag
                        size={size}
                        key={size}
                        variant="solid"
                        colorScheme="teal"
                        margin={1}
                      >
                        {el}
                        <TagCloseButton value={el} />
                      </Tag>
                    );
                  })
                )}
              </HStack>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="blue.300" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
