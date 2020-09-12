export const betterFetch = (url, options) => {
  return fetch(url, {
    ...options,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      ...options?.headers,
    },
  });
};
