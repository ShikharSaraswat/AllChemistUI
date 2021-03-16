import React, { useContext, useEffect, useState }from 'react';
import '../Patient/PatientHome.css';
import 'tachyons';
import context from '../../context';
import ApiService from '../../Service/ApiService';
import ErrorPage from '../ErrorPage';
import axios from 'axios';
import useAxios from "axios-hooks";
import PatientHome2 from './PatienHome2';


function PatientHome(){
  const userContext = useContext(context);
  const USER_API_BASE_URL = 'http://localhost:8080/AllChemist/patient/details/';
  const user = userContext.user;
  console.log(user);
  

  // axios.interceptors.response.use(
  //   (response) => userContext.updateUser(response.data),
  //   async (error) => {
  //     const config = error.config;
  
  //     if (error) {
  //       return axios(config);
  //     }
  
  //     return Promise.reject(error);
  //   }
  // );

  // const [{ data, loading, error }, refetch] = useAxios(
  //     USER_API_BASE_URL
  // );

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error!</p>;
    
  useEffect(() =>{
    

    ApiService.fetchPatientById(user.roleId,user.accessToken).then( res =>{

      userContext.updateUser(res.data);
      userContext.updateMarker(false);
      console.log(userContext.user)
      
     } ).catch( error =>
       console.log(error)
     )
  })
    // .catch( err =>
     //  userContext.updatePage(<ErrorPage />)
    // )
  // axios
  //   .get(USER_API_BASE_URL+user.roleId, { headers: {"Authorization" : `Bearer ${user.accessToken}`} })
  //   .then(res => {
  //     const user = res.data;
  //     userContext.updateUser(user);
  //      console.log('profile is:', res.data);
  //     })
      //.catch(error => console.log(error))

  //alert(JSON.stringify(patient));
// {
//   Name: 'Moshe Levi',
//   "Email": "levimoshe770@gmail.com",
//   "Address": "Leon Blum 62, Haifa, Israel",
//   "Phone": "0546461337",
//   "Avatar": "images/1412349_695378430473055_348033406_o.jpg",
//   "DOB": new Date('1966-06-11'),
//   "Gender": "Male",
//   "ConnectedPhysician": "k79dG9jrazd73uQet"
// }
 
   
    return(
      //<div className='statebasic-nogrid patientstate'>
        
      /* <PatientProfileForm  className='gr-2-2'
      patient={userContext.user}/>*/
      <div>
      <PatientHome2 patient={userContext.user} />
      </div>
    );
}

export default PatientHome;