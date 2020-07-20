const request = require("request-promise");

const getGeekJoke = async () => {
  try {
    const response = await request(
      "https://geek-jokes.sameerkumar.website/api?format=json"
    );
    const getJokes = JSON.parse(response);
    return getJokes.joke;
  } catch (err) {
    console.log("error: ", err);
  }
};

getGeekJoke().then((res) => console.log(res));
