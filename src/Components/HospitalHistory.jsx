import React, { useContext, useEffect, useState } from 'react';
import context from '../context';
import ApiService from '../Service/ApiService';
import 'antd/dist/antd.css';
import { List, Avatar } from 'antd';
import "./GetHistory.css";




const HospitalHistory = () => {
  const userContext = useContext(context);
  const [id, setId] = useState("");
  const [history, setHistory] = useState([]);
  //const [flag,setFlag] = useState(false);
  const [image,setImage] = useState();
  const [imageId, setImageId] = useState("");


  const [marker,setMarker] = useState(false);
  
  function getHistory() {
    setMarker(true);
  }

  const fetchImage=(e)=>{
    
     setImageId(e.target.name);
    
  }

  

  useEffect(()=>{
     if(marker){
      ApiService.fetchHistory(id, userContext.user.accessToken).then(res => 
        setHistory(res.data.reverse()),
        setMarker(false)
        
      ).catch(error =>
        console.log(error)
      )
    
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[marker])

  useEffect(()=>{
     
    if(imageId){
      ApiService.getFiles(imageId,userContext.token).then(
        files => {const blob = new Blob([files.data],{type: 'application/pdf'})
        const url = window.URL.createObjectURL(blob)
        setImage(url)
        //  setFlag(false)  
         
         
      }
        ).catch(
        error => console.log("AMCPH :" + error)
      )
          
      //console.log(image)
      window.open(image);

  }
  setImageId(null)

// eslint-disable-next-line react-hooks/exhaustive-deps
  },[imageId])



  //   ApiService.fetchHistory(id, userContext.user.accessToken).then(res => {
  //     setHistory(res.data)
  //   }).catch(error =>
  //     console.log(error)
  //   )
  // }
  const styleList = (status) =>{
    if(status){
      return "listGreen";
    }
    return "listRed";
  };

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
          <button onClick={getHistory}> Fetch History </button>
        </div>
        <div>
          <List
            itemLayout="horizontal"
            dataSource={history}
            renderItem={item => (
             <div> <List.Item  className={styleList(item.status)}>
                <List.Item.Meta className="listtext"
                  avatar={<Avatar src="https://cdn0.iconfinder.com/data/icons/medicine-and-medical-equipment/512/diagnosis_prescription_report_doctor_consultation_document_medical_conclusion_flat_design_icon-512.png" />}
                  title={
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a className="dateAnchor" name={item.imageId} onClick={fetchImage} style={{ color: item.status ? "rgb(42, 139, 3)" : "rgba(245, 29, 13, 0.808)" }} >
                    {/* <a className="dateAnchor"> */}
                      {item.date}</a>}
                  description="To view Prescription click on the link" />
              </List.Item></div>
            )}
          />
        </div>

      </>
    )
  }

}

export default HospitalHistory;