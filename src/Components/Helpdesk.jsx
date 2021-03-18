import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;

function Helpdesk() {
  return (
    <>
      <div>
        <img
          src="https://www.badgemaster.co.uk/wp/wp-content/uploads/2019/07/Help-Button-Badges-1024x700.jpg"
          alt="Happy to help"
        />
      </div>
      <Collapse accordion>
        <Panel header="What can you do with this app?" key="1">
          <p style={{textAlign:"left"}}><strong>If you are a doctor:</strong> <br />
    &nbsp;&nbsp;&nbsp;&nbsp;Filing prescription is now easy, just a few clicks away.<br />
    &nbsp;&nbsp;&nbsp;&nbsp;Prescription is automatically linked to the patient's medical history.<br />
    <strong>  If you are a patient:</strong><br />
    &nbsp;&nbsp;&nbsp;&nbsp;No need to worry about your medical records,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;access all of it in one go!<br />
    <strong> If you are a pharmacy vendor:</strong><br />
    &nbsp;&nbsp;&nbsp;&nbsp;Our App takes care of the validity of the prescription,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;you can invalidate the prescription after successful delivery of the order.</p>
        </Panel>
        <Panel header="How to register as a Hospital or Pharmacy?" key="2">
          <p style={{textAlign:"left"}}>To register yourself as a Hospital or Pharmacy please mail your attested details<br/>
              to our admin team at admin@allchemist.com.<br/>
             You will be provided with your credentials on your email address, once your details have been verified. 
          </p>
        </Panel>
        <Panel header="Is my information safe?" key="3">
         <p style={{textAlign:"left"}}> We ensure complete secrecy and employ tight security on our application so that our users <br/>
          can avail our services without having to worry about data leaks.<br/>
          PS :- Complete confidentiality and privacy in healthcare is ensured.</p>
        </Panel>
      </Collapse>
    </>
  );
}

export default Helpdesk;
