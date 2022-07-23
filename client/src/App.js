//import styles from "./App.module.css";
//import NavigationBar from "./components/NavigationBar/NavigationBar";
//import TodoSwitch from "./navigation/TodoSwitch";
import React from "react";
import HomePage from "./components/guest/MainPage/Main";
import GuestSwitch from "./navigation/GuestSwitch";
import styles from "./App.module.css";
function App() {
  return (
    <div>
      {/* landingPage */}
      <GuestSwitch />
    </div>

    // <ChakraProvider>
    //   <Login />
    // </ChakraProvider>
  );
}

export default App;
