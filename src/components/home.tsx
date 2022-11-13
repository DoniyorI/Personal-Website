import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Container, Row } from "react-bootstrap";

export type Props = {
  content?: string;
};
const Home = () => {
  return (
    <>
      <div className="bg">
        <Container fluid>
          <Row>
            <Col>
              <div className="box">
                <h1>Doniyor Ismatilloev</h1>
                <h2>Software Engineer</h2>
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
