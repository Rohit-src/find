import React,{useState} from 'react'

import {Carousel} from "react-bootstrap";
import './Crousle.css';
import image from "../assests/samosa.png"

const Crousel2 = () => {

  const style={
    height:"260px"
  }
  
      const [index, setIndex] = useState(0);

      const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    
      return (
        <Carousel className="carouslefull" 
        style={{marginLeft: "254px",
            marginRight: "254px"}}
        activeIndex={index} onSelect={handleSelect}>
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
    

export default Crousel2

