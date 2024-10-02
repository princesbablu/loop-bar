import { Col, Container, Row } from "react-bootstrap";
import tvimg from "../assets/img/tvimg.png"

export default function TvImage() {
  return (
    <div className="tv howto">
       <Container>
        <Row className="justify-content-center ">
          <Col xs={12} md={10} lg={8} >
             <div className="tv-image"><img src={tvimg} alt="" /></div>
          </Col>
        </Row>
       </Container>
    </div>
  )
}
