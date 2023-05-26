import React from 'react';
import { FaRegStar } from "react-icons/fa";
const RoomCard = ({stayRoom}) => {
    const {room}=stayRoom;
    const {des,rating,price,total}=room;
    const {one,two,three}=des;
    
    
    return (
        <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
        
      <img src={room.img} className="img-fluid rounded-start " alt/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title">{room.head}</h3>
        <p className="card-text">{one}</p>
        <p className="card-text">{two}</p>
        <p className="card-text">{three}.</p>
          <div className='d-flex justify-content-around'>
            <div className='d-flex  align-items-center'>
                <p><FaRegStar className='text-warning me-2'/></p>
            <p>{rating}</p>
            </div>
            <p>{price}</p>
            <p>{total}</p>
          </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default RoomCard;