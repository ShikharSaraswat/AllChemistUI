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
  
  

  function getHistory() {
    ApiService.fetchHistory(id, userContext.user.accessToken).then(res => {
      setHistory(res.data)
    }).catch(error =>
      console.log(error)
    )
  }
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
                    <a className="dateAnchor">
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