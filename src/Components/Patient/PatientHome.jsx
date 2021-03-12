import React from 'react';
import '../Patient/PatientHome.css';
import PatientProfileForm from '../../PatientProfileForm';
import '../../Components/PatientProfileForm.css';
import 'tachyons';


function PatientHome(){

  const patient = 
{
  Name: 'Moshe Levi',
  "Email": "levimoshe770@gmail.com",
  "Address": "Leon Blum 62, Haifa, Israel",
  "Phone": "0546461337",
  "Avatar": "images/1412349_695378430473055_348033406_o.jpg",
  "DOB": new Date('1966-06-11'),
  "Gender": "Male",
  "ConnectedPhysician": "k79dG9jrazd73uQet"
}

    return(
      <div className='statebasic-nogrid patientstate'>
      <PatientProfileForm  className='gr-2-2'
      patient={patient}/>
      </div>
    );
}

export default PatientHome;