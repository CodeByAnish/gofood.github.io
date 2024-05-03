import React from 'react'
import Navbar from '../component/Navbar'




function Order() {


  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='mt-20 container order   '>

        <form class="row g-4 needs-validation" novalidate>


          <div class="col-md-6">
            <label for="validationCustomUsername" class="form-label">Username</label>
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend">@</span>
              <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
              <div class="invalid-feedback">
                Please choose a username.
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <label for="validationCustom02" class="form-label">Email</label>
            <input type="email" class="form-control" id="validationCustom02" value="" required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-6">
            <label for="validationCustom03" class="form-label">City</label>
            <input type="text" class="form-control" id="validationCustom03" required />
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div class="col-md-6">
            <label for="validationCustom04" class="form-label">State</label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">Choose...</option>

              <select selected disabled value="">.....</select>

              <select selected disabled value="">delhi</select>
              <select disabled value="">uttarpradesh</select>
              <select selected disabled value="">Bihar</select>
              <option selected disabled value="">Chhattisgarh</option>
              <option selected disabled value="">Gujarat</option>
              <option selected disabled value="">Haryana</option>
              <option selected disabled value="">Jharkhand</option>
              <option selected disabled value="">Punjab</option>
              <option selected disabled value="">Tamil Nadu</option>
              <option selected disabled value="">Uttarakhand</option>
            </select>





            <div class="invalid-feedback">
              Please select a valid state.
            </div>
          </div>

          <div class="col-md-3">
            <label for="validationCustom05" class="form-label">Pin Code</label>
            <input type="number" class="form-control" id="validationCustom05" required />
            <div class="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>

          <div class="col-md-5">
            <label for="validationCustom05" class="form-label">Card Number</label>
            <input type="number" class="form-control" id="validationCustom05" required />
            <div class="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom02" class="form-label">CVV</label>
            <input type="text" class="form-control" id="validationCustom02" value="CVV" required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>

          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
              <label class="form-check-label" for="invalidCheck">
                Agree to comform paymat
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-warning" type="submit">Paymat</button>
          </div>
        </form >




      </div >
    </>
  )
}

export default Order
