import React,{useContext}from 'react';
import context from '../../context';
import HospitalPage from './HospitalPage';

const HospitalHome = () => {
  const userContext = useContext(context);
  const user = userContext.user;
  
    return(
        <div>
            <h1 style={{textAlign: 'center'}}>WELCOME {user.username.toUpperCase()}</h1>
            <HospitalPage user={user}/>
        </div>   
       
    );
}

export default HospitalHome;