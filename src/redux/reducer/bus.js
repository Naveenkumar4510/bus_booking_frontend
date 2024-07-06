import {
  BUS_SUCCESS,
  BUS_BEGIN,
  BUS_ERROR,
  BUS_ADD_BEGIN,
  BUS_ADD_SUCCESS,
  BUS_ADD_ERROR,
  BUS_EDIT_BEGIN,
  BUS_EDIT_SUCCESS,
  BUS_EDIT_ERROR,
} from "../constant/bus/bus";

export const busreducer = (state = { bus_details: [] }, action) => {
  switch (action.type) {
    case BUS_BEGIN:
      return { loading: true, bus_details: [] };
    case BUS_SUCCESS:
      return { loading: false, bus_details: action.preview };
    case BUS_ERROR:
      return { error: true };
    default:
      return state;
  }
};

export const bus_add_reducer = (state = { bus_add_details: [] }, action) => {
  switch (action.type) {
    case BUS_ADD_BEGIN:
      return { loading: true, bus_add_details: [] };
    case BUS_ADD_SUCCESS:
      return { loading: false, bus_add_details: action.payload };
    case BUS_ADD_ERROR:
      return { error: true };
    default:
      return state;
  }
};

export const bus_edit_reducer = (state = { bus_edit_details: [] }, action) => {
  switch (action.type) {
    case BUS_EDIT_BEGIN:
      return { loading: true, bus_edit_details: [] };
    case BUS_EDIT_SUCCESS:
      return { loading: false, bus_edit_details: action.payload };
    case BUS_EDIT_ERROR:
      return { error: true };
      default:
      return state;
  }
};
