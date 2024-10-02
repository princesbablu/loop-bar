import { Container, Row, Col } from 'react-bootstrap';
import shap from "../assets/img/tokenmosshap.png"

export default function Tokenomics() {
  return (
    <div className='tokenomics position-relative z-1'>
       <Container>
        <Row>
          <Col xs={12} >
            <div className="tokenomics-title mb-3"><h5>tokenomics</h5></div>
             <div className='tokenomics-box' ></div>
             <div className="tokenomics-footer"><a href='#'>buyYYYY!!!</a></div>
          </Col>
        </Row>
       </Container>
       <div className='cricle position-absolute z-n1' ></div>
       <div className="tokenomics-shap position-absolute z-0"><img src={shap} alt="" /></div>
    </div>
  )
}
