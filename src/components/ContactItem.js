import React from "react";
import { Col, Row } from "react-bootstrap";

function ContactItem({ name, number }) {
  return (
    <Row>
      <Col lg={1}>
        <img
          src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-contact-outline-512.png"
          alt="contact"
          width={50}
        />
      </Col>
      <Col lg={5}>
        <div>{name}</div>
        <div> {number}</div>
      </Col>
    </Row>
  );
}

export default ContactItem;
