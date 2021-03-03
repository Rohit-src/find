import React from 'react'
import image1 from "../assests/14.png"
import "./Card4.css"
import Botom from "./Botom"


const Card4 = () => {
    return (<div>
        <div className="about">
        <div className="container">
          <div className="row">
            
            <div className="col-6">
              <div className="about__img">
                <img src={image1} alt="Pizza" />
                <div className="imgs__container">
                <img src={image1} style={{borderRadius:"10px"}} alt="Pizza" />
                <img style={{marginLeft: "40px",borderRadius:"10px"}} src={image1} alt="Pizza" />
                <img style={{marginLeft: "40px",borderRadius:"10px"}} src={image1} alt="Pizza" />
                <img style={{marginLeft: "40px",borderRadius:"10px"}}  src={image1} alt="Pizza" />

                </div>
              </div>
            </div>
            <div className="col-6 p-25">
              <h1>Matrix Barber Shop</h1>
              <h4>galeria market ,dlf city phase 4</h4><br/><br/>
              <button className="about__btn"  type="click">view on map</button><br/><br/><br/><br/><br/>
              <h4>Description</h4>
              
              <p>
                Investigationes demonstraverunt lectores legere me lius quod ii
                legunt saepius. Claritas est etiam processus dynaus, quise
                sequitur mutationem consuetudium lectorum.
              </p>
              
            </div>
          </div>
        </div>
      </div> <br/><br/><br/>
      <Botom/>
      </div>
      )
}

export default Card4
