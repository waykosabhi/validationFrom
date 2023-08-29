import React from "react";
import From from "./pages/From";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <From />
    </div>
  );
};

export default App;
