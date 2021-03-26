import React from 'react';
import { slideInLeft,slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import logo from "./LOGO.jpg";
import './Welcome.css';
function Welcome(){
    const styles = {
        slideInLeft: {
          animation: 'x 2s',
          animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
        },
        slideInRight: {
            animation: 'x 2s',
            animationName: Radium.keyframes(slideInRight, 'slideInRight')
          }
      }
    return (
        <>
        {/* <h1>Welcome to AllChemist</h1> */}
        <StyleRoot>
      <div className="test" style={styles.slideInLeft}>
      <h1 style={{color:"#020336"}}>Welcome to AllChemist</h1>
      </div>
      <div> <br/><br/> </div>
      <div className="test" style={styles.slideInRight}>
      <img src={logo} width="450" height="200" alt="logo" style={{opacity: 0.98}}/>
      </div>
        </StyleRoot>
        <div> <br/><br/><br/><br/><br/><br/><br/><br/><br/> </div>
        </>
    );
}

export default Welcome;