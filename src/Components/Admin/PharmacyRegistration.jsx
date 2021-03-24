import React, { useContext, useEffect, useState } from "react";
import ApiService from "../../Service/ApiService";
import context from '../../context';
import { Form, Input, Button } from 'antd';
import AdminPage from "./AdminPage";

const PharmacyRegistration = () => {
    const pageContext = useContext(context);
    const [marker, setMarker] = useState(false)
    const [pharmacy, setPharmacy] = useState({
        "id": "",
        "email": "",
        "pharmacyName": "",
        "licenseNumber": "",
        "password": ""
    })

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    const changeHandler = (e) => {
        const value = e.target.value;
        setPharmacy({
            ...pharmacy, [e.target.name]: value
        });
    }

    const registerPharmacy = () => {
        //console.log(pharmacy)
        setMarker(true)
    }

    const validateForm = () => { 
    
        var email =  document.getElementById('email');

        var name =  document.getElementById('name');

        var license = document.getElementById('license');

        var password =  document.getElementById('password');
    
        
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
        if (email.value === "") { 
                window.alert("Please enter a valid e-mail address."); 
                email.focus(); 
                return false; 
        }else if(!(email.value.match(emailRegex))){
          window.alert("Please enter a valid e-mail address."); 
          return false;
        }
        if ((name.value.length>20) || (name.value.length<3)) { 
            window.alert("Please enter your name, Size must be less than 20 characters.");
            name.focus(); 
            return false; 
        }

        if (license.value === "") { 
            window.alert("Please enter your License Number.");
            license.focus(); 
            return false; 
        }
    
        var passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{8,}$/ ;
    
        if (password.value === "") { 
                window.alert("Please enter password.");
                password.focus(); 
                return false; 
        }else if(!(password.value.match(passwordRegex))){
          window.alert('Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters');
          return false;
        }
    
        registerPharmacy();
      }

    useEffect(() => {
        if (marker) {
            ApiService.registerPharmacy(pharmacy, pageContext.token)
            .then(res => {
                alert("Pharmacy registered successfully with ID : "+res.data.id)
                pageContext.updatePage(<AdminPage />)
                setMarker(false);
            }
            ).catch(error => {
                alert("Pharmacy could not be added, try again")
                setMarker(false);
            }
            )
        }
    }, [marker])


    return (
        <div className="box">
            <h1 style={{ alignContent: 'center' }}> Register Pharmacy </h1>
            <Form {...layout} name="nest-messages"  >
                <Form.Item name='email' label="email">
                    <Input id="email" className='pcm' name='email' onChange={changeHandler} />
                </Form.Item>
                <Form.Item name='pharamcyName' label="PharmacyName">
                    <Input id="name" className='pcm' name='pharmacyName' onChange={changeHandler} />
                </Form.Item>
                <Form.Item name='licenseNumber' label="LicenseNumber">
                    <Input id="license" className='pcm' name='licenseNumber' onChange={changeHandler} />
                </Form.Item>
                <Form.Item name='password' type="password" label="password">
                    <Input id="password" className='pcm' name='password' type="password" onChange={changeHandler} />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" onClick={validateForm} >
                        Add Pharmacy
                </Button>
                </Form.Item>

            </Form>
        </div>
    )

}

export default PharmacyRegistration;