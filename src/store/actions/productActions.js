import { betterFetch } from "../../utils/betterFetch";

export const FETCH_PRODUCTSBYCONTAINERID_BEGIN =
  "FETCH_PRODUCTSBYCONTAINERID_BEGIN";
export const FETCH_PRODUCTSBYCONTAINERID_SUCCESS =
  "FETCH_PRODUCTSBYCONTAINERID_SUCCESS";
export const FETCH_PRODUCTSBYCONTAINERID_FAILURE =
  "FETCH_PRODUCTSBYCONTAINERID_FAILURE";

const fetchProductsByContainerIdBegin = () => ({
  type: FETCH_PRODUCTSBYCONTAINERID_BEGIN,
});

const fetchProductsByContainerIdSuccess = (data) => ({
  type: FETCH_PRODUCTSBYCONTAINERID_SUCCESS,
  payload: data,
});

const fetchProductsByContainerIdFailure = (err) => ({
  type: FETCH_PRODUCTSBYCONTAINERID_FAILURE,
  payload: { err },
});

export const fetchProductsByContainerId = (contianerId) => {
  return (dispatch) => {
    dispatch(fetchProductsByContainerIdBegin());
    return betterFetch(process.env.REACT_APP_API_URL + "product/" + contianerId)
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        dispatch(fetchProductsByContainerIdSuccess(jsonData));
        return jsonData;
      })
      .catch((err) => {
        dispatch(fetchProductsByContainerIdFailure(err));
      });
  };
};
