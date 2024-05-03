import React from 'react'
import Navbar from '../component/Navbar'
import HomeScreen from './HomeScreen'
import Topmenu from '../datafolder/Topmenu'
import Footer from '../component/Footer'


export default function Menu() {
  return (
    <>
      <div> <Navbar /> </div>

      <div>

        <Topmenu />
      </div>

      < HomeScreen />
      <Footer />

    </>
  )
}
