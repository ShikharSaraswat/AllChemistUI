import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './ControlledCarousel.css';



function ControlledCarousel() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

    <div className="carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/40/c8/ce/40c8ce1c2f255681b113e56eb4b97442.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Your health information securely
in one place</h3>
            <p>Access to your record is in your control.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMx4EAkbFnjRG1sMZ1DhAWHiXlruBEUV_Uw&usqp=CAU"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2>For healthcare professionals</h2>
            <p>Healthcare professionals can access patients’ records in AllChemist system through conformant clinical information systems.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzl4taSDHCcip9-9JEXeayHsKNftaUb8COWA&usqp=CAU"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>For pharmaceutical vendors</h3>
            <p>
              Securely manage customer prescriptions.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );

}

export default ControlledCarousel;