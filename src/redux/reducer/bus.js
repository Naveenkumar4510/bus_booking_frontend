import { bus_detail } from "../action/bus";
import { BUS_SUCCESS, BUS_BEGIN, BUS_ERROR } from "../constant/bus/bus";

export const busreducer = (state = { bus_details: {} }, action) => {
  switch (action.type) {
    case BUS_BEGIN:
      return { loading: true, bus_details: {} };
    case BUS_SUCCESS:
      return { loading: false, bus_details:action.payload };
    case BUS_ERROR:
      return { error: true };
    default:
      return state;
  }
};
