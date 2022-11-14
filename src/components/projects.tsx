import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import project1 from "../assets/project/Project_1V2.png";
import project2 from "../assets/project/Project_2.png";
import project3 from "../assets/project/Project_3.png";
import project4 from "../assets/project/Project_4.png";

import { MDBRipple } from 'mdb-react-ui-kit';

export type Props = {
  content?: string;
};
const Projects = () => {
  return (
    <>
      <div>
        <br></br>
        <br></br>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src={project1} className ="hover-overlay hover-zoom hover-shadow"/>
                <Card.Body>
                  <Card.Title>CDC Covid-19 Data</Card.Title>
                  <Card.Text>
                  Full-End Project pulling Information from the CDC Website creating multiple Bar graphs and Pie Charts 
                    measuring the Percentage of people Vaccinated per State, Vaccine Manufacturer Market Share, and percentage 
                    Vaccinated by Date and locations of any stats operating user input. The program used a combination of 
                    Python, HTML, JavaScript, Ajax, JSON, Bottle Route, Plot.ly, and CSV Files
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card>
                <Card.Img variant="top" src={project2}/>
                <Card.Body>
                  <Card.Title>Self-Checkout Machine</Card.Title>
                  <Card.Text>
                  Using Object-Oriented-Program created a GUI with fully functional buttons, The self checks out machine can enter any valid item code and outputs the items price and name. 
                  If the item has a sale the checkout machine will automatically include the sale. 
                  After scanning all of the user's items the user can also enter their loyalty card to get an additional discount on their purchase.
                  Checking out has two options cash or credit. after either is pressed cart is emptied and the total is cleared.
                  applying sales and discounts on select items and scanning in items. The program accomplished
                  using OOP in Scala
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row>
            <Col>
            <Card>
              <Card.Img variant="top" src={project3}/>
                <Card.Body>
                  <Card.Title>Web Game</Card.Title>
                  <Card.Text>
                    A web game ran on a local server using arrow keys to move and space to shoot projectiles.
                    Applying various Data Structures suck as Linked-Lists, Graphs, Queues, and stacks. Used the Data Structures to create 
                    Algorithms such as Breath-Frist Search and Depth-Frist to optimize finding the shortest path form an 
                    Enemy bot to a Player. Enemy bot shoots projectiles at players while mobile towards. Backend was achieved using Scala
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={project4}/>
                <Card.Body>
                  <Card.Title>Instant Messaging Server</Card.Title>
                  <Card.Text>
                    User input is taken and packed data using pointer math. Other users inputs are then Unpacked data from public server to be outputted on personal terminal. 
                    There arre differtn commadns that can be used "@" followed with a username to tag another user "/me" to tag yourself  and "/stats" see that stataticits of the server.
                    This project was coded in The C Programming Language
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <br></br>
        <br></br>

      </div>
    </>
  );
};
export default Projects;
