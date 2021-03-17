import React, { useContext, useEffect, useState }from 'react';
import '../Patient/PatientHome.css';
import 'tachyons';
import context from '../../context';
import ApiService from '../../Service/ApiService';
import ErrorPage from '../ErrorPage';
import { Form, Input, InputNumber, Button } from 'antd';
import PatientHistory from '../PatientHistory';

const PatientHome = () => {
  const userContext = useContext(context);
  const USER_API_BASE_URL = 'http://localhost:8080/AllChemist/patient/details/';
  const user = userContext.user;
  const [patient,setPatient] = useState(userContext.user);
  //console.log(user);
  const marker = userContext.marker
  const [flag, setFlag] = useState(false);
  

  function viewHistory() {
 
    userContext.updatePage(<PatientHistory  />);
  }
  function updatePatient() {
    
    
    setFlag(true)
    console.log(patient);
    
    

  }
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  function changeHandler(e) {
    const value = e.target.value;
    setPatient({
      ...patient,[e.target.name] : value
    });
  }
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
    
    if(marker){
    ApiService.fetchPatientById(user.roleId,user.accessToken).then( res =>{
      
      userContext.updateUser(res.data)
      console.log("API call from patient home")
      setPatient(res.data)
      userContext.updateMarker(false)
      
     } ).catch( e =>
      userContext.updatePage(< ErrorPage error={e} />)
     )}
    
     if(flag){
       console.log(patient);
      ApiService.updatePatient(patient,userContext.token).then(res =>
        alert("Patient Added"),
        //setMarker(true)
        //setFlag(false)
      ).catch((e) =>{
        userContext.updatePage(< ErrorPage error={e} />)
      }
      );
    }
    
    }, [marker,flag])

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
      <div className='box' >
      <Form {...layout} name="nest-messages"  >
        <Form.Item name='Username' label="username"  >
          <Input className='pcm' name='name' onChange={changeHandler} placeholder={patient.name} value={patient.name} />
        </Form.Item>
        <Form.Item
          name='Email'
          label="Email"
          value={patient.email}
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input className='pcm' name='email' onChange={changeHandler} disabled placeholder={patient.email} value={patient.email} />
        </Form.Item>
        <Form.Item
          name='Date of Birth'
          label="DOB"
          value={patient.dateOfBirth}
          rules={[
            {
              type: 'date',
              min: 0,
              max: 99,
            },
          ]}
        >
          <Input type='text' name='dateOfBirth' disabled className='pcm' onChange={changeHandler} value={patient.dateOfBirth} placeholder={patient.dateOfBirth} />
        </Form.Item>
        <Form.Item name='address' label="address" >
          <Input.TextArea className='pcm' name='address' onChange={changeHandler} value={patient.address} placeholder={patient.address} />
        </Form.Item>
        <Form.Item name='weight' label="Weight" >
          <Input className='pcm' name='weight' onChange={changeHandler} value={patient.weight} placeholder={patient.weight} />
        </Form.Item>
        <Form.Item name='Height' label="Height" >
          <Input className='pcm' name='height' onChange={changeHandler} type='text' value={patient.height} placeholder={patient.height} />
        </Form.Item>
        <Form.Item name='bloodGroup' label="BloodGroup" >
          <Input className='pcm' name='BG' onChange={changeHandler} disabled value={patient.bloodGroup} placeholder={patient.bloodGroup} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" onClick={updatePatient}>
            Update Details
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button type="primary" onClick={viewHistory}>
            View Prescription History
              </Button>
        </Form.Item>
      </Form>
    </div>
      </div>
    );
}

export default PatientHome;