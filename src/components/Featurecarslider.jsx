import React from 'react'
import Vector from '../img/Vector.png';
import slider from '../img/slider.png';
import './Featurecarslider.css'

function Featurecarslider() {
  return (
   <>
   <section className="slidersection">
<div className="container">
    <div className="row">
<div className="col-md-1 mt-5">
    <img src={Vector} alt=""  className="img-fluid vector-img"/>
</div>
<div className="col-md-4 mt-5"></div>
<div className="col-md-2 mt-5">
    <h3>
    feature cars
    </h3>
</div>
<div className="col-md-3 mt-5"></div>
<div className="col-md-2 mt-5 links">
    <a href="/">Interior</a>
    <a href="/" className="mx-4">Exterior</a>
</div>
{/* <div className="col-md-1 mt-5">
<a href="/">Exterior</a>
</div> */}
    </div>

    <div className="row slidersection2">
        <div className="col-md-2 mt-5 sliderr">
            <h6>Explore</h6>
            <p>Packed with confidence</p>
            <h6 className="mt-5">$ 32,190</h6>
            <p>Starting MSRP*</p>
            <h6 className="mt-5">Telluride 2021</h6>
        </div>
        <div className="col-md-10 text-center">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slider} className="d-block  img-fluid" alt="img"/>
    </div>
    <div className="carousel-item">
      <img src={slider} className="d-block  img-fluid" alt="img"/>
    </div>
    <div className="carousel-item">
      <img src={slider} className="d-block  img-fluid" alt="img"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </div>
    </div>
    <div className="row slidersection3 sliderr">
        <div className="col-md-1">
            <img src={Vector} alt="" className="img-fluid"/>        
        </div>
        <div className="col-md-1 mt-1">
            <p>In sync with you.</p>    
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-7">
            <p className="slidersection3-para align-items-left justify-content-start">The Telluride packs a long list of standard features, impressive handling and power,<br/>
            advanced technology, and the most interior passenger room in its segment.</p>
        </div>
        <div className="col-md-1"></div>
    </div>
</div>
    
   </section>
   </>
  )
}

export default Featurecarslider
