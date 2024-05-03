import React from 'react'
import logo from './Whoare'

const WhoAreWe = () => {
  return (
    <>
      <section className='who_are_we' id='who_are_we'>
        <div className="container">
          <div className="text_banner">
            {
              logo.slice(0, 2).map(element => (
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{ fontWeight: "300" }}>{element.number}</h1>
                  <p>{element.title}</p>
                </div>
              ))
            }
          </div>
          <div className="image_banner">
            <img className='gradient_bg' src="center.svg" alt="gradientBg" />
            <img src="whoweare.png" alt="food" />
          </div>
          <div className="text_banner">
            {
              logo.slice(2).map(element => (
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{ fontWeight: "300" }}>{element.number}</h1>
                  <p>{element.title}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default WhoAreWe