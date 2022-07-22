//import styles from "./App.module.css";
//import NavigationBar from "./components/NavigationBar/NavigationBar";
//import TodoSwitch from "./navigation/TodoSwitch";
import React from "react";
import Login from "./components/login/Login";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
}

export default App;
