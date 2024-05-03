import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Card from '../component/Card'
import Carousal from '../component/Carousal'
import HomeScreen from './HomeScreen'


export default function Home() {
  return (
    <div>
      <div> <Navbar /> </div>
      <div style={{ marginTop: '40px' }}> <Carousal /> </div>

      <div>
        <h3 className='container mt-3'> Gofood Restaurants with online food delivery in Sohna :</h3>
        <hr className='container'></hr>
      </div>


      <div>  <HomeScreen /> </div>

      <div className='m-3'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>

      <div><Footer /> </div>

    </div>
  )
}
