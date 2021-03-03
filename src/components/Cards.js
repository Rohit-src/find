import React from 'react'
import image2 from "../assests/restaurantlogo.png"
import image3 from "../assests/grocery.png"
import image4 from "../assests/travel.png"
import image5 from "../assests/repair.png"
import image6 from "../assests/healthcare.png"
import image7 from "../assests/other.png"


const Cards = () => {

    return (<div style={{marginLeft: "365px",marginTop:"116px"
    }}>
<h3 style={{textAlign:"center",marginRight: "281px",fontSize: "53px",
    fontWeight:" bold"
}}>Categories</h3>
<div >
<img style={{height:"166px"}}src={image2} alt="..." class="rounded"/>
    <img style={{height:"166px",marginLeft:"20px"}} src={image3} alt="..." class="rounded"/>
    
    <img style={{height:"129px",marginLeft:"25px"}} src={image4} alt="..." class="rounded"/>
    <img  style={{height:"129px",marginLeft:"43px"}} src={image5} alt="..." class="rounded"/>
    <img style={{height:"129px",marginLeft:"46px"}} src={image6} alt="..." class="rounded"/>
    <img style={{height:"129px",marginLeft:"25px"}} src={image7} alt="..." class="rounded"/>
    </div>
    
</div>




    )
}

export default Cards