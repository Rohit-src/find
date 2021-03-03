import React from 'react'

import image from "../assests/13.png";
import image1 from "../assests/14.png"

const Cards3 = () => {

  const style={
    marginLeft:"34px"
  }
    return (
      
      
        <div style={{display: "flex",
          marginLeft: "234px",
          marginTop: "146px",
          height: "239px",
          width: "397px",
          marginBottom: "27px"}}>
            <img style={style}
              className="d-block w-100"
              src={image}
              alt="Second slide"
            />

             <img style={style}
              className="d-block w-100"
              src={image1}
              alt="Second slide"
            />

             <img style={style}
              className="d-block w-100"
              src={image}
              alt="Second slide"
            />
        </div>
    )
}

export default Cards3
