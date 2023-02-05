import React from 'react'
import './Services.css'
import one from '../img/one.png'
import two from '../img/two.png'
import three from '../img/three.png'


function Services() {
  return (
    <>
      <section className="servicesection">
        <div className="container">
            <div className="row">
                <div className="col-md-4 mt-5">
                    <h1>Our Services</h1>
                    <p className="mt-5 servicesection-p">By 1922, there were an estimated 30,000 extras in LA and not nearly enough jobs to go around. With no system in place to regulate Background Actors,
                         many people looking to break into the industry were exploited. <br/><br/><br/>
                    To restore Hollywood’s image, Will Hays, the president of the Motion Picture Producers 
                    and Distributors of America, formed the Central Casting Corporation in 1925.
                   </p>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-3 mt-5">
                    <h4>Car Rental</h4>
                    <p>By 1922, there were an estimated<br/>
                     30,000 extras in LA and not nearly <br/>
                     enough.</p>
                     <div className=" m-5 justify-content-center align-items-center">
                        <img src={two} alt="img" className="img-fluid count" />
                     {/* <p className="content">2</p> */}
                     </div>
                     <h4>Homes</h4>
                    <p>By 1922, there were an estimated<br/>
                     30,000 extras in LA and not nearly <br/>
                     enough.</p>
                </div>
                <div className="col-md-3 mt-5">
                <div className=" m-5 justify-content-center align-items-center">
                <img src={one} alt="img" className="img-fluid count" />
                     {/* <p className="content">1</p> */}
                     </div>
                     <h4>Apartment</h4>
                    <p>By 1922, there were an estimated<br/>
                     30,000 extras in LA.</p>

                     <div className=" m-5 justify-content-center align-items-center">
                     <img src={three} alt="img" className="img-fluid count" />
                     {/* <p className="content">3</p> */}
                     </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Services
