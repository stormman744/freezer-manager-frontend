import { actionFailed } from "../../utils/actionFailed";
import {
  FETCH_CONTAINERS_BEGIN,
  FETCH_CONTAINERS_FAILURE,
  FETCH_CONTAINERS_SUCCESS,
  POST_CONTAINER_BEGIN,
  POST_CONTAINER_FAILURE,
  POST_CONTAINER_SUCCESS,
  UPDATE_CONTAINER_BEGIN,
  UPDATE_CONTAINER_FAILURE,
  UPDATE_CONTAINER_SUCCESS,
} from "../actions/containerActions";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const containers = (state = initialState, action) => {
  switch (action.type) {
    //FETCH CONTAINER
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
      return actionFailed(state, action);

    //UPDATE CONTAINER
    case UPDATE_CONTAINER_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_CONTAINER_SUCCESS:
      const newItems = state.data.map((container) => {
        if (container.id === action.payload.id) {
          return action.payload;
        } else {
          return container;
        }
      });
      return {
        ...state,
        loading: false,
        data: newItems,
      };
    case UPDATE_CONTAINER_FAILURE:
      return actionFailed(state, action);
    //POST CONTAINER ERROR
    case POST_CONTAINER_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case POST_CONTAINER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [action.payload, ...state.data],
      };
    case POST_CONTAINER_FAILURE:
      return actionFailed(state, action);

    default:
      return state;
  }
};
