import express from "express";

const webServer = express();

const rootHandler = (request, response) => {
  console.log("This is root handler");
  const object = {
    name: "mock-name",
    role: "user",
    picture: "https://shorturl.at/qtFJM",
  };
  response.send(object);
};

webServer.get("/", rootHandler);

webServer.listen(3001, () => {
  console.log("Web Server is up!");
});

// const webServer = express();

// webServer.get("/", (request, response) => {
//   response.send("This is main route!");
// });

// webServer.get("/admin", (request, response) => {
//   response.send("This is admin route!");
// });

// webServer.get("/user", (request, response) => {
//   const object = {
//     name: "james kanin",
//     number: 61,
//   };

//   response.send(object);
// });

// webServer.listen(process.env.PORT || 3000, () => {
//   console.log("Server is up Yay!!!!");
// });
