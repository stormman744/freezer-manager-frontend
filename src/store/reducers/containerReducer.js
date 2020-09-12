import {
  FETCH_CONTAINERS_BEGIN,
  FETCH_CONTAINERS_FAILURE,
  FETCH_CONTAINERS_SUCCESS,
} from "../actions/containerActions";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const containers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTAINERS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CONTAINERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_CONTAINERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
