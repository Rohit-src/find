import React,{useState} from 'react'
import {Tabs,Tab,TabContent} from "react-bootstrap";
import "../components2/botom.css"
const Down = () => {
    const [key, setKey] = useState('home');


    return (
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        style={{fontSize:"35px",marginLeft:"100px"}}
      >
       <Tab  eventKey="home" title="My Profile ">
    <TabContent />
    {/* <Sonnet /> */}
    </Tab>
 
    <Tab  eventKey="profile" title="Recomendation">
     < TabContent />
   {/* <Sonnet /> */}
  </Tab>

  <Tab  eventKey="Refer&earn" title="Refer & Earn" >
      <TabContent />
   {/* <Sonnet /> */}
  </Tab>
  <Tab  eventKey="myorder" title="My Order" >
      <TabContent />
   {/* <Sonnet /> */}
  </Tab>
  <Tab  eventKey="logout" title="logout" >
      <TabContent />
   {/* <Sonnet /> */}
  </Tab>
</Tabs>
    )
}

export default Down
