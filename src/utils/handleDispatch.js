import { betterFetch } from "./betterFetch";

export const handleDispatch = (
  url,
  options,
  begin,
  success,
  failure,
  returnValues
) => {
  return (dispatch) => {
    dispatch(begin());
    return betterFetch(url, options)
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        dispatch(success(jsonData, returnValues));
        console.log(returnValues);
        return jsonData;
      })
      .catch((err) => {
        dispatch(failure(err));
      });
  };
};
