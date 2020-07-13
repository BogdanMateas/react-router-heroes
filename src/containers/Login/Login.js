import React from "react";
import SideBar from "./SideBar";
import BackgroundWrapper from "./BackgroundWrapper";
import backgroundLarge from "../../Assets/Images/background-l.png";
import backgroundMedium from "../../Assets/Images/background-m.png";
import backgroundSmall from "../../Assets/Images/background-s.png";
import "./style.scss";

const Login = () => {
  return (
    <div className="login-box">
      <BackgroundWrapper url={backgroundLarge} height={100} width={70} />
      <SideBar></SideBar>
    </div>
  );
};

export default Login;
