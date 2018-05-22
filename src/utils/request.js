// export const toJSON = (response) => response.json();

export const getWeather = (url, additionalConfig = {}) => fetch(url);
  // , {

  //   method: 'GET',
//   credentials: 'include',
//   ...additionalConfig,
//   headers: {
//     'Content-Type': 'application/json',
//     ...additionalConfig.headers
//   },
// });
