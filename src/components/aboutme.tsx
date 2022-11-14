import "bootstrap/dist/css/bootstrap.min.css";

import Carousel from 'react-bootstrap/Carousel';

import photo1 from "../assets/slide_show/Photo_1.jpeg"
import photo2 from "../assets/slide_show/Photo_2.jpeg"
import photo3 from "../assets/slide_show/Photo_3.jpeg"
import photo4 from "../assets/slide_show/Photo_4.jpg"
import photo5 from "../assets/slide_show/Photo_5.jpg"
import photo6 from "../assets/slide_show/Photo_7.png"



export type Props = {
  content?: string;
};
const Aboutme = () => {
    return (
      <>
      <div className="slidebg">
      <Carousel variant="dark">
      <Carousel.Item interval={1000}>
        <img
          className="d-block slideshow "
          src={photo1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text3">First slide label</h3>
          <p className="text3">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block slideshow"
          src={photo2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="text3">Second slide label</h3>
          <p className="text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block slideshow "
          src={photo3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="text3">Third slide label</h3>
          <p className="text3">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block slideshow"
          src={photo4}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3 className="text3">Fourth slide label</h3>
          <p className="text3">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block slideshow"
          src={photo5}
          alt="Fifith slide"
        />
        <Carousel.Caption>
          <h3 className="text3">Fifth slide label</h3>
          <p className="text3">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block slideshow"
          src={photo6}
          alt="Sizth slide"
        />
        <Carousel.Caption>
          <h3 className="text3">Sixth slide label</h3>
          <p className="text3">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className="bg">

    </div>
      </>
    );
  };
  export default Aboutme;