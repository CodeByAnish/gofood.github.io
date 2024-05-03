import React from 'react'
import Navbar from '../component/Navbar'
import offerdata from './offerdata'
import { Col } from 'react-bootstrap'
import Footer from '../component/Footer'


function Offer() {
  return (
    <>
      <div>
        <Navbar />

      </div>


      <div className='container' style={{ marginTop: '40px' }}>
        <h1 className='restaurent'>Restaurants With Great Offers Near Me</h1>
        <hr />
        <div className='containeroffer'>
          <div className='offercontainer'>
            {
              offerdata.map((elem) => {
                return (
                  <div className='cardcontainer' key={elem.id}>
                    <img className='offerimg' src={elem.images} />
                    <p className='offerdisco'>{elem.discount}</p>
                    <Col md={12} className='titleoffer '>{elem.rating} || {elem.title} </Col>
                    <p className='aboutoffer'> {elem.aboutoffer}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <hr />
      </div>

      <div>
        <Footer />
      </div>




    </>
  )
}

export default Offer
