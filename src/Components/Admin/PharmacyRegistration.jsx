import React, { useContext, useEffect, useState } from "react";
import ApiService from "../../Service/ApiService";
import context from '../../context';
import { Form, Input, InputNumber, Button } from 'antd';

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

    useEffect(() => {
        if (marker) {
            ApiService.registerPharmacy(pharmacy, pageContext.token).then(res => {
                setMarker(false);
                console.log(res.data)
            }
            ).catch(error => {
                setMarker(false);
                console.log(error)
            }
            )
        }
    }, [marker])


    return (
        <div className="box">
            <h1 style={{ alignContent: 'center' }}> Register Pharmacy </h1>
            <Form {...layout} name="nest-messages"  >
                <Form.Item name='email' label="email">
                    <Input className='pcm' name='email' onChange={changeHandler} />
                </Form.Item>
                <Form.Item name='pharamcyName' label="PharmacyName">
                    <Input className='pcm' name='pharmacyName' onChange={changeHandler} />
                </Form.Item>
                <Form.Item name='licenseNumber' label="LicenseNumber">
                    <Input className='pcm' name='licenseNumber' onChange={changeHandler} />
                </Form.Item>
                <Form.Item name='password' type="password" label="password">
                    <Input className='pcm' name='password' type="password" onChange={changeHandler} />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" onClick={registerPharmacy} >
                        Add Pharmacy
                </Button>
                </Form.Item>

            </Form>
        </div>
    )

}

export default PharmacyRegistration;