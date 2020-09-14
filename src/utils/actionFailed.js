export const actionFailed = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.payload,
  };
};
