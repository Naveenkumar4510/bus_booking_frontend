import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bus_detailAction } from '../../../redux/action/bus';

const Bus = () => {
const dispatch=useDispatch();

const {bus_details}=useSelector(
    (state)=>state.
    bus_details
);
 console.log(bus_details);
useEffect (()=>{
    dispatch(bus_detailAction())
},[]);

  return (
    <div>Bus</div>
  )
}

export default Bus