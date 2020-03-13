import React from "react";
import "./App.scss";

import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC<{}> = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <Body />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
