import { betterFetch } from "../../utils/betterFetch";

export const FETCH_CONTAINERS_BEGIN = "FETCH_CONTAINERS_BEGIN";
export const FETCH_CONTAINERS_SUCCESS = "FETCH_CONTAINERS_SUCCESS";
export const FETCH_CONTAINERS_FAILURE = "FETCH_CONTAINERS_FAILURE";

const fetchContainersBegin = () => ({
  type: FETCH_CONTAINERS_BEGIN,
});

const fetchContainersSuccess = (data) => ({
  type: FETCH_CONTAINERS_SUCCESS,
  payload: data,
});

const fetchContainersFailure = (err) => ({
  type: FETCH_CONTAINERS_FAILURE,
  payload: { err },
});

export const fetchContainers = () => {
  return (dispatch) => {
    dispatch(fetchContainersBegin());
    return betterFetch(process.env.REACT_APP_API_URL + "container/all")
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        dispatch(fetchContainersSuccess(jsonData));
        return jsonData;
      })
      .catch((err) => {
        dispatch(fetchContainersFailure(err));
      });
  };
};
