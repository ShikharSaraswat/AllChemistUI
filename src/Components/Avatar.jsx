import React, { useContext } from "react";
import PageContext from '../context';
import "../Components/Avatar.css";
import Login from "./Form/Login";

function Avatar(props) {
  const pageContextual = useContext(PageContext);
  function loginLoader() {
    pageContextual.updatePage(<Login />);
  }
  return (
    <div class="zoom">
    <div class="container">
    <img
      className="circle-img"
      src={props.imgUrl}
      alt="avatar_img"
    />
    <div  class="overlay">
    <div onClick={loginLoader} class="text">{props.value}</div>
  </div>
     {/* <div class="centered">{props.value}</div> */}
    </div>
    </div>
  );
}
export default Avatar;
