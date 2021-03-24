import React, { useContext, useEffect, useState } from "react";
import { Form, Input,Button } from 'antd';
import ApiService from "../../Service/ApiService";
import context from '../../context';
import AdminPage from "./AdminPage";

const RemoveHospital = () =>{
    const pageContext = useContext(context);
    const [marker, setMarker] = useState(false)
    const [id, setId] = useState("");
    
    const remove = () => {
        console.log(id)
       // userContext.updatePage(<HospitalRemoved  />);
        setMarker(true)
      } 
      const changeHandler = (e) => {
         setId(e.target.value);
      }

      useEffect(() => {
        if(marker){
          ApiService.removeHospital(id,pageContext.token)
          .then(res => {
            alert(res.data)},
            pageContext.updatePage(<AdminPage />)
            )
          .catch( error => console.log(error))
        }
      },[marker])

    return (
        <div>
            <Form.Item name='id' label="Id"  >
                <Input className='pcm' name='id' onChange={changeHandler} value={id}/>
            </Form.Item>
            <Button type="primary" onClick={remove}>
            Remove Hospital
              </Button>
        </div>
    )
}

export default RemoveHospital;