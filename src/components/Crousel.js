import React,{useState} from 'react';
import {Carousel} from "react-bootstrap";
import './Crousle.css';
import image from "../assests/crousle.png"

const Crousel = () => {

  const style={
    height:"260px"
  }
  
      const [index, setIndex] = useState(0);

      const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    
      return (
        <Carousel className="carouslefull" activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img style={style}
              className="d-block w-100"
              src={image}
              alt="First slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img style={style}
              className="d-block w-100"
              src={image}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img style={style}
              className="d-block w-100"
              src={image}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      );
    }
    

export default Crousel
