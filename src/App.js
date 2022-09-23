import { Container, Row, Col } from "react-bootstrap";
import ContactInput from "./components/ContactInput";
import ContactList from "./components/ContactList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
  return (
    <div>
      <h1 className="title" style={{ margin: 30 }}>
        연락처
      </h1>
      <Container>
        {/* Row : 가로줄 */}
        <Row>
          {/* Col : 세로 칸, lg={6} : 12칸 중 6의 비율로 차지*/}
          <Col lg={6}>
            <ContactInput />
          </Col>
          <Col lg={6}>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
