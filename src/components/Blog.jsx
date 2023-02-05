import React from 'react'
import Rectangle from '../img/Rectangle.png' 
import Line from '../img/Line.png'
import Hline from '../img/Hline.png'
import './Blog.css'

function Blog() {
  return (
    <>
      <section className="blog-section">
        <div className="container">
            <div className="row">
        <div className="col-md-8 mt-5">
            <img src={Rectangle} alt="" className="img-fluid" />
            <p className="mt-3" style={{color: ' rgba(255, 255, 255, 0.7)'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br/> alteration in some form, by injected humour, or randomised words which don't look even slightly <br/>believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't <br/>anything embarrassing hidden in the middle of text.</p>
        </div>
        <div className="col-md-1 line-img">
          <img src={Line} alt="" className="img-fluid mt-5 line-img"/>
        </div>
        <div className="col-md-3 mt-5">
           <h4>Teen<span className=""> Actors <br/>why</span> didn’t get <br/>into films</h4>
           <p style={{color: ' rgba(255, 255, 255, 0.7)'}}>There are many variations of <br/>passages</p><br/><br/>
           <img src={Hline} alt="" className='img-fluid hr-line' />

           <h4 className='mt-4'>The actors in <br/> <span>Isolation</span>  a guide</h4>
           <p style={{color: ' rgba(255, 255, 255, 0.7)'}}>The majority have suffered <br/>alteration in some form</p><br/><br/>
           <img src={Hline} alt="" className='img-fluid hr-line' />

           <h4 className='mt-4'>The Casting<br/> <span>winners</span> </h4>
           <p style={{color: ' rgba(255, 255, 255, 0.7)'}}>There are many variations of <br/>passages of Lorem Ipsum <br/>available</p><br/><br/>
        </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Blog
