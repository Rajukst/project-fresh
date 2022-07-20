import React from 'react';
import { Carousel } from 'react-bootstrap';
import carosulOne from "../../../Images/Carosul/net.png"
import carosulTwo from "../../../Images/Carosul/carosul.png"
const MyCarosul = () => {
    return (
        <div>
            <Carousel fade>
      <Carousel.Item>
        <img
          className="f"
          src={carosulOne}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="f"
          src={carosulTwo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default MyCarosul;