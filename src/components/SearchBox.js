import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

function SearchBox() {
  return (
    <Row>
      {/* col은 12등분이므로 */}
      <Col lg={10}>
        <Form.Control type="text" placeholder="이름을 입력하세요" />
      </Col>
      <Col lg={2}>
        <Button variant="primary">찾기</Button>
      </Col>
    </Row>
  );
}

export default SearchBox;
