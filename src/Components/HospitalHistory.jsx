import React, { useContext, useEffect, useState } from 'react';
import context from '../context';
import ApiService from '../Service/ApiService';
import 'antd/dist/antd.css';
import { List, Avatar } from 'antd';




const HospitalHistory = () => {
  const userContext = useContext(context);
  const [id, setId] = useState("");
  const [history, setHistory] = useState([]);
  //const [flag,setFlag] = useState("");


  function getHistory() {
    ApiService.fetchHistory(id, userContext.user.accessToken).then(res => {
      setHistory(res.data)
    }).catch(error =>
      console.log(error)
    )
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
          <button onClick={getHistory}> Fetch History </button>
        </div>
        <div>
          <List
            itemLayout="horizontal"
            dataSource={history}
            renderItem={item => (
              <List.Item  >
                <List.Item.Meta
                  avatar={<Avatar src="https://cdn0.iconfinder.com/data/icons/medicine-and-medical-equipment/512/diagnosis_prescription_report_doctor_consultation_document_medical_conclusion_flat_design_icon-512.png" />}
                  title={
                    <a style={{ color: item.status ? "rgb(42, 139, 3)" : "rgba(245, 29, 13, 0.808)" }} >
                      {item.id} &nbsp; &nbsp; &nbsp; {item.date}</a>}
                  description="To view Prescription click on the link" />
              </List.Item>
            )}
          />
        </div>

      </>
    )
  }

}

export default HospitalHistory;