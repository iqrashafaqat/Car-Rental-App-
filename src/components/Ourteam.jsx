import React from 'react'
import t1 from '../img/t1.png'
import t2 from '../img/t2.png'
import t3 from '../img/t3.png'
import t4 from '../img/t4.png'
import t5 from '../img/t5.png'
import t6 from '../img/t6.png'
import t7 from '../img/t7.png'
import './Ourteam.css'




function Ourteam() {
  return (
    <>
      <section className="ourteamsection">
        <div className="container">
            <div className="row">
                <div className="col-md-1 mt-5"></div>
                <div className="col-md-2 mt-5 team1">
                    <img src={t1} alt="img" className="img-fluid team-img"/>
                </div>
                <div className="col-md-1 mt-5"></div>
                <div className="col-md-3  mt-3  team2">
                    <img src={t2} alt="img" className="img-fluid team-img"/>
                </div>                
                <div className="col-md-2 mt-5 pt-5 team3">
                    <img src={t3} alt="img" className="img-fluid team-img"/>
                </div>
                {/* <div className="col-md-1 mt-5"></div> */}
                <div className="col-md-2 mt-5 mx-4 team4">
                    <img src={t4} alt="img" className="img-fluid team-img"/>
                </div>
            </div>
            <div className="row">
            <div className="col-md-7">
                <img src={t5} alt="" className="img-fluid pb-5 mb-5 team5 team-img"/>
                <img src={t6} alt="" className="img-fluid mt-5 team6 team-img"/>
                <img src={t7} alt="" className="img-fluid mb-3 pb-5 team7  team-img"/>
            </div>          
            <div className="col-md-4 mt-5 team-sec">
                <h2>Our Team</h2>
                <h5>Meet the entire team</h5>
                <p>By 1922, there were an estimated 30,000 extras in LA and not nearly enough jobs to go around. It is a long established fact that a reader</p>
            </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Ourteam
