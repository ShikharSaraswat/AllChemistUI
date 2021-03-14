import React,{useContext}from 'react';
import context from '../../context';
import HospitalPage from './HospitalPage';

function HospitalHome(){
  const userContext = useContext(context);
  const user = userContext.user;
  
    return(
        <div>
            <HospitalPage user={user}/>
        </div>   
       
    );
}

export default HospitalHome;