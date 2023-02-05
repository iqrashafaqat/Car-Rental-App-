import React from 'react'
import './Hero.css';
import arrow from '../img/arrow.png';
import bestprice from '../img/bestprice.png';
import sportscar from '../img/sportscar.png';
import devices from '../img/devices.png';
import headphone from '../img/headphone.png';
import Car from '../img/Car.png';
import {FaFacebook, FaLinkedin, FaInstagram, FaTwitter} from 'react-icons/fa'

const Hero = () => {
  return (
   <>
<section className="hero-section">
<div className="container">
    <div className="row">
     <div className="col-md-6 mt-5">
        <h1 className='h-s-h'>Long-journey  <br/> experince with short <br/> commute convenience.</h1>
         <p>Lorem Ipsum is simply dummy text of the printing and <br/>typesetting industry. Lorem Ipsum has been .</p>
         {/* <button type="button" className="btn btn-primary mt-5">Find Out More</button> */}


         <button type="button" className="btn btn-primary mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Find Out More</button>
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                            <div className="mb-3">
                                <label for="recipient-name" className="col-form-label">Recipient:</label>
                                <input type="text" className="form-control form-control1" id="recipient-name"/>
                            </div>
                            <div className="mb-3">
                                <label for="message-text" className="col-form-label">Message:</label>
                                <textarea className="form-control form-control1" id="message-text"></textarea>
                            </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Send message</button>
                        </div>
                        </div>
                    </div>
                    </div>



        {/* <FaFacebook className='icon  mt-5'/> 
         <FaLinkedin className='icon mx-3 mt-5'/>
         <FaInstagram className='icon mx-3 mt-5'/>
         <FaTwitter className='icon mx-3 mt-5' /> */}
     </div>
     <div className="col-md-3">
     <img src={arrow} alt="" className="img-fluid arrow"/>
     </div>
         <div className="col-md-3 align-items-start list1">
            <ul className="list-unstyled ">
                <li className="list text-white"><img src={bestprice} alt=""  className="img-fluid mx-2" />Best Price Guaranteed</li>
                <li className="list text-white"><img src={sportscar} alt=""  className="img-fluid mx-2" />Home Pickups</li>
                <li className="list text-white"><img src={devices} alt=""  className="img-fluid mx-2" />Easy bookings</li>
                <li className="list text-white"><img src={headphone} alt=""  className="img-fluid mx-2" />24/7 Customer Care</li>
            </ul>
            {/* <img src={Car} alt="" className="img-fluid" /> */}
        </div>
    </div>
            <div className="row">
                <div className="col-md-3 mt-5 icons">
                <FaFacebook className='icon  mt-5'/> 
                <FaLinkedin className='icon mx-3 mt-5'/>
                <FaInstagram className='icon mx-3 mt-5'/>
                <FaTwitter className='icon mx-3 mt-5' />
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-7">
                <img src={Car} alt="" className="img-fluid car-image" />
                </div>
            </div>
</div>
</section>
   </>
  )
}

export default Hero
