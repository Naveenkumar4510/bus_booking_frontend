import { BUS_BEGIN,BUS_ERROR,BUS_SUCCESS } from "../constant/bus/bus";
import { Auth } from "../config";


export const bus_detailAction =() => async(dispatch) =>{
try
{
    dispatch({type:BUS_BEGIN});
   const {data}=await Auth.get('/bus');
    dispatch({ type: BUS_SUCCESS, preview: data });
    console.log(data.data);
}
catch(error){
    dispatch({type:BUS_ERROR})

}
}