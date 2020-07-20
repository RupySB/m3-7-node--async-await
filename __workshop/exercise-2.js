// Exercise 2 - `getIssPosition`
// -----------------------------

const request = require("request-promise");

const getIssPosition = async () => {
  try {
    const response = await request("http://api.open-notify.org/iss-now.json");
    const issLocation = JSON.parse(response);
    return {
      lat: issLocation.iss_position.latitude,
      lng: issLocation.iss_position.longitude,
    };
  } catch (err) {
    console.log("Error: ", err);
  }
};
// getting PROMISE {<pending>}**

getIssPosition().then((res) => console.log(res));

//my 3.6 original answer is below:
// const request = require("request-promise");
// Returns the current position of the ISS
// const getIssPosition = (lat, lng) => {
//   return request("http://api.open-notify.org/iss-now.json")
//     .then((response) => JSON.parse(response))
//     .then((parsedResponse) => {
//       return {
//         lng: parsedResponse.iss_position.longitude,
//         lat: parsedResponse.iss_position.latitude,
//       };
//     });
// };

// write some code..
// getIssPosition("").then((result) => console.log(result));
