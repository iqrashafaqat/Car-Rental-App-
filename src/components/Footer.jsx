import React from 'react'
import './Footer.css' 
import Logo from '../img/Logo.png'
import {FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaGoogle} from 'react-icons/fa'

function Footer() {
  return (
    <>
    <section className="footer">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4 py-5 mt-5">
                  <img src={Logo} className="img-fluid logo-img" alt="image here"  />
                  <p className="mt-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  </p>
                  <div className='ficon'>
                  <FaFacebook className='ficon mx-3 my-5'/>
                  <FaTwitter className='ficon mx-3 my-5'/>
                  <FaGoogle className='ficon mx-3 my-5'/>
                  <FaInstagram className='ficon mx-3 my-5'/>
                  <FaYoutube className='ficon mx-3 my-5'/>
                  </div>
                </div>

                <div className="col-md-1"></div>

                <div className="col-md-2 text-center text-md-start  mt-3">
                    <ul>
                        <li>
                            <h3>QUICK LINKS</h3>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Shipping and Returns</a>
                        </li>
                        <li>
                            <a href="#">Price Match Guarantee</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms of Service</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 text-center text-md-start">
                <ul>
                        <li>
                            <h3>COLLECTIONS</h3>
                        </li>
                        <li>
                            <a href="#">Lamborgini</a>
                        </li>
                        <li>
                            <a href="#">Bmw</a>
                        </li>
                        <li>
                            <a href="#">Barn Door Accessories</a>
                        </li>
                        <li>
                            <a href="#">New Arrivals</a>
                        </li>
                        <li>
                            <a href="#">Best Sellers</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 text-center text-md-start mt-md-0 ">
                    <h3 className="">CONTACT US</h3>
                    <h4 className="mt-3 text-white">Phone:</h4>
                    <p className="text-white">1-800-997-5085</p>
                    <h4 className="text-white">Email:</h4>
                    <p className="text-white">info@Carsrental.com</p>
                    <h4 className="mt-3 text-white">Phone:</h4>
                    <p className="text-white">Mon - Fri / 8:00AM - 8:00PM (ET)</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer
