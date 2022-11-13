import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Aboutme from "./components/aboutme";

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/fontawesome.css';

//import google from "../icons/google.svg";
import instagram from "./icons/instagram.svg";
import facebook from "./icons/facebook.svg";
import github from "./icons/github.svg";
import linkedin from "./icons/linkedin.svg";
import house from "./icons/house.svg"
import telephone from "./icons/telephone.svg"
import envelope from "./icons/envelope.svg"

//import twitter from "../icons/twitter.svg";


function App() {
  return (
    <>
      <Navbar 
        className="shadow mb-5 bg-white rounded justify-content-end navtext"
        bg="myNav"
        expand="lg"
        fixed="top"
        >
        <Container>
          <Navbar.Brand href="/">
            <img src="https://i.imgur.com/Oqa6ONv.png" height={60} width={60} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text" href="/">Home</Nav.Link>
              <Nav.Link className="text" href="/experience">Experience</Nav.Link>
              <Nav.Link className="text" href="/projects">Projects</Nav.Link>
              <Nav.Link className="text" href="/aboutme">About me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/aboutme" element={<Aboutme/>} />
        </Routes>
      </BrowserRouter>

      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Navbar.Brand href="https://www.linkedin.com/in/doniyor2024/">
            <img className="icon" src={linkedin} />
          </Navbar.Brand> 
      {/* <Navbar.Brand href="/">
          <img className="icon" src={google} />
      </Navbar.Brand>  */}
          <Navbar.Brand href="https://www.facebook.com/profile.php?id=100010434663019">
            <img className="icon" src={facebook} />
          </Navbar.Brand>
          {/* <img className="icon" src={twitter} height = "25"/> */}
          <Navbar.Brand href="https://www.instagram.com/doniyor134/">
            <img className="icon" src={instagram} />
          </Navbar.Brand>
          <Navbar.Brand href="https://github.com/DoniyorI">
            <img className="icon" src={github} />
          </Navbar.Brand>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img src="https://i.imgur.com/Oqa6ONv.png" height={125} width={125} />
                <MDBIcon className="me-3" />
              </h6>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/experience' className='text-reset'>
                  Experiance
                </a>
              </p>
              <p>
                <a href= '/projects' className='text-reset'>
                  Projects
                </a>
              </p>
              <p>
                <a href='/aboutme' className='text-reset'>
                  About Me
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
              <img className="icon" src={house} />
                <MDBIcon className="me-3 bi bi-house-door-fill" />
                Brooklyn, NY 11230, USA
              </p>
              <p>
               <img className="icon" src={envelope} />
                <MDBIcon className="me-3" />
                doniyori@buffalo.edu
              </p>
              <p>
              <img className="icon" src={telephone} />
                <MDBIcon className="me-3" /> +1 (917) 362-5432
              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href=''>
          Doniyori.com
        </a>
      </div>
    </MDBFooter>
    </>
  );
}

export default App;
