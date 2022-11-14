import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";


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
                <div className="css-typing">
                  <p className="text1">Hi</p>
                  <p className="text4 ">I'm Doniyor</p>
                  <p className="text2">Software Engineer</p>
                  <br></br>
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
