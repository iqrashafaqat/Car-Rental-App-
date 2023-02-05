import React from 'react'
import mb_logo from '../img/mb_logo.png'
import logo2 from '../img/logo2.png'
import mini_logo from '../img/mini_logo.png'
import lembo_logo from '../img/lembo_logo.png'
import tesla_logo from '../img/tesla_logo.png'
import './Ourpartner.css'

function Ourpartner() {
  return (
    <>
      <section className="op-section">
        <div className="container-fluid">
            <div className="row align-items-center justify-content-center text-center">
                <div className="col-md-12 mt-5">
                    <h3>Our Partners</h3>
                </div>
            </div>

            <div className="row op-r mt-3">
              <div className="col-md-1"></div>
                <div className="col-md-2 team-imgs">
                    <img src={mb_logo} alt="" className="img-fluid op-img team-imgs"/>
                </div>
          
                <div className="col-md-2 team-imgs">
                <img src={logo2} alt="" className="img-fluid op-img logo2-img team-imgs" />
                </div>
               
                <div className="col-md-2 text-center team-imgs">
                <img src={tesla_logo} alt="" className="img-fluid tesla-img team-imgs" />
                </div>
                <div className="col-md-2  mt-4 team-imgs">
                <img src={mini_logo} alt="" className="img-fluid op-img mini-img team-imgs" />
                </div>
                
                <div className="col-md-2 text-center team-imgs">
                <img src={lembo_logo} alt="" className="img-fluid lembo-img team-imgs" />
                </div>
                <div className="col-md-1"></div>
              
            </div>
        </div>
      </section>
    </>
  )
}

export default Ourpartner
