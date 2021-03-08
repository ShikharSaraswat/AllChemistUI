import React from "react";
import "../Components/Avatar.css";
import Login from "./Form/Login";

function Avatar(props) {
  const stateSetter = props.stateSetter 
  function loginLoader() {
    stateSetter(<Login />)
  }
  return (
    <img
      className="circle-img"
      onClick={loginLoader} 
      src={props.imgUrl}
      alt="avatar_img"
    />
  );
}

export default Avatar;
