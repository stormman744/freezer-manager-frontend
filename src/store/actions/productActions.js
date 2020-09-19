import { betterFetch } from "../../utils/betterFetch";
import { handleDispatch } from "../../utils/handleDispatch";

export const FETCH_PRODUCTSBYCONTAINERID_BEGIN =
  "FETCH_PRODUCTSBYCONTAINERID_BEGIN";
export const FETCH_PRODUCTSBYCONTAINERID_SUCCESS =
  "FETCH_PRODUCTSBYCONTAINERID_SUCCESS";
export const FETCH_PRODUCTSBYCONTAINERID_FAILURE =
  "FETCH_PRODUCTSBYCONTAINERID_FAILURE";

const fetchProductsByContainerIdBegin = () => ({
  type: FETCH_PRODUCTSBYCONTAINERID_BEGIN,
});

const fetchProductsByContainerIdSuccess = (data, containerId) => ({
  type: FETCH_PRODUCTSBYCONTAINERID_SUCCESS,
  payload: data,
  containerId,
});

const fetchProductsByContainerIdFailure = (err) => ({
  type: FETCH_PRODUCTSBYCONTAINERID_FAILURE,
  payload: { err },
});

export const fetchProductsByContainerId = (containerId) => {
  return (dispatch) => {
    dispatch(fetchProductsByContainerIdBegin());
    return betterFetch(process.env.REACT_APP_API_URL + "product/" + containerId)
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        dispatch(fetchProductsByContainerIdSuccess(jsonData, containerId));
        return jsonData;
      })
      .catch((err) => {
        dispatch(fetchProductsByContainerIdFailure(err));
      });
  };
};

export const POST_PRODUCTWITHCONTAINERID_BEGIN =
  "POST_PRODUCTWITHCONTAINERID_BEGIN";
export const POST_PRODUCTWITHCONTAINERID_SUCCESS =
  "POST_PRODUCTWITHCONTAINERID_SUCCESS";
export const POST_PRODUCTWITHCONTAINERID_FAILURE =
  "POST_PRODUCTWITHCONTAINERID_FAILURE";

const postProductWithContainerIdBegin = () => ({
  type: "POST_PRODUCTWITHCONTAINERID_BEGIN",
});

const postProductWithContainerIdSuccess = (data, containerId) => ({
  type: "POST_PRODUCTWITHCONTAINERID_SUCCESS",
  payload: data,
  containerId,
});

const postProductWithContainerIdFailure = (err) => ({
  type: "POST_PRODUCTWITHCONTAINERID_FAILURE",
  payload: { err },
});

export const postProductWithContainerId = ({
  containerId,
  productName,
  productAmount,
  productUnitId,
  productExpiration,
}) => {
  return handleDispatch(
    process.env.REACT_APP_API_URL + "product/post",
    {
      method: "POST",
      body: JSON.stringify({
        container_id: containerId,
        name: productName,
        amount: productAmount,
        unit_id: productUnitId,
        expiration_date: productExpiration,
      }),
    },
    postProductWithContainerIdBegin,
    postProductWithContainerIdSuccess,
    postProductWithContainerIdFailure,
    containerId
  );
};
