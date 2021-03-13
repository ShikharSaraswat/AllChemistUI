import React, { useContext, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';
import ApiService from "../../Service/ApiService";
import PatientHome from "../Patient/PatientHome";
import HospitalHome from "../Hospital/HospitalHome";
import ErrorPage from "../ErrorPage";
import PageContext from '../../context';
import PharmacyHome from "../Pharmacy/PharmacyHome";



function Login() {
  const context = useContext(PageContext);

 

 
  
  //const [routeState,setRoutes] = useState(" ");

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  


  function changeHandling1(e) {
    const cred = {
      ...credentials
    }
    cred.username = e.target.value;
    setCredentials(cred);

  }
  function changeHandling2(e) {
    const cred = {
      ...credentials
    }
    cred.password = e.target.value;
    setCredentials(cred);

  }
 
  
  function signIn(e) {
    e.preventDefault();
   
    
    
    ApiService.signIn(credentials).then(res => {
        const user = res.data;
        localStorage.setItem("user", user);
        var role =user.roles[0];
        
        if (role ==='PATIENT') {
          context.updatePage(<PatientHome />);
          context.updateFlag("Logout");
        } else if (role === "HOSPITAL") {
          alert("in hospital");
          context.updatePage(<PatientHome />);
          context.updateFlag("Logout");
       } else if (role ==="PHARMACY") {
          context.updatePage(<PharmacyHome />);
          context.flag = "Logout";
        }
      

    }
    ).catch(err => {
      context.updatePage(<ErrorPage />);
  });
 }

//  if(flag===1){
//    navigate('/p');
   
  
// }else if(flag ===2){

// }else if(flag ===3){

// }

// useRedirect('/p', '/patient');
// const routeResult = useRoutes(routes);



  return (
    <div className="signup-form">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" name='username' value={credentials.username} onChange={changeHandling1} placeholder="Enter your username" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' value={credentials.password} onChange={changeHandling2} placeholder="Password" />
        </Form.Group>
        <Button onClick={signIn} variant="primary" type="submit">
          Login
  </Button>
      </Form>
    </div>
  );
}

export default Login;