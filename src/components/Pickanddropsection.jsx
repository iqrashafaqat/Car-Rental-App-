import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import {FaCalendar} from 'react-icons/fa'
import './Pickanddropsection.css'



const Pickanddropsection = () => {
  const [selectesDate, setSelectedDate]= useState('');
  return (
  <>
  <section className="PandD_section">
    <div className="container">
      <div className="row">
        <div className="col-md-3 mt-5">
          <h5>Pick Up</h5>
        <select className="form-select form-control-lg" aria-label="Default select example">
          <option selected>City, District, or Specific Airport</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        {/* <h5 className="mt-5">Drop Off</h5>
        <select className="form-select" aria-label="Default select example">
          <option selected>City, District, or Specific Airport</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select> */}
        </div>

        <div className="col-md-3 mt-5">
        <h5>Pick Date / Time: </h5>
        <div className="form-control">
        <DatePicker selected={ selectesDate} className="datepicker"
            onChange={ date=>setSelectedDate(date)}dateFormat="dd-MM-yyyy"
            minDate  = {new Date()}
            // maxDate  = {new Date()}
            filterDate = {date=>date.getDay()!==7 && date.getDay()!=0}
            showYearDropdown 
            /> 
            </div>
            {/* <h5 className="mt-5">Pick Date / Time</h5>
            <DatePicker selected={ selectesDate}
            onChange={ date=>setSelectedDate(date)}dateFormat="dd-MM-yyyy"
            minDate  = {new Date()}
            filterDate = {date=>date.getDay()!==7 && date.getDay()!=0}
            showYearDropdown 
            /> */}
        </div>
        <div className="col-md-2 mt-5">
        <h5 className="">Time</h5>
        <select className="form-select form-control-lg" aria-label="Default select example">
          <option selected>Anytime</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        {/* <h5 className="mt-5">Time</h5>
        <select className="form-select " aria-label="Default select example">
          <option selected>Anytime</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select> */}
        </div>

        <div className="col-md-2 mt-5">
        <h5 className="">Adult</h5>
        <select className="form-select form-control-lg" aria-label="Default select example">
          <option selected>1</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        
        {/* <h5 className="mt-5">Kid</h5>
        <select className="form-select" aria-label="Default select example">
          <option selected>1</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> */}
        {/* <h5 className="mt-5">Car Type </h5>
        <select className="form-select" aria-label="Default select example">
          <option selected>Economy</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> */}

        </div>
        <div className="col-md-2 mt-5">
        <h5 className="">Kid</h5>
        <select className="form-select form-control-lg" aria-label="Default select example">
          <option selected>1</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> 
        </div>
      </div>



      <div className="row mt-5 ">
      <div className="col-md-3">
          {/* <h5>Pick Up</h5>
        <select className="form-select" aria-label="Default select example">
          <option selected>City, District, or Specific Airport</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select> */}
        <h5 className="mt-5">Drop Off</h5>
        <select className="form-select form-control-lg" aria-label="Default select example">
          <option selected>City, District, or Specific Airport</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        </div>

        <div className="col-md-3">
        {/* <h5>Pick Date / Time: </h5>
        <DatePicker selected={ selectesDate}
            onChange={ date=>setSelectedDate(date)}dateFormat="dd-MM-yyyy"
            minDate  = {new Date()}
            // maxDate  = {new Date()}
            filterDate = {date=>date.getDay()!==7 && date.getDay()!=0}
            showYearDropdown 
            />  */}
            <h5 className="mt-5">Pick Date / Time</h5>
            <div className="form-control">
            <DatePicker selected={ selectesDate} className="datepicker"
            onChange={ date=>setSelectedDate(date)}dateFormat="dd-MM-yyyy"
            minDate  = {new Date()}
            filterDate = {date=>date.getDay()!==7 && date.getDay()!=0}
            showYearDropdown 
            />
            </div>
        </div>
        <div className="col-md-2">
        {/* <h5 className="">Time</h5>
        <select className="form-select" aria-label="Default select example">
          <option selected>Anytime</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select> */}
        <h5 className="mt-5">Time</h5>
        <select className="form-select form-control-lg" aria-label="Default select example">
          <option selected>Anytime</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        </div>

        <div className="col-md-4">
        {/* <h5 className="">Adult</h5>
        <select className="form-select" aria-label="Default select example">
          <option selected>1</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> */}
        
        {/* <h5 className="mt-5">Kid</h5>
        <select className="form-select" aria-label="Default select example">
          <option selected>1</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> */}
        <h5 className="mt-5">Car Type </h5>
        <select className="form-select form-control-lg" aria-label="Default select example">
          <option selected>Economy</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        </div>
        {/* <div className="col-md-2">
        <h5 className="">Kid</h5>
        <select className="form-select" aria-label="Default select example">
          <option selected>1</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> 
        </div> */}


      </div>
      <div className="row mt-5 pb-5">
        <div className="col-md-3"></div>
        <div className="col-md-4">
        <h5 className="">Promo Code</h5>
        <input className="form-control form-control-lg " type="text" placeholder="Type Here" aria-label="default input example"/>
        </div>
        <div className="col-md-2 mt-4 d-flex">
        <button type="submit" className="btn btn-primary mb-3 mt-2 button">Search</button>
        </div>
        <div className="col-md-3"></div>
        </div>
      </div>
  
  </section>
  </>
  )
}

export default Pickanddropsection

