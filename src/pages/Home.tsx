import { FaCheck, FaTimes, FaSpinner } from 'react-icons/fa'; // Ícones para válido, inválido e carregando
import { Input, Button, Flex, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import words from "../words.json"; // Importando o JSON com as palavras

const wordsArray: string[] = words;

function Home() {
  const [stateWord, setStateWord] = useState("invalid"); // Estado da palavra
  const [inputValue, setInputValue] = useState(""); // Valor do input

  const validateWord = () => {
    if (wordsArray.includes(inputValue)) {
      setStateWord("valid");
    } else if (inputValue === "") {
      setStateWord("invalid");
    } else  {
      setStateWord("invalid");
    }
  };

  useEffect(() => {
    if (inputValue !== "") {
      setStateWord("loading");
      setTimeout(() => {
        validateWord();
      }, 500); // Simulando atraso de validação (500ms)
    } else {
      setStateWord("invalid");
    }
  }, [inputValue]);

  return (
    <div className="h-screen flex items-center justify-center bg-[#282828]">
      <div className="flex gap-3 flex-col">
        <Flex align="center" gap={2}>
          <Box position="relative" flex="1">
            <Input
              placeholder="Digite algo..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              background={"#3e3e3e"}
              color={"#fff"}
              borderColor={"#555"}
              _focus={{ borderColor: "#ffa500" }}
              pr="2.5rem"
            />
            <Box position="absolute" right="0.75rem" top="50%" transform="translateY(-50%)">
              {stateWord === "invalid" && <FaTimes className="text-red-600" />}
              {stateWord === "valid" && <FaCheck className="text-green-600" />}
              {stateWord === "loading" && <FaSpinner className="text-yellow-600 animate-spin" />}
            </Box>
          </Box>
        </Flex>

        <Button
          variant={"outline"}
          colorScheme={"teal"}
          borderColor={"#555"}
          _hover={{ bg: "#444" }}
        >
          ADD
        </Button>
      </div>
    </div>
  );
}

export default Home;
