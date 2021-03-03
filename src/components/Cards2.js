import React from 'react'
import {Card} from "react-bootstrap";
import image from "../assests/11.png";
import image1 from "../assests/12.png";

const cards2 = () => {

  const style={
    fontWeight:"bold"
  }
    return (
        <div style={{display:"flex",margin:"160px"}}>
            <Card style={{ width: '18rem',
        marginLeft: "140px",marginRight: "-110px" }}>
  <Card.Img variant="top" src={image}  />
  <Card.Body>
    <Card.Title style={style}>Barbeque Nation</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
<Card style={{ width: '18rem',marginLeft: "177px" }}>
  <Card.Img variant="top" src={image1} />
  <Card.Body>
    <Card.Title style={style}>Barber Shop</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
<Card style={{ width: '18rem' ,marginLeft: "68px"}}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title style={style}>Effotel</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
<Card style={{ width: '18rem',marginLeft: "58px" }}>
  <Card.Img variant="top" src={image}/>
  <Card.Body>
    <Card.Title style={style}>Barber Shop</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
        </div>
    )
}

export default cards2
