import "./styles.css";
import List from "./components/List";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Data from "./components/Data";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Data>
      <div className="app">
        <div className="container">
          <Header checked={checked} setChecked={setChecked} />
          <List checked={checked} />
          <Form />
        </div>
        <Footer />
      </div>
    </Data>
  );
};
