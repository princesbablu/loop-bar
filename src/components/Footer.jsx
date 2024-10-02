import { Container, Row, Col } from 'react-bootstrap'
import Social from '../components/Social'

export default function Footer() {
  return (
    <div className='footer'>
          <div className="footer-top">

          </div>
          <div className="footer-bottom claim">
            <Container>
              <Row className='justify-content-center '>
                <Col xs={12} md={6} >
                   <div className="footer-bottom-content text-center">
                       <h2 className='mb-2'>social</h2>
                       <div className='d-flex justify-content-center mx-auto'>
                        <Social/>
                       </div>
                   </div>
                </Col>
              </Row>
            </Container>
          </div>
    </div>
  )
}
