import React from 'react';
import Welcome from "./Components/Welcome";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BasicLayout from './Components/BasicLayout';




function App() {

  const [page, setPage] = React.useState(<Welcome />);
  // const [state, dispatch] = useReducer(Reducer, initialState);
  // setPage(<Home />);
  // const pageContext=createContext(setPage);

  return (
    <div className="App">
      {/* <pageContext.Provider value={[
      page,setPage
    ]}>
      
      </pageContext.Provider> */}
      <BasicLayout page={page} setPage={setPage}></BasicLayout>
    </div>
  );
}

export default App;
