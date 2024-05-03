import React from 'react'
import topmenudata from './TopMenudata'

function Topmenu() {
  return (
    <>
      <section className='topmenu ' style={{ marginTop: '70px' }}>


        <div className='container'>

          <h2 className='h2heading'>What's on your mind?</h2>
          <hr></hr>
          <div className='menudata'>
            {
              topmenudata.map((ele) => {
                return (
                  <div className='topslide' key={ele.id}>
                    <img className='imagetopslide' src={ele.image} />
                    <p className='titletop'>{ele.title} </p>

                  </div>
                )

              })
            }
          </div>
          <hr />
        </div>
      </section>
    </>

  )
}

export default Topmenu
