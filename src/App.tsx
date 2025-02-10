import { Input, Button } from "@chakra-ui/react";

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#282828]">
      <div className="flex gap-3">
        <Input 
          placeholder="Digite algo..." 
          background={"#3e3e3e"} 
          color={"#fff"} 
          borderColor={"#555"} 
          _focus={{ borderColor: "#ffa500" }} 
        />
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

export default App;
