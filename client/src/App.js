//import styles from "./App.module.css";
//import NavigationBar from "./components/NavigationBar/NavigationBar";
//import TodoSwitch from "./navigation/TodoSwitch";
import React from "react";
import HomePage from "./components/homePage/HomePage";
import styles from "./App.module.css";
function App() {
  return (
    <div>
      {/* landingPage */}
      <HomePage />
    </div>

    // <ChakraProvider>
    //   <Login />
    // </ChakraProvider>
  );
}

export default App;
