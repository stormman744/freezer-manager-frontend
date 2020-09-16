import { actionFailed } from "../../utils/actionFailed";
import {
  FETCH_UNITBYID_BEGIN,
  FETCH_UNITBYID_FAILURE,
  FETCH_UNITBYID_SUCCESS,
  FETCH_UNITS_BEGIN,
  FETCH_UNITS_FAILURE,
  FETCH_UNITS_SUCCESS,
} from "../actions/unitActions";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const units = (state = initialState, action) => {
  switch (action.type) {
    //FETCH UNITS
    case FETCH_UNITS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_UNITS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case FETCH_UNITS_FAILURE:
      return actionFailed(state, action);
    //FETCH UNIT BY ID
    case FETCH_UNITBYID_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_UNITBYID_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case FETCH_UNITBYID_FAILURE:
      return actionFailed(state, action);
    default:
      return state;
  }
};
