import React, { useContext, useEffect, useState } from "react";
import { Button } from 'antd';
import context from "../../context";
import HospitalRegistration from "./HospitalRegistration";
import PharmacyRegistration from "./PharmacyRegistration";
import RemoveHospital from "./RemoveHospital";
import RemovePharmacy from "./RemovePharmacy";
import Login from "../Form/Login";
import "./AdminPage.css";
import PageContext from '../../context';


const AdminPage = () => {
  const userContext = useContext(context);
  const pageContextual = useContext(PageContext);


  const registerHospital = () => {
    userContext.updatePage(<HospitalRegistration />);
  }

  const removeHospital = () => {
    userContext.updatePage(<RemoveHospital />);
  }


  const registerPharmacy = () => {
    userContext.updatePage(<PharmacyRegistration />);
  }

  const removePharmacy = () => {
    userContext.updatePage(<RemovePharmacy />);
  }
  const logout = () => {
    //alert(JSON.stringify(userContext.user));
    userContext.updateUser({});
    userContext.updateToken("");
    userContext.updatePage(<Login />);
    pageContextual.updateFlag("Login");
  }


  return (
    <div className="adminBox">
      <div><h3 > administrator authority page </h3></div>
      <div>
        <Button className="buttonCard" type="primary" onClick={registerHospital}>
          Register Hospital
              </Button>

        <Button className="buttonCard" type="primary" onClick={removeHospital}>
          Remove Hospital
              </Button>
        <br />
        <Button className="buttonCard" type="primary" onClick={registerPharmacy}>
          Register Pharmacy
              </Button>

        <Button className="buttonCard" type="primary" onClick={removePharmacy}>
          Remove Pharmacy
              </Button>
        <br />
      </div>
      <Button className="logout" type="primary" onClick={logout}>
        Log Out
              </Button>
    </div>
  )
}

export default AdminPage;