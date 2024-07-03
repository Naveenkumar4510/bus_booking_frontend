import {
  //BUS DETAILS
  BUS_BEGIN,
  BUS_ERROR,
  BUS_SUCCESS,
  BUS_ADD_BEGIN,
  BUS_ADD_SUCCESS,
  BUS_ADD_ERROR,
} from "../constant/bus/bus";
import { Auth } from "../config";
import { type } from "@testing-library/user-event/dist/type";

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
