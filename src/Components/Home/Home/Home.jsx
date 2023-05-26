import React from "react";

import sajek from "../../../assets/images/Sajek.png";
import sremongol from "../../../assets/images/Sreemongol.png";
import shundorbon from "../../../assets/images//sundorbon.png";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const areaLocation = ["Sreemangal Upazila", "Sajek Valley", "Sundarbans"];

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col-md-4 ">
            <div className="card ">
              <img src={sremongol} className="card-img " alt="..." />
              <div className="card-img-overlay">
                <div className="card-body">
                  <h5 className="card-title text-center fs-1 text-white">
                    SREMONGOL
                  </h5>
                  <p className="card-text fs-4 text-light ">
                    This card has supporting text below as a natural lead-in to
                    additional content. This card has supporting text below as a
                    natural lead-in to additional content. This card has
                    supporting text below as a natural lead-in to additional
                    content. This card has supporting text below as a natural
                    lead-in to additional content.
                  </p>
                </div>
                <div className="card-footer ">
                  <button
                    onClick={() => {
                      navigate(`/booking/${areaLocation[0]}`,{replace:true});
                    }}
                    className="btn btn-warning w-100 rounded-pill text-white fs-5 fw-semibold"
                  >
                    Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card ">
              <img src={sajek} className="card-img " alt="..." />
              <div className="card-img-overlay">
                <div className="card-body">
                  <h5 className="card-title text-center fs-1 text-white">
                    SAJEK
                  </h5>
                  <p className="card-text fs-4 text-light">
                    This card has supporting text below as a natural lead-in to
                    additional content. This card has supporting text below as a
                    natural lead-in to additional content. This card has
                    supporting text below as a natural lead-in to additional
                    content. This card has supporting text below as a natural
                    lead-in to additional content.
                  </p>
                </div>
                <div className="card-footer ">
                  <button
                    onClick={() => {
                      navigate(`/booking/${areaLocation[1]}`,{replace:true});
                    }}
                    className="btn btn-warning w-100 rounded-pill text-white fs-5 fw-semibold"
                  >
                    Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card ">
              <img src={shundorbon} className="card-img " alt="..." />
              <div className="card-img-overlay">
                <div className="card-body">
                  <h5 className="card-title text-center fs-1 text-white">
                    SHUNDORBON
                  </h5>
                  <p className="card-text fs-4 text-light">
                    This card has supporting text below as a natural lead-in to
                    additional content. This card has supporting text below as a
                    natural lead-in to additional content. This card has
                    supporting text below as a natural lead-in to additional
                    content. This card has supporting text below as a natural
                    lead-in to additional content.
                  </p>
                </div>
                <div className="card-footer ">
                  <button
                    onClick={() => {
                      navigate(`/booking/${areaLocation[2]}`, {
                        replace: true
                      });
                    }}
                    className="btn btn-warning w-100 rounded-pill text-white fs-5 fw-semibold"
                  >
                    Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
