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

export const UPDATE_CONTAINER_BEGIN = "UPDATE_CONTAINER_BEGIN";
export const UPDATE_CONTAINER_SUCCESS = "UPDATE_CONTAINER_SUCCESS";
export const UPDATE_CONTAINER_FAILURE = "UPDATE_CONTAINER_FAILURE";

const updateContainerBegin = () => ({
  type: UPDATE_CONTAINER_BEGIN,
});

const updateContainerSuccess = (data) => ({
  type: UPDATE_CONTAINER_SUCCESS,
  payload: data,
});

const updateContainerFailure = (err) => ({
  type: UPDATE_CONTAINER_FAILURE,
  payload: { err },
});

export const updateContainer = ({
  containerId,
  containerName,
  containerDescription,
}) => {
  return (dispatch) => {
    dispatch(updateContainerBegin());
    return betterFetch(
      process.env.REACT_APP_API_URL + "container/update/" + containerId,
      {
        method: "PUT",
        body: JSON.stringify({
          name: containerName,
          description: containerDescription,
        }),
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        dispatch(updateContainerSuccess(jsonData));
        return jsonData;
      })
      .catch((err) => {
        dispatch(updateContainerFailure(err));
      });
  };
};

export const POST_CONTAINER_BEGIN = "POST_CONTAINER_BEGIN";
export const POST_CONTAINER_SUCCESS = "POST_CONTAINER_SUCCESS";
export const POST_CONTAINER_FAILURE = "POST_CONTAINER_FAILURE";

const postContainerBegin = () => ({
  type: POST_CONTAINER_BEGIN,
});

const postContainerSuccess = (data) => ({
  type: POST_CONTAINER_SUCCESS,
  payload: data,
});

const postContainerFailure = (err) => ({
  type: POST_CONTAINER_FAILURE,
  payload: { err },
});

const handleDispatch = (url, options, begin, success, failure) => {
  return (dispatch) => {
    dispatch(begin());
    return betterFetch(url, options)
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        dispatch(success(jsonData));
        return jsonData;
      })
      .catch((err) => {
        dispatch(failure(err));
      });
  };
};

export const postContainer = ({ containerName, containerDescription }) => {
  return handleDispatch(
    process.env.REACT_APP_API_URL + "container/post",
    {
      method: "POST",
      body: JSON.stringify({
        name: containerName,
        description: containerDescription,
      }),
    },
    postContainerBegin,
    postContainerSuccess,
    postContainerFailure
  );
};

export const DELETE_CONTAINER_BEGIN = "DELETE_CONTAINER_BEGIN";
export const DELETE_CONTAINER_SUCCESS = "DELETE_CONTAINER_SUCCESS";
export const DELETE_CONTAINER_FAILURE = "DELETE_CONTAINER_FAILURE";

const deleteContainerBegin = () => ({
  type: DELETE_CONTAINER_BEGIN,
});

const deleteContainerSuccess = (data) => ({
  type: DELETE_CONTAINER_SUCCESS,
  payload: data,
});

const deleteContainerFailure = (err) => ({
  type: DELETE_CONTAINER_FAILURE,
  payload: { err },
});

export const deleteContainer = ({ containerId }) => {
  return handleDispatch(
    process.env.REACT_APP_API_URL + "container/delete/" + containerId,
    {
      method: "DELETE",
      body: JSON.stringify({
        containerId: containerId,
      }),
    },
    deleteContainerBegin,
    deleteContainerSuccess,
    deleteContainerFailure
  );
};
