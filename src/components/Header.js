import React from "react";
import "./Header.css";
import { Dropdown } from "semantic-ui-react";

import 'bootstrap/dist/css/bootstrap.min.css';
import image from "../assests/logo.png";
import image1 from "../assests/log.png";



const languageOptions = [
  { key: "Arabic", text: "Gurugram", value: "Arabic" },
  { key: "Chinese", text: "Delhi", value: "Chinese" },
];

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header__logo">
          <img
            className="header__logoImage"
            src={image}
            style={{ height: "40px", color: "black" }}
            alt="logo is there"
          />
        </div>

        <Dropdown
          style={{
            marginLeft: "129px",
            backgroundColor: "#fff",
            boxShadow: "2px 1px 1px 0px rgba(61, 50, 50, 0.55)",
            width: "169px"
            
          }}
          button
          className="icon"
          floating
          labeled
          icon="map marker alternate icon;"
          options={languageOptions}
          search
          text="city"
        />
        <div className="header__search">
          <div class="ui icon input">
            <i style={{ marginRight: "405px" }} class="search icon"></i>
            <input
              className="header__searchBox"
              placeholder="      Search near product and shop"
            />
            <button className="header__searchButton">search</button>
          </div>
        </div>
        <div class="header__items" >
          <div>
            <h3>Category</h3>
          </div>
          <div className="header__login">
            <h3>Login/Sign Up</h3>
            <img
              src={image1}
              style={{ height: "30px", marginLeft: "5px" }}
              alt="login logo"
            />
          </div>
        </div>
      </div>
      
  
    </div>



  );
};

export default Header;
