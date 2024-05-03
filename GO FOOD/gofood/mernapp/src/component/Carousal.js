
import React from 'react'


export default function Carousal() {
  return (
    <div>

      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
        <div className="carousel-inner " id="carousel">

          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900x700/?sandwich" className="d-flex images1 w-100" alt="..." style={{ filter: "30%" }} />
          </div>

          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900x700/?pizza" className="d-flex images1 w-100" alt="..." style={{ filter: "30%" }} />

          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-flex images1  w-100" alt="..." style={{ filter: "30%" }} />
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}
