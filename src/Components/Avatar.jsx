import React from "react";
import "../Components/Avatar.css";
import Login from "./Form/Login";

function Avatar(props) {
  function loginLoader() {
    //const setter = props.setState;
    // const setter = useContext();
    // setter(<Login />);
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
