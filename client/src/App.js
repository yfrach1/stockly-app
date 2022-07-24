//import styles from "./App.module.css";
//import NavigationBar from "./components/NavigationBar/NavigationBar";
//import TodoSwitch from "./navigation/TodoSwitch";
import React from "react";
import Main from "./components/guest/MainPage/Main";
import GuestSwitch from "./navigation/GuestSwitch";
import styles from "./App.module.css";
function App() {
  return (
    <div>
      {/* landingPage */}
      <Main />
    </div>

    // <ChakraProvider>
    //   <Login />
    // </ChakraProvider>
  );
}

export default App;
