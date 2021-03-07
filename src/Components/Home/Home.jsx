import Avatar from "../Avatar";
import React from "react";
import ControlledCarousel from "./ControlledCarousel";

function Home(){
    return(
        <>
        <ControlledCarousel></ControlledCarousel>
        <Avatar />  <Avatar /> <Avatar />
        </>
    );
}


export default Home;