import React, { useState } from 'react';
import Welcome from "./Components/Welcome";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BasicLayout from './Components/BasicLayout';
import PageContext from '../src/context';



function App() {

  const [page, setPage] = React.useState(<Welcome />);
  const [flag,setFlag] = useState("Login"); 
  const [user,setUser] = useState({}); 
  const [token,setToken] = useState("");
  const [marker,setMarker] = useState(true);
  const providerValue = {
    page,
    updatePage:(p)=>{
      setPage(p)
    },
    flag,
    updateFlag:(f)=>{
      setFlag(f)
    },
    user,
    updateUser:(u)=>{
      setUser(u)
    }
    ,
    token,
    updateToken:(t)=>{
      setToken(t)
    },
    marker,
    updateMarker : (m)=>{
      setMarker(m)
    }
  };

  return (
    <div className="App">
      <PageContext.Provider value={providerValue}>
      <BasicLayout  ></BasicLayout>
      {/* page={page} setPage={setPage} */}
      </PageContext.Provider>
      
    </div>
  );
}

export default App;
