import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../component/Gofood-Logo.png'

export default function Navbar() {
  return (
    <>
      <header className="p-2 bg-dark text-white d-flex fixed-top">
        <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img src={logo} className='h-12' alt="" />

        </Link>

        <div className="container">

          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">


            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
              <li><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
              <li><Link to="/menu" className="nav-link px-2 text-white">Menu</Link></li>

              <li><Link to="/offer" className="nav-link px-2 text-white">Offer<sup className='newoffer'>  new </sup></Link></li>
            </ul>

            {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
            </form> */}
            <div className="text-end">

              <Link to='/Cart'>
                <button type="button" className="btn btn-outline-light me-2">Cart</button>
              </Link>
            </div>


            <div className="text-end">

              <Link to='/login'>
                <button type="button" className="btn btn-outline-light me-2">Login</button>
              </Link>

            </div>
          </div>
        </div>
      </header>
    </>
  );
}
