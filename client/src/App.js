import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

import MenuBar from "./components/MenuBar";
import Logo from "./components/Logo";
import Admin from "./pages/Admin";
import Wallet from "./pages/Wallet";
import Movies from "./pages/Movies";
import Shareholders from "./pages/Shareholders";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <MenuBar />
        <Logo />
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/shareholders" element={<Shareholders />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
