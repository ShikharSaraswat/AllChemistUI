import React, { useContext, useEffect, useState }from 'react';
import context from '../context';
import ApiService from '../Service/ApiService';
const History = ()=>{
  const userContext = useContext(context);
  const [id, setId] = useState("");
  const [history,setHistory] =  useState([]);
  //const [flag,setFlag] = useState("");
  
  
  function getHistory(){
    ApiService.fetchHistory(id,userContext.user.accessToken).then( res =>{
      setHistory(res.data)
     } ).catch( error =>
       console.log(error)
     )
  }

  console.log(history)
  
  function changeHandler(e){ 
      setId(e.target.value)
  }

    return(
        <div>
          <input type ='text' onChange={changeHandler} />
          <button onClick={getHistory}> Fetch History </button>
          </div>

    )
}

export default History;