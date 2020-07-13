import React from "react";
import { FcGoogle } from "react-icons/fc";
import LogoBottom from "../../Assets/Images/Logo.png";
import LogoTop from "../../Assets/Images/logoTop.png";

const SideBar = () => {
  return (
    <div className="side-bar">
      <img src={LogoBottom} alt="" />
      <div>
        <h4>Welcome to the team</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <button className="btn">
          <FcGoogle></FcGoogle>
          Login with google
        </button>
      </div>
      <img src={LogoTop} alt="" />
    </div>
  );
};

export default SideBar;
