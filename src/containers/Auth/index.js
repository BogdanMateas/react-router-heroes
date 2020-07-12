import React from "react";
import { useNavigate } from "@reach/router";
import "./style.scss";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export const Auth = (props) => {
  //   const navigate = useNavigate();
  console.log(props);
  return (
    <section className="wrapper">
      <h1>Hello React Heroes!!</h1>
      <Link to={"/main"}>Go to main page</Link>
      <br />
      <br />
      <button onClick={() => props.history.push("/main")}>
        Go to main page too
      </button>
      {/* <button onClick={() => navigate("/main")}>Go to main page too</button> */}
    </section>
  );
};
