import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

function About() {
  return (
    <>
      <Jumbotron>
        <h1>About Us</h1>
        <p style={{ textAlign: "left" }}>
          We intend to regularise and digitise the experience of a patient when
          he seeks some medical care. There have been cases when some reports
          are not accessible or some drugs sold illegally or one prescription
          used over multiple times which is considered as an abuse. We intend to
          build a system which would identify a patient, where he visited, what
          he visited for, where and when he received treatment and got the
          medicines. And the onus of maintaining all the data would be taken
          care of by our system. We intend to achieve this with due
          consideration to the privacy and the rights of a patient, doctor and
          their privileges.
        </p>
        {/* <p>
          <Button variant="primary">Learn more</Button>
        </p> */}
      </Jumbotron>

      <CardDeck>
        <Card>
          <Card.Img
            style={{ height: "250px" }}
            variant="top"
            src="https://i.pinimg.com/originals/68/fe/a2/68fea2a012cdd49ac888cbe9e95a7b6b.jpg"
          />
          <Card.Body>
            <h1 style={{textAlign:"center"}}>A Doctor</h1>
            <Card.Text style={{ textAlign: "left" }}>
              Gets all the records of their patients in a click without any
              hasle. Easy generation and retrieval of prescription in a secured
              session with the patient. An Emergency feature has also been
              provided in case if the patient is not in the state to give an
              explicit consent.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            style={{ height: "250px" }}
            variant="top"
            src="data:image/png;base64,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"
          />
          <Card.Body>
          <h1 style={{textAlign:"center"}}>A Patient</h1>
            <Card.Text style={{ textAlign: "left" }}>
              Has all his medical history managed and stored at a centralised
              and secured system. Can get the prescribed drugs at any pharmacy
              linked to us. Complete control over their medical records and can
              be accessed by the practitionar whith patient's consent.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            style={{ height: "250px" }}
            variant="top"
            src="https://www.freevector.com/uploads/vector/preview/25019/Pharmacy_Icons.jpg"
          />
          <Card.Body>
          <h1 style={{textAlign:"center"}}>A Pharmacy</h1>
            <Card.Text style={{ textAlign: "left" }}>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </>
  );
}

export default About;
