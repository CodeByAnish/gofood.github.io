import React, { useState } from 'react'
import { Card, Row, Col, Button, Modal } from 'react-bootstrap'


const Pizza = ({ pizza }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const [varient, setvarient] = useState('small')
  const [quantity, setquantity] = useState(1)

  const order = () => {
    alert('order is add sussccessfully')

  }








  return (
    <>
      <Card style={{ width: '18rem', marginTop: '20px', maxWidth: '300px', height: '350px', cursor: 'pointer' }}>
        <Card.Img style={{ maxWidth: '300px', height: '200px', zoom: '10px' }} variant="top"
          src={pizza.image}
          onClick={handleShow} />
        <Card.Body>
          <Card.Title style={{ cursor: 'pointer' }}>{pizza.name}</Card.Title>
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Varients</h6>
                <select value={varient} onChange={e => setvarient(e.target.value)}>
                  {pizza.varients.map(varient => (
                    <option   >{varient}</option>
                  ))}

                </select>
              </Col>

              <Col md={6}>
                <h6>Quantity</h6>
                <select value={quantity} onChange={e => setquantity(e.target.value)}>
                  {[...Array(10).keys()].map((v, i) => (
                    <option value={i + 1} style={{ cursor: 'pointer' }}>{i + 1}</option>

                  ))}
                </select>
              </Col>

            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>Price :{pizza.prices['0'][varient] * quantity} /~Rs</Col>
            <Col md={6}> <Button variant="success" style={{ width: 'full' }}
              onClick={order}
            // onClick={handleShow}
            >Add To Buy

            </Button></Col>
          </Row>

        </Card.Body>
      </Card>

      <Modal className='' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              variant='top'
              src={pizza.image}
              style={{ height: '250px' }}
            />
          </div>
          <div>
            <h5>description:</h5>
            <h6>{pizza.description} </h6>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{ bg: 'red' }}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>









    </>
  )
}

export default Pizza;

