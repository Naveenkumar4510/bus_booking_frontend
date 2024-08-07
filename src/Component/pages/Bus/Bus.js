import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bus_detailAction } from "../../../redux/action/bus";

const Bus = () => {
  const dispatch = useDispatch();

  const { bus_details } = useSelector((state) => state.bus_details);
  

  console.log(bus_details);
  useEffect(() => {
    dispatch(bus_detailAction());
  }, []);

  // bus_details.map((obj)=>{
  //     console.log(obj)
  // })

  return (
    <div>
      {bus_details.map((bus) => (
        <div key={bus.id}>{bus.busName}</div>
      ))}
    </div>
  );
};

export default Bus;
