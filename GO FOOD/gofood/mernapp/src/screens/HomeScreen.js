import React from 'react'
import Allpiza from './imagedata'
import Pizza from '../component/Pizza'
import { Container, Row, Col } from 'react-bootstrap'



function HomeScreen() {
  return (
    <>
      <Container>
        <Row>
          {
            Allpiza.map(pizza => (
              <Col md={3}>
                <Pizza pizza={pizza} />
              </Col>
            ))
          }
        </Row>
      </Container>

    </>
  )
}

export default HomeScreen
