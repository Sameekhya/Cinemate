import React from "react";

import "./App.css";

import Header from "./Components/Header";

import AllRoutes from "./Routes/AllRoutes";

import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <AllRoutes />

      <Footer />
    </div>
  );
}

export default App;
