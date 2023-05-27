import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Booking.css";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import areaDescription from "../../../../src/area.json";
import UseTitle from "../../../Hooks/UseTitle";

const Booking = () => {
  UseTitle("Booking");
  const { name } = useParams();
  const navigate=useNavigate();
  const [fromOrigin, setFromOrigin] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  let specificDescription,id;

  switch(name) {
    case "Sreemangal Upazila":
        specificDescription=areaDescription[0].description;
        id="01"
        break;
    case "Sajek Valley":
        specificDescription=areaDescription[1].description;
        id="02"
        break;
    default:
        specificDescription=areaDescription[2].description;
        id="03"
      }
  
  

  const setFromOriginHandler = (e) => {
    setFromOrigin(e.target.value);
    console.log(e.target.value);
  };

  const bookingSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Booking Submit Button is Ok");
    const newBooking = {
      fromOrigin,
      destination: name,
      startDate,
      endDate,
    };
    console.log("A new Booking is:", newBooking);
    setFromOrigin("");
    setStartDate(new Date());
    setEndDate(new Date());

    fetch("https://travel-bd-server-two.vercel.app/travel/bd", {
      method: "POST",
      body: JSON.stringify(newBooking),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        toast("Your Booking is Successfull");
      });
      navigate(`/stayroom/${id}`);
      
  };

  return (
    <div className="mt-5">
      <div className="container">
        <div className="row justify-content-between g-4">
          <div className="col-md-7">
              <h1>Id is:{id}</h1>
            <h1 className="text-white text-uppercase display-1 fw-bold">{name}</h1>
            <p className="text-white ">
              {/* {areaDescription[0].description} */}
              {specificDescription}
            </p>


          </div>
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <form onSubmit={bookingSubmitHandler}>
                  <div className="mb-3">
                    <label htmlFor="origin" className="form-label">
                      <h5 className="text-muted">Origin</h5>
                    </label>
                    <input
                      onChange={setFromOriginHandler}
                      value={fromOrigin}
                      type="text"
                      className="form-control form-control-lg fs-3 text-dark fw-semibold text-uppercase bg-body-secondary"
                      id="origin"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="destination" className="form-label">
                      <h5 className="text-muted">Destination</h5>
                    </label>
                    <input
                      value={name}
                      type="text"
                      className="form-control form-control-lg fs-3 text-dark fw-semibold text-uppercase
                      bg-body-secondary"
                      id="destination"
                      readOnly
                    />
                  </div>
                  <div className="container">
                    <div className="row justify-content-between">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="destination" className="form-label">
                            <h5 className="text-muted">From</h5>
                          </label>
                          <DatePicker
                            className="form-control fs-3 text-dark fw-semibold 
                            bg-body-secondary"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="destination" className="form-label">
                            <h5 className="text-muted">To</h5>
                          </label>
                          <DatePicker
                            className="form-control fs-3 text-dark fw-semibold
                            bg-body-secondary
                            "
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-3 ">
                    <button
                      type="submit"
                      className="btn btn-secondary w-100 btn-lg fw-semibold"
                    >
                      StartBooking
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
