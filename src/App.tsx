import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Experiance from "./components/experiance";
import Projects from "./components/projects";
import Aboutme from "./components/aboutme";

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src="https://i.imgur.com/Oqa6ONv.png" height={60} width={60} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/experiance">Experiance</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/aboutme">About me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/experiance" element={<Experiance/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/aboutme" element={<Aboutme/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
