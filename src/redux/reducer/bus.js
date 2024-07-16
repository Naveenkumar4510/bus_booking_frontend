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
  BUS_GET_BUS_BY_NO_BEGIN,
  BUS_GET_BUS_BY_NO_SUCCESS,
  BUS_GET_BUS_BY_NO_ERROR,
  BUS_DELETE_BEGIN,
  BUS_DELETE_SUCCESS,
  BUS_DELETE_ERROR
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

export const bus_edit_reducer = (state = { bus_edit_details: {} }, action) => {
  switch (action.type) {
    case BUS_EDIT_BEGIN:
      return { loading: true, bus_edit_details: {} };
    case BUS_EDIT_SUCCESS:
      return { loading: false, bus_edit_details: action.payload };
    case BUS_EDIT_ERROR:
      return { error: true };
      default:
      return state;
  }
};

export const bus_fetch_reducer = (state = { bus_fetch_details: {} }, action) => {
  switch (action.type) {
    case BUS_GET_BUS_BY_NO_BEGIN:
      return { loading: true, bus_fetch_details: {} };
    case BUS_GET_BUS_BY_NO_SUCCESS:
      return { loading: false, bus_fetch_details: action.payload };
    case BUS_GET_BUS_BY_NO_ERROR:
      return { error: true };
      default:
      return state;
  }
};


export const bus_delete_reducer = (state = { bus_delete_details: {} }, action) => {
  switch (action.type) {
    case BUS_DELETE_BEGIN:
      return { loading: true, bus_delete_details: {} };
    case BUS_DELETE_SUCCESS:
      return { loading: false, bus_delete_details: action.payload };
    case BUS_DELETE_ERROR:
      return { error: true };
      default:
      return state;
  }
};