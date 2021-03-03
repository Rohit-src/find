import React,{useState} from 'react'
import {Tabs,TabContent} from "react-bootstrap";


function Tab() {
    const [key, setKey] = useState('home');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        style={{fontSize:"35px",marginLeft:"100px"}}
      >
       <Tab eventKey="home" title="About">
    <TabContent />
    {/* <Sonnet /> */}
    </Tab>
 
    <Tab eventKey="profile" title="Media File">
     <TabContent />
   {/* <Sonnet /> */}
  </Tab>

  <Tab eventKey="contact" title="Recomendation" >
      <TabContent />
   {/* <Sonnet /> */}
  </Tab>
</Tabs>
    );
  }
  
export default Tab
