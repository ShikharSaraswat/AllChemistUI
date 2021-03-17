import React,{ useContext, useEffect, useState }from "react";
import { Button } from 'antd';
import context from "../../context";
import HospitalRegistration from "./HospitalRegistration";
import PharmacyRegistration from "./PharmacyRegistration";


const AdminPage = () =>{
    const userContext = useContext(context);
    
   const registerHospital =() =>
   {
    userContext.updatePage(<HospitalRegistration />);
   }

  //  const cancelHospital =() =>
  //  {
  //   userContext.updatePage(<CancelHospital  />);
  //  }


   const registerPharmacy =() =>
   {
    userContext.updatePage(<PharmacyRegistration  />);
   }

  //  const cancelPharmacy =() =>
  //  {
  //   userContext.updatePage(<CancelPharmacy  />);
  //  }



    return(
        <>
        <h3>Welcome to admin </h3>
        <Button type="primary" onClick={registerHospital}>
            Register Hospital
              </Button>
         {/* <Button type="primary" onClick={cancelHospital}>
            Cancel Hospital
              </Button> */}
        <Button type="primary" onClick={registerPharmacy}>
            Register Pharmacy
              </Button>
        {/* <Button type="primary" onClick={cancelPharmacy}>
            Cancel Pharmacy 
              </Button>  */}
        </>
    )}

export default AdminPage;