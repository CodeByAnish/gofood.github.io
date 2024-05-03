import React from 'react'
import Navbar from '../component/Navbar'
import { Link } from 'react-router-dom'
import { Col, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'



function Cart() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className=' ' style={{ marginTop: '70px' }} >

        <section className='cart cursor-pointer'>
          <div className='order container mx-auto w-1/2'>
            <div className='flex items-center border-b border-gray-300 pb-4'>
              <img src="/cart/cart-black.png" alt="" />
              <h1 className='font-bold ml-4 text-2xl'>Order Summary</h1>
            </div>
            <div className='pizza-list flex items-center justify-between '>
              <div>
                <img src="/cart/pizza.png" alt="" className='w-20 pt-1 mx-12 mb-1' />
              </div>
              <div className=''>
                <h6 className=''>
                  La Pinoz Pizza
                </h6>
              </div>
              <div className=''>
                small
              </div>
              <div className='mr-10'>
                <h6> Rs 150</h6>
              </div>
            </div>
            <hr />
            <div className='pizza-list flex items-center justify-between'>
              <div>
                <img src="/imagesst/download5.jpeg" alt="" className='w-20 pt-2 mx-12' />
              </div>
              <div className=''>
                <h6 className=''>
                  Burger
                </h6>
              </div>
              <div className=''>
                large
              </div>
              <div className='mr-10'>
                <h6> Rs 399</h6>
              </div>
            </div>
            <hr />
            <div className='pizza-list flex items-center justify-between'>
              <div>
                <img src="/imagesst/download1.jpeg" alt="" className='w-20 pt-1 mx-12' />
              </div>
              <div className=''>
                <h6 className=''>
                  Rasgulla
                </h6>
              </div>
              <div className=''>
                medium
              </div>
              <div className='mr-10'>
                <h6> Rs 250</h6>
              </div>
            </div>
            <hr />

            <div className='container flex items-center justify-between '>
              <div >
                <Col md={12}>
                  <Link to='/menu'>
                    <Button variant="warning" style={{ width: 'full' }}
                    >+  Add
                    </Button>
                  </Link>
                </Col>
              </div>
              <div>
                <Col md={6} className='text-bold cursor-pointer'>
                  {/* <label className='text-bold fw-900' htmlFor="location">Location : </label> */}
                  <h5>Location :</h5>

                </Col>

                <input className='border color-black py-2 px-12 text-bold' type="text" placeholder='Enter your Location' />
                <Col md={6} className='mt-3'>
                  <Link to='/order'>
                    <Button variant="warning" style={{ width: 'full' }}
                    >Order
                    </Button>
                  </Link>
                </Col>

              </div>

            </div>


          </div>




        </section>

        {/* 
        <div className='empty-cart py-16 background-gray-500'>
          <div className='container mx-auto text-center'>
            <h1 className='text-3xl font-bold mb-2'>Cart Empty</h1>
            <p className='text-gray-500 text-lg mb-12 '> You probably haven't ordered a pizza yet. <br></br> To order a food . go to the main page </p>
            <img className='w-2/5 mx-auto' src="/cart/empty-cart.png" alt="" />

            <Link to="/menu" className='inline-block px-6 py-2 rounded-full btn-primary text-white font-bold mt-12'>Go back
            </Link>

          </div>
        </div> */}


      </div>



    </>
  )
}

export default Cart
