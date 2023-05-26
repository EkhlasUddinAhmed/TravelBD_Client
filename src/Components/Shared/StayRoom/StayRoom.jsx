import React from "react";
import { useLoaderData } from "react-router-dom";
import RoomCard from "../../RoomCard/RoomCard";
import "./StayRoom.css";
import useAuthentication from "../../../Hooks/useAuthentication";
import { toast } from "react-toastify";

const StayRoom = () => {
  const data = useLoaderData();
  const { activeUser } = useAuthentication();
 
  return (
    <div>
      <div className="container-fluid bg-white">
        <div className="row justify-content-between">
          <h2 className="display-3  fw-semibold text-muted">{data[0].title}</h2>
          <div className="col-md-5">
            {data.map((room) => (
              <RoomCard key={room._id} stayRoom={room} />
            ))}
          </div>
          <div className="col-md-5">
            <div className="parent">
              <div className="child">
                <h1 className="display-3 text-danger">GOOGLE MAP HERE</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayRoom;
