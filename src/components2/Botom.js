import React,{useState} from 'react'
import image1 from "../assests/crousle.png"
import image2 from "../assests/14.png"
import Tab from "./Tab"
import {Tabs,TabContent} from "react-bootstrap";
import "./botom.css"


const Botom = () => {
    const [key, setKey] = useState('home');
  
    return (
        <div >
            <div>
            <div>
                <Tab/>
            
                </div>

            </div>
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

            <div className="botom__2" >
         <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        style={{marginLeft:"347px",fontSize:"35px"}}
        
      >
                <Tab style={{marginLeft:"347px"}} eventKey="Discount" title="Discount" >
      <TabContent />
   {/* <Sonnet /> */}
  </Tab>
  </Tabs>
                <div className="botom__3" >
            <img 
              className="d-block w-100"
              src={image2}
              alt="Second slide"
            />

            </div>

            </div>


        </div>
    )
}

export default Botom
