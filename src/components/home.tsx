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
                <h1 className="text1">Doniyor<br></br>Ismatilloev</h1>
                <h2 className="text2">Software Engineer</h2>
                <br></br>
                <div>
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
