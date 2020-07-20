// Exercise 3
// ----------

const doublesLater = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
};
const handleSum = async (num) => {
  try {
    const uno = await doublesLater(num);
    const dos = await doublesLater(uno);
    const tres = await doublesLater(dos);
    return uno + dos + tres;
  } catch (error) {
    console.log(error);
  }
};

// 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
// 2. returns the double of the num

// 3. handleSum function (async/await)

// 4. verification
handleSum(10).then((ans) => console.log(ans));

// const handleHandleSum = async (num) => {
//   try {
//     const result = await handleSum(num);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
