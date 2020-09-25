import { actionFailed } from "../../utils/actionFailed";
import {
  DELETE_PRODUCT_BEGIN,
  DELETE_PRODUCT_SUCCESS,
  FETCH_PRODUCTSBYCONTAINERID_BEGIN,
  FETCH_PRODUCTSBYCONTAINERID_FAILURE,
  FETCH_PRODUCTSBYCONTAINERID_SUCCESS,
  POST_PRODUCTWITHCONTAINERID_BEGIN,
  POST_PRODUCTWITHCONTAINERID_FAILURE,
  POST_PRODUCTWITHCONTAINERID_SUCCESS,
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

    case POST_PRODUCTWITHCONTAINERID_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case POST_PRODUCTWITHCONTAINERID_SUCCESS:
      const returnObject = {
        ...state,
        loading: false,
        data: {
          ...state.data,
          [action.containerId]: [
            action.payload,
            ...state.data[action.containerId],
          ],
        },
      };
      return returnObject;
    case DELETE_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          [action.payload.container_id]: state.data[
            action.payload.container_id
          ].filter((product) => product.id !== action.payload.id),
        },
      };
    case POST_PRODUCTWITHCONTAINERID_FAILURE:
      return actionFailed(state, action);

    default:
      return state;
  }
};
