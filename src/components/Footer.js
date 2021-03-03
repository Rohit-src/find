import React from "react";
import "./Footer.css";
import image from "../assests/apple.png"
import image1 from "../assests/googlePlay.png"
import image2 from "../assests/footerlogo.png"

function Footer() {
  return (
    <div className="main-footer" >
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <img src={image2} style={{marginBottom:"8px"}} alt="logo"/>
        
            <p>Lorem40
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                
              </p>
            
          </div>
          {/* Column2 */}
          <div className="col" style={{marginLeft:"100px"}}>
            <h4>Contact Us</h4>
            <i class="fas fa-phone">&nbsp; &nbsp; +91-9655549604</i><br/>
            <i class="fa fa-envelope">&nbsp; &nbsp; hello@findby.in</i><br/><br/><br/>
            <div><i class="fab fa-facebook fa-3x"></i>
            <i class="fab fa-twitter fa-3x" style={{marginLeft:"20px"}}></i>
            <i class="fab fa-instagram fa-3x" style={{marginLeft:"20px"}}></i>


            </div>

          </div>
          {/* Column3 */}
          <div className="col" style={{marginRight: "-111px"}}>
            <h4>Company</h4>
            <p >About Us</p>
            <p>Blog</p>
          </div>

          <div className="col" style={{marginRight: "-78px"}}>
            <h4>Download the app</h4>
            <div className="footer__app"><p>Google Play</p>
            <p style={{    marginLeft: "125px",marginTop: "-32px"}}>App Store</p><br/>
           
           <img src={image} 
            style={{height:"40px",
        marginLeft:"120px",
        marginBottom: "-3px"}}
            alt="img"/>
             <img src={image1} 
            style={{height: "100px",
                marginLeft:"1px" ,
                marginTop: "-67px"}}
            alt="img"/>
            
            
               
               
           
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
