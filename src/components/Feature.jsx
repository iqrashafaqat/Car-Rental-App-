import React from 'react'
import './Feature.css'

function Feature() {
  return (
    <>
      <section className="fsection">
        <div className="container">
            <div className="row">
                <div className="col-md-3 fsection-r">
                    <h3>Feature <br/> Apartments</h3>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-7 fsection-r">
                    <p className='fsection-p'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                     or randomised words which don't look even slightly believable. t is a long established fact that a reader.
                    </p>
                </div>
            </div>
            
            {/* <div className="row mt-5 featuresec pb-5"> */}
            <div className="row featuresec">
              <div className="col-md-4">
                
                  <div className="card-body Featurec1">
                  {/* <div className="vr mx-3">
                  </div> */}
                        <h5 className="card-title">Double wide homes</h5>
                        <p className="card-text">Starting at $86,322</p> 
                        <p className="mt-5 card-p">It is a long established fact that a reader will be distracted by
                             the readable content of a page when looking at its layout.</p>
                        <div className='d-flex align-items-end justify-content-end mt-5'>
                        <a href="#" className="btn btn-primary " style={{width: '1rem'}}><b>+</b></a>
                        </div>
                    </div>
             </div>
             <div className="col-md-4">
                  <div className="card-body Featurec2">
                        <h5 className="card-title">Single wide homes</h5>
                        <p className="card-text">Starting at $73,291</p>
                        <p className="mt-5 card-p">It is a long established fact that a reader will be distracted by
                             the readable content of a page when looking at its layout.</p>
                             <div className='d-flex align-items-end justify-content-end mt-5'>

                            <a href="#" className="btn btn-primary " style={{width: '1rem'}}><b>+</b></a>
                            </div>
                      
                    </div>
             </div>
             <div className="col-md-4">
                  <div className="card-body Featurec3">
                        <h5 className="card-title">Move in ready homes</h5>
                        <p className="card-text">Starting at $54,172</p>
                        <p className="mt-5 card-p">It is a long established fact that a reader will be distracted by
                             the readable content of a page when looking at its layout.</p>
                             <div className='d-flex align-items-end justify-content-end mt-5'>

                            <a href="#" className="btn btn-primary" style={{width: '1rem'}}><b>+</b></a>
                            </div>
                    </div>
             </div>
            </div>
        </div>

      </section>
    </>
  )
}

export default Feature
