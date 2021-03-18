import React, { useContext, useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import './HospitalPage.css';
import context from '../../context';
import ApiService from '../../Service/ApiService';
import UploadImages from '../Image/UploadImage';
import HospitalPage from './HospitalPage';
import HospitalHome from './HospitalHome';


const RegisterPatient = (props) => {
  const pageContext = useContext(context);

  const [image,setImage] = useState();
  const [marker,setMarker] = useState(false);
  const [flag,setFlag] = useState(false);
  
  const [presc, setPresc] = useState({
    "id": "",
    "patientId": " ",
    "date": new Date().toISOString().slice(0,10),
    "imageId": " ",
    "status": 1,
    "name": " ",
    "email": "",
    "age": "",
    "bloodGroup": " ",
    "description": " ",
    "bloodPressure": " ",
    "prescriptionDetails":" "
  });

  // private int id;
	// private String name;
	// private int patientId;
	// private String email;
	// private LocalDate date;
	// private int age;
	// private BloodGroup bloodGroup;
	// private String description;
	// private String bloodPressure;
	// private String prescriptionDetails;
	
	// private int imageId;
	
	// private boolean status;

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  function savePrescription() {
    window.print();
  }

  function addPrescription(){
  console.log(presc);
  setFlag(true);
    
  }
  
  const changeHandler = (e) => {
    const value = e.target.value
    const name = e.target.name
    setPresc({
        ...presc,
        [name]: value
    });
    console.log(presc);
  };


  const uploadImage = ()=>{
   setMarker(true);
  }
  const fileHandler = (event)=>{
    setImage(event.target.files[0]);
    console.log(event.target.files[0]);
  }

  useEffect(()=> {
    const newLocal = marker && image && pageContext.token;
    if(newLocal){
      ApiService.upload(image,pageContext.token).then(
        response =>  setPresc({...presc,imageId:response.data}) ,
        setMarker(false),alert("Image uploaded successfully, click on 'Save Prescription' to proceed")
        
      ).catch(
        error => console.log("AMCPH :" + error)
      );
     
    }
    if(flag){
      ApiService.savePrescription(presc,pageContext.token).then(
        response => alert(response.data),
        setFlag(false)
      ).catch(
        error => alert("AMCPH : Prescription could not be added")
      )
      pageContext.updatePage(<HospitalHome />)
    }
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[marker,flag])

  /*const fileHandler = (e) => {
    const reader = new FileReader()
    const value = reader.readAsBinaryString(e.target.files[0])
    const name = e.target.name
    setPresc({
        ...presc,
        [name]: value
    });
    console.log(presc);
  };*/

  // ApiService.createPrescription(presc, pageContext.token).then(res => 
  //   alert(presc)
  //   ).catch((error) =>{
  //       console.log(error);
  //   });

  return (

  <div className='box' >
    <h1 style={{ alignContent: 'center' }}> Prescription </h1>
    <Form {...layout} name="nest-messages"  >
      <Form.Item name='Username' label="Name">
        <Input name="name" onChange={changeHandler} className='pcm' />
      </Form.Item>
      <Form.Item  label="ID" >
        <Input type='text' name='patientId' className='pcm' value = {presc.patientId} onChange={changeHandler} />
      </Form.Item>
      <Form.Item
        name='Email'
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input name="email" onChange={changeHandler} className='pcm' />
      </Form.Item>
      <Form.Item
        name='age'
        label="Age"
      >
        <Input name="age" onChange={changeHandler} type='text' className='pcm' />
      </Form.Item>
      <Form.Item name='BloodGroup' label="BloodGroup" >
        <select name="bloodGroup" onChange={changeHandler} className='pcm'>
          <option value="A_POSITIVE" defaultValue>A+</option>
          <option value="A_NEGATIVE">A-</option>
          <option value="B_POSITIVE">B+</option>
          <option value="B_NEGATIVE">B-</option>
          <option value="AB_POSITIVE">AB+</option>
          <option value="AB_NEGATIVE">AB-</option>
          <option value="O_POSITIVE">O+</option>
          <option value="O_NEGATIVE">O-</option>
        </select>
      </Form.Item>
      <Form.Item name='description' label="Description" >
        <Input.TextArea name="description" onChange={changeHandler} className='pcm' />
      </Form.Item>
      <Form.Item name='bloodPressure' label="BP" >
        <Input name="bloodPressure" onChange={changeHandler} className='pcm' />
      </Form.Item>
      <Form.Item name='prescriptionDetails' label="Prescription Details" >
        <Input.TextArea name="prescriptionDetails" onChange={changeHandler} className='pcm' />
      </Form.Item>
      {/* <Form.Item  label="Image ID" >
        <Input  name='imageId' className='pcm' disabled onChange={changeHandler} />
      </Form.Item> */}
      <Form.Item  label="Prescription File" >
        <div className="row">
          <div className="col-8">
            <label className="btn btn-default p-0">
              <input type="file" name='prescriptionFile' accept="image/*" onChange={fileHandler} />
            </label>
          </div>

          <div className="col-4">
            <button onClick={uploadImage}
              className="btn btn-success btn-sm"
              
            >
              Upload
            </button>
          </div>
        </div>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" onClick = {savePrescription}>
          Save
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button type="primary" onClick = {addPrescription}>
          Save Prescription
              </Button>
      </Form.Item>
    </Form>
  </div>
  );
};



export default RegisterPatient;