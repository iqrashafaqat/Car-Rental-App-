import React from 'react'
import './Wcu.css'
import Tick from  '../img/Tick.png'
import vrticle from '../img/vrticle.png'
import wcuimage from '../img/wcuimage.png'

function Wcu () {
  return (
    <>
      <section className="wcusection">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-1 mt-5"></div> */}
            <div className="col-md-5 mt-5">
                <h1>Why Choose us?</h1>
                <div className="row">
                    <div className="col-3 col-md-1">
                    <img src={Tick} alt="" className="img-fluid mt-5 tick-img" />
                    <img src={vrticle} alt=""  className="img-fluid mx-3 my-2"/>
                    </div>
                    <div className="col-9 col-md-6 mt-5">
                    <h3>Speed</h3>
                  <p>By relying on our professionals, in a short time 
                      you will know how much the building 
                      renovation you need costs.
                  </p>
                </div>
                <div className="col-md-5"></div>
                </div>
                <div className="row">
                  <div className="col-3 col-md-1">
                    <img src={Tick} alt="" className="img-fluid mt-5 tick-img" />
                    <img src={vrticle} alt=""  className="img-fluid mx-3 my-2"/>
                    </div>
                    <div className="col-9 col-md-6 mt-5">
                    <h3>Reliability</h3>
                    <p>One of the reasons many people put off a 
                        restructuring they need is a lack of trust in
                        unknown companies. 
                    </p>
                </div>
                <div className="col-md-5"></div>
                </div>
                 <div className="row">
                  <div className="col-3 col-md-1">
                    <img src={Tick} alt="" className="img-fluid mt-5 tick-img"/>
                    <img src={vrticle} alt=""  className="img-fluid mx-3 my-2"/>
                    </div>
                    <div className="col-9 col-md-6 mt-5">
                    <h3>Savings</h3>
                    <p>By being able to choose the lowest of several 
                      quotes for restructuring your province, 
                      savings are assured. But that's not all he right
                      project often leads.
                    </p>
                </div>
                <div className="col-md-5"></div>
                </div>

                {/* <img src={Tick} alt="" className="img-fluid mt-5" />
                <h3>Speed</h3>
                <p>By relying on our professionals, in a short time 
                    you will know how much the building 
                    renovation you need costs.
                </p> */}
            </div>
            <div className="col-md-1"></div>
           <div className="col-md-5  mt-5">
            <img src={wcuimage} alt=""  className="img-fluid wcu-i" />
           </div>
        </div>
      </div>
      </section>

    </>
  )
}
export default Wcu