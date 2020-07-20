const request = require("request-promise");

// getDadJoke
const getDadJoke = async () => {
  let answer = await request({
    uri: "https://icanhazdadjoke.com/",
    headers: {
      Accept: "application/json",
    },
  });
  return JSON.parse(answer).joke;
};

getDadJoke().then((data) => console.log(data));
