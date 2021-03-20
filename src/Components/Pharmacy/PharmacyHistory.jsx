import React, { useContext, useEffect, useState } from 'react';
import context from '../../context';
import ApiService from '../../Service/ApiService';
import 'antd/dist/antd.css';
import { List, Avatar } from 'antd';
import "../GetHistory.css";
//import PharmacyPage from './PharmacyPage';
import PharmacyHome from './PharmacyHome';




const PharmacyHistory = () => {

  const [flag,setFlag] = useState(false);
  const userContext = useContext(context);
  const [id, setId] = useState("");
  const  [history, setHistory] = useState([]);
  const [imageId, setImageId] = useState("");
  const [image,setImage] = useState();
  const [marker,setMarker] = useState(false);
  const [toggle,setToggle] = useState(false);
  const fetchImage=(e)=>{
    
    setImageId(e.target.name);
    setToggle(true)
   
 }
  
  useEffect(()=>{

    if(flag){
    ApiService.viewPrescription(id,userContext.token).then(res => {
       setHistory(res.data)
       console.log(history)
       setFlag(false)
    }).catch(error =>
      console.log(error)
    )
    }


  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[flag])


  useEffect(()=>{
     
    if(toggle){
      ApiService.getFiles(imageId,userContext.token).then(
        files => {const blob = new Blob([files.data],{type: 'application/pdf'})
        const url = window.URL.createObjectURL(blob)
        setImage(url)
         setFlag(false) 
         setToggle(false) 
         
         
      }
        ).catch(
        error => console.log("AMCPH :" + error)
      )
          
      console.log(image)
      window.open(image);

  }
  setImageId(null)

// eslint-disable-next-line react-hooks/exhaustive-deps
  },[toggle])


  useEffect(()=>{
    if(marker){
      ApiService.invalidatePrescription(id,imageId,userContext.token).then(
        res => alert(res.data),userContext.updatePage(<PharmacyHome />),setMarker(false)
      ).catch(
        error=> console.log(error)
      )


    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[marker])


  const getHistory=()=> {
      setFlag(true);  

  }

  const styleList = (status) =>{
    if(status){
      return "listGreen";
    }
    return "listRed";
  };

  const invalidate = (e) =>{
    setImageId(e.target.name);
    setMarker(true);
  }

  




  function changeHandler(e) {
    setId(e.target.value)
  }
  if (history.length === 0) {
    return (
      <div>
        <input type='text' onChange={changeHandler} />
        <button onClick={getHistory}> Fetch History </button>
      </div>

    )
  }
  else {
    return (
      <>
         <div>
          <input type='text' onChange={changeHandler} />
          <button onClick={getHistory}> Fetch Prescription </button>
        </div>
        <div>
          <List
            itemLayout="horizontal"
            dataSource={history}
            renderItem={item => (
              <List.Item className={styleList(item.status)}
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              actions={[<a name={item.imageId} onClick={invalidate} key="list-loadmore-edit">Invalidate</a>]}>
              
                <List.Item.Meta
                  className="listtext"
                  avatar={<Avatar src="https://cdn0.iconfinder.com/data/icons/medicine-and-medical-equipment/512/diagnosis_prescription_report_doctor_consultation_document_medical_conclusion_flat_design_icon-512.png" />}
                  title={
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a onClick={fetchImage} name={item.imageId} className="dateAnchor" style={{ color: item.status ? "rgb(42, 139, 3)" : "rgba(245, 29, 13, 0.808)" }} >
                      {item.date}</a>}
                  description="To view Prescription click on the link" />
              </List.Item>
            )}
          />
        </div> 

      </>
    )
  }

}

export default PharmacyHistory;