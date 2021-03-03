import React from 'react'

import image1 from "../assests/14.png"
import "../components2/Card4.css"
import {Container,Col,Image} from "react-bootstrap"
import Down from "./Down"
import "../components2/botom.css"

const Data = () => {
    return (
        <div>
        <div className="about">
        <div className="container">
          <div className="row">
            
            <div className="col-6">
              <div className="data__img">
                  <Container>
              <Col xs={6} md={4}>
      <Image className="data__img" src={image1} roundedCircle />
    </Col>
    </Container>
               
              </div>
            </div>
            <div className="col-6 p-25">
              <h1>john Doe</h1>
              <h4 style={{color:"#a6a8a9"}}>indore,khaugali Bada market</h4><br/><br/>
              <button className="data__btn"  type="click">Edit</button><br/><br/><br/><br/><br/>

              <div className="data__icon">
              <i style={{color:"#a6a8a9"}} class="fas fa-phone">&nbsp; &nbsp; &nbsp; &nbsp;+91-9655549604</i><br/>
            <i  style={{color:"#a6a8a9"}} class="fa fa-envelope">&nbsp; &nbsp;&nbsp; &nbsp; hello@findby.in</i><br/><br/><br/>
              </div>
            </div>
          </div>
          
        </div>
        
      </div> <br/><br/>

      <Down/>
      <div className="botom__1">
        
        <img 
      className="img__botom"
      src={image1}
      alt="Second slide"
    /><br/>

<img
      className="img__botom"
      src={image1}
      alt="Second slide"
    />

            

        

    </div>

      </div>
      
    )
}

export default Data
