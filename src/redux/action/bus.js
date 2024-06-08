import { BUS_BEGIN,BUS_ERROR,BUS_SUCCESS } from "../constant/bus/bus";
import { Auth } from "../config";


export const bus_detail =() => async(dispatch) =>{
try
{
    dispatch({type:BUS_BEGIN});
   const {data}=await Auth.get('/bus');
    dispatch({ type: BUS_SUCCESS, payload: data.data });
}
catch(error){
    dispatch({type:BUS_ERROR})

}
}