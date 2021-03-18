import React, { useContext } from "react";
import PageContext from '../context';
import "../Components/Avatar.css";
import Login from "./Form/Login";

function Avatar(props) {
  const pageContextual = useContext(PageContext);
  function loginLoader() {
    pageContextual.updatePage(<Login />);
    pageContextual.updateHighlight("Login");
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
