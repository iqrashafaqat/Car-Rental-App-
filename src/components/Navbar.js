import React from 'react'
import './Navbar.css'; 
import arrow from '../img/arrow.png';
import bestprice from '../img/bestprice.png';
import sportscar from '../img/sportscar.png';
import devices from '../img/devices.png';
import headphone from '../img/headphone.png';
import Car from '../img/Car.png';
import {FaFacebook, FaLinkedin, FaInstagram, FaTwitter} from 'react-icons/fa'
// import  {useState} from 'react' 

function Navbar() {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({ 
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
                
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({ 
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }

  return (
  <>
  <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
            <a className="navbar-brand" href="/">
            <img src="../image/Logo.png" alt=""  className="img-fluid"/>
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-grow-1 text-right" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0 flex-nowrap">
                
                        <li className="nav-item">
                            <a className="nav-link active m-2 menu-item text-white" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active m-2 menu-item text-white" href="/Ourteam">Car Listing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active m-2 menu-item text-white" href="/Services">Appartment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active m-2 menu-item  text-white" href="/Employement">Insurance</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active m-2 menu-item text-white" href="/Contact">Blog</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link active m-2 menu-item  text-white" href="/Contact">Contact</a>
                        </li> 
                    </ul>
                    <form className="d-flex">
                    {/* <button type="button" className="btn btn-primary">Book Now</button> */}

                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Book Now</button>
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


                    {/* logic */}

                    {/* var exampleModal = document.getElementById('exampleModal')
                    exampleModal.addEventListener('show.bs.modal', function (event) {
                    // Button that triggered the modal
                    var button = event.relatedTarget
                    // Extract info from data-bs-* attributes
                    var recipient = button.getAttribute('data-bs-whatever')
                    // If necessary, you could initiate an AJAX request here
                    // and then do the updating in a callback.
                    //
                    // Update the modal's content.
                    var modalTitle = exampleModal.querySelector('.modal-title')
                    var modalBodyInput = exampleModal.querySelector('.modal-body input')

                    modalTitle.textContent = 'New message to ' + recipient
                    modalBodyInput.value = recipient
                    }) */}


                    {/* <button onClick={toggleStyle} type="button" className="btn btn-primary mx-3">{btntext}</button> */}
                    {/* <button type="button" className="btn btn-primary mx-3">Enable Dark Mode</button> */}
                    </form>
                </div>
            </div>
        </nav>

   {/* <div className="container">

        <div className="row hero-section">
           
     <div className="col-md-6 mt-5">
        <h1>Long-journey<br/>
        experince with short <br/> commute convenience.</h1>
         <p>Lorem Ipsum is simply dummy text of the printing and <br/>typesetting industry. Lorem Ipsum has been .</p>
         <button type="button" className="btn btn-primary mt-5">Find Out More</button>
    
     </div>
     <div className="col-md-2">
     <img src={arrow} alt="img" className="img-fluid img" />

     </div>

         <div className="col-md-4 align-items-start list1 mt-5">
            <ul className="list-unstyled ">
                <li className="list text-white"><img src={bestprice} alt=""  className="img-fluid mx-3" />Best Price Guaranteed</li>
                <li className="list text-white"><img src={sportscar} alt=""  className="img-fluid mx-3" />Home Pickups</li>
                <li className="list text-white"><img src={devices} alt=""  className="img-fluid mx-3" />Easy bookings</li>
                <li className="list text-white"><img src={headphone} alt=""  className="img-fluid mx-3" />24/7 Customer Care</li>
            </ul> */}
            {/* <img src={Car} alt="" className="img-fluid car-image" /> */}
        {/* </div>

    
    </div>
    <div className="row">
        <div className="col-md-3">
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
   
    </div> */}
    </section>
  </>
  )
}

export default Navbar























