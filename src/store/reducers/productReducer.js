import { actionFailed } from "../../utils/actionFailed";
import {
  FETCH_PRODUCTSBYCONTAINERID_BEGIN,
  FETCH_PRODUCTSBYCONTAINERID_FAILURE,
  FETCH_PRODUCTSBYCONTAINERID_SUCCESS,
} from "../actions/productActions";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTSBYCONTAINERID_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTSBYCONTAINERID_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...state.data, [action.containerId]: action.payload },
      };
    case FETCH_PRODUCTSBYCONTAINERID_FAILURE:
      return actionFailed(state, action);
    default:
      return state;
  }
};
