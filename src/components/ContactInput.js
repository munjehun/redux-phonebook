import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

function ContactInput() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState();

  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, number } });
    setName("");
    setNumber("");
  };
  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNumber">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="number"
            placeholder="'-'없이 번호를 입력하세요"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit" //type이 submit이면 onClick이 아니라 onSubmit
        >
          추가
        </Button>
      </Form>
    </div>
  );
}

export default ContactInput;
