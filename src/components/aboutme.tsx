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
      <div  className="slidebg">
        <div
          className='mask'
          style={{
            background: 'linear-gradient(to top, rgba(30, 30, 30, .75), rgba(222, 228, 231, 0.5) 100%)',
          }}
        >
        <Carousel variant="dark">
        <Carousel.Item interval={2000}>
          <div className="slideimg">
            <img
              className="d-block slideshow"
              src={photo1}
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            {/* <h3 className="text3">First slide label</h3>
            <p className="text3">Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block slideshow"
            src={photo2}
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3 className="text3">Second slide label</h3>
            <p className="text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block slideshow "
            src={photo3}
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3 className="text3">Third slide label</h3>
            <p className="text3">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block slideshow"
            src={photo4}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            {/* <h3 className="text3">Fourth slide label</h3>
            <p className="text3">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block slideshow"
            src={photo5}
            alt="Fifith slide"
          />
          <Carousel.Caption>
            {/* <h3 className="text3">Fifth slide label</h3>
            <p className="text3">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block slideshow"
            src={photo6}
            alt="Sizth slide"
          />
          <Carousel.Caption>
            {/* <h3 className="text3">Sixth slide label</h3>
            <p className="text3">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <div className="bg">
      </div>
    </div>
    <div>
        <p>Hello, As you can kinda tell from the Domain name and the home page 
          I'm Doniyor. I am a Sophmore at the University at Buffalo and Majoring in 
          BS Computer Science.

          I enjoy learning new things and problem-solving. I was first exposed to this 
          programming when I was in middle school. Like many other people, I started on 
          Scratch building little games in class.

          Moved on to high school specifically choosing a school with a STEM 
          academy so I can continue learning new things. In high school, I learned the basics
          of HTML, CSS, Javascript, Python, and Java. Having fun along the way.

          Since coming to UB I'm learned so much. Meeting new people and creating long-lasting 
          connection with my peers.
        
          I created this website to challenge my self and do something new. 
          This is my first time using React and Bootstrap. So tell me how I did in the Contact me form 
          below or if just wanna talk to me. I'm always open to new suggestions.
          
          
          </p>
    </div>
      </>
    );
  };
  export default Aboutme;