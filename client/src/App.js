// import styles from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import React from "react";
import Routes from "./pages/_routes";

function App() {
   return (
      <div>
         <Routes />
         <Sidebar />
      </div>
   );
}

export default App;
