import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Container, Navbar, Row } from "react-bootstrap";
import google from "../icons/google.svg";
import instagram from "../icons/instagram.svg";
import facebook from "../icons/facebook.svg";
import github from "../icons/github.svg";
import linkedin from "../icons/linkedin.svg";
import twitter from "../icons/twitter.svg";
import { EmitFlags } from "typescript";

export type Props = {
  content?: string;
};
const Home = () => {
    function email(){
        
    }
  return (
    <>
      <div className="bg">
        <Container fluid>
          <Row>
            <Col>
              <div className="box block">
                <h1 className="text1">Doniyor</h1>
                <h1 className="text3">Ismatilloev</h1>
                <h2 className="text2">Software Engineer</h2>
                <br></br>
                <div>
                <Navbar.Brand href="https://www.linkedin.com/in/doniyor2024/">
                    <img className="icon" src={linkedin} />
                </Navbar.Brand> 
                <Navbar.Brand href="/">
                    <img className="icon" src={google} />
                </Navbar.Brand> 
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
              </div>
            </Col>
            <Col className="homebg"></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Home;
