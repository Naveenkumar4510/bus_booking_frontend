import {
  //BUS DETAILS
  BUS_BEGIN,
  BUS_ERROR,
  BUS_SUCCESS,
  BUS_ADD_BEGIN,
  BUS_ADD_SUCCESS,
  BUS_ADD_ERROR,
  BUS_EDIT_BEGIN,
  BUS_EDIT_SUCCESS,
  BUS_EDIT_ERROR,
  BUS_DELETE_BEGIN,
  BUS_DELETE_SUCCESS,
  BUS_DELETE_ERROR,
  BUS_GET_BUS_BY_NO_BEGIN,
  BUS_GET_BUS_BY_NO_SUCCESS,
  BUS_GET_BUS_BY_NO_ERROR,
  GET_AVAILABLE_SEATS_BEGIN,
  GET_AVAILABLE_SEATS_ERROR,

  GET_AVAILABLE_SEATS_SUCCESS,
  BUS_GET_BUS_BY_ID_BEGIN,
  BUS_GET_BUS_BY_ID_ERROR,
  BUS_GET_BUS_BY_ID_SUCCESS
  
} from "../constant/bus/bus";
import { Auth } from "../config";
import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

export const bus_detailAction = () => async (dispatch) => {
  try {
    dispatch({ type: BUS_BEGIN });
    const { data } = await Auth.get("/bus");
    dispatch({ type: BUS_SUCCESS, preview: data });
    console.log(data.data);
  } catch (error) {
    dispatch({ type: BUS_ERROR });
  }
};

export const add_bus_details = (adddata) => async (dispatch) => {
  try {
    dispatch({ type: BUS_ADD_BEGIN });
    // const config = {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   };
    const { data } = await Auth.post("/bus",adddata);
    dispatch({ type: BUS_ADD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: BUS_ADD_ERROR });
  }
};


export const edit_bus_detail =(busId,editData) =>async(dispatch)=>{
  try{
    dispatch({type:BUS_EDIT_BEGIN
    });

    const {data}=await Auth.put(`/bus/${busId}`,editData);
    dispatch({type:BUS_EDIT_SUCCESS,payload:data})


  }catch(error){
    dispatch({type:BUS_EDIT_ERROR})
  }

}

export const fetch_bus_detail =(busId)=>async(dispatch)=>{
  try{
    dispatch({type:BUS_GET_BUS_BY_NO_BEGIN});

    const {data}=await Auth.get(`/bus/${busId}`);
    dispatch({type:BUS_GET_BUS_BY_NO_SUCCESS,payload:data})
  }
  catch(error){
    dispatch({type:BUS_GET_BUS_BY_NO_ERROR})
  }
}


export const fetch_bus_detail_byid =(busId)=>async(dispatch)=>{
  try{
    dispatch({type:BUS_GET_BUS_BY_ID_BEGIN});

    const {data}=await Auth.get(`/bus/id/${busId}`);
    dispatch({type:BUS_GET_BUS_BY_ID_SUCCESS,payload:data})
  }
  catch(error){
    dispatch({type:BUS_GET_BUS_BY_ID_ERROR})
  }
}


export const delete_bus_by_number =(bus)=>async(dispatch)=>{
  try{
dispatch({type:BUS_DELETE_BEGIN});
console.log("bus number in action "+bus);
const {data}=await Auth.delete(`/bus/${bus}`);
    dispatch({type:BUS_DELETE_SUCCESS,payload:data})
  }
  catch(error){
    dispatch({type:BUS_DELETE_ERROR})
  }
}


export const get_available_seats =(busNumber)=>async(dispatch)=>{
  try{
    dispatch({type:GET_AVAILABLE_SEATS_BEGIN});
    const {data}=await Auth.get(`/bus/availableSeats/${busNumber}`);
    dispatch({type:GET_AVAILABLE_SEATS_SUCCESS,payload:data})
  }
  catch(error){
    dispatch({type:GET_AVAILABLE_SEATS_ERROR})
  }
}