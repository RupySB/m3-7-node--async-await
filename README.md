# Module 3 - Node day 7 - Async / Await

## Setup

- `yarn install`

You will not need to spin up a server in this workshop. You can "run" the files individually in the terminal by doing `node <PATH_TO_FILE>` for most of the exercises.

### Exercise 0

In the example from last workshop we had a Promise that compared a number to the number 10.

```js
// The Promise
const compareToTen = (num) => {
  return new Promise((resolve, reject) => {
    num > 10
      ? resolve(num + ' is greater than 10, success!')
      : reject(num + ' is less than 10, error!');
  });
};

// Calling the Promise
compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```

If we convert the Promise **call**, to an `async` function that includes a `try`/`catch` (for better error handling), we end up with something like this:

```js
const handleCompareToTen = async (num) => {
  try {
    const result = await compareToTen(num);
    console.log(result);
  } catch {
    console.log(err);
  }
};

// Calling the function (that uses the Promise)
handleCompareToTen(15);
handleCompareToTen(8);
```

Using `async`/`await` in this case requires a little more setup as we create a function that uses the Promise, but calling the code becomes much simpler as there is no need to chain a bunch of `then`s everytime we want to use the Promise.

## Exercise 1

Rewrite the text transformation exercise from the last workshop to use `async`/`await`.

## Exercise 2 - `getIssPosition`

Async/Await becomes much more useful when dealing with APIs, and modules that wrap Promises.

Fill in the blanks of a rewritten version of the `getIssPosition` code from last workshop.

## Exercise 3

1. Write a function called `doublesLater` that returns a new Promise that doubles a number after 2 seconds.
2. Here is a promise called `handleSum` uses the `doublesLater` Promise. It takes a `num`, doubles it 3 times (with the `doublesLater` Promise), and returns the sum of the three successive doubles. As you can see, it is quite the hellish situation. _it is also a convoluted and totally fabricated situation..._

```js
const handleSum = (num) => {
  let theSum = 0;
  return new Promise((resolve) => {
    doublesLater(num).then((a) => {
      theSum += a;
      doublesLater(a).then((b) => {
        theSum += b;
        doublesLater(b).then((c) => {
          theSum += c;
          resolve(theSum);
        });
      });
    });
  });
};
```

3. Rewrite `handleSum` with `async`/`await`.

---

## Exercise 4 - Just Jokes!

<img src="__lecture/assets/laugh.jpg" style="width: 100%;" />

### Exercise 4.1 - `getDadJoke`

1. Head over to https://icanhazdadjoke.com/api. Read the documentation...
2. Write a Promise that called `getDadJoke` that will return a random joke from this API. _Return only the actual joke as a string._
3. The `request-promise` module accepts a `uri` but can also accept an object with various parameters. _You will want to set the headers to `"Accept": "application/json"`_
4. `console.log` the result to read the joke.

READ the [request-promise NPM page](https://www.npmjs.com/package/request-promise#get-something-from-a-json-rest-api) for more information.

### Exercise 4.2 - `getTronaldDumpQuote`

1. Head over to https://docs.tronalddump.io/. Read the documentation...
2. Write a Promise that will return a random Tronald Dump quote. _I had a hard time actually finding the api endpoint... Here it is:_ https://api.tronalddump.io
3. Examine the response to get the right data to return.
4. Return _only_ the quote as a string.

### Exercise 4.3 - `getGeekJoke`

1. Head over to https://github.com/sameerkumar18/geek-joke-api. Read the documentation...
2. Write a Promise that will return a random joke.

---

<center>🟡 - Minimally complete workshop (75%) - 🟡</center>
  
---

## Exercise 5 - A Backend Joke Service

We are going to create a server that will respond with a joke based on the endpoint that the user calls.

1. Export the joke functions you wrote in Exercise 4.
   - Go back to each function in exercise 4 and add in a line at the bottom of the file that `exports` the function.

```js
module.exports = { myFunction };
```

2. In `server.js` create the following endpoint:

```html
/joke/:type
```

3. `Require` all of the joke functions in the provided `handlers.js` file.
4. This file should also contain a function called `handleJoke` that returns a joke of the type requested (`dad`, `tronald` or `geek`).

## <img src="__lecture/assets/joke-endpoint.gif" />

<center>🟢 - Complete workshop (100%) - 🟢</center>

---

## Exercise 6 - The Frontend

### Part 1

Your server must have an endpoint `/make-me-laugh` that returns a page with a random joke.

#### Option A - EJS

Use `EJS` to render the page.

1. Create `get` endpoint that will render `pages/joke.ejs`.
2. Create the `views` folder, the `pages` folder and the `jokes.ejs` file.
3. Pass the random joke directly to `jokes.ejs`.
4. Create a `styles.css` file in the public folder.

#### Option b - Static Files

Use static files. _No need to create a `get` endpoint, if you use this option._

1. Create a folder called `make-me-laugh` in the public folder.
2. Create an `index.html`, a `styles.css`, and a `scripts.js` file in that folder.
3. Write the JS needed to `fetch` the joke from `/random-joke`.

### Part 2

- Add a dropdown to the page that allows the user to select the joke type she/he would like to read.
- Write the JS required to capture the user's joke choice.
- Use `onchange` to make it dynamic.
- Once a user selects a joke-type, a random joke should appear on the page.
- If the user re-selects, then the joke changes.

The way of doing this will vary depending on the option you chose in Part 1.
