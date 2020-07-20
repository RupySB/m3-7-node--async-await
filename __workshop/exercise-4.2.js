const request = require("request-promise");

const getTronaldDumpQuote = async () => {
  try {
    const response = await request({
      uri: "https://api.tronalddump.io/random/quote",
      headers: {
        Accept: "application/json",
      },
    });
    return JSON.parse(response).value;
  } catch (err) {
    console.log("error: ", err);
  } // write write write
};

getTronaldDumpQuote().then((res) => console.log(res));
