import { Container, Row, Col } from "react-bootstrap"
import funytagbg from "../assets/img/funytagbg.jpg"
import PageMarquee from './PageMarquee'
export default function FunnyTagline() {
  return (
    <div className='about position-relative'>
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <img className='w-100 h-auto' src={funytagbg} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
