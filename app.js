const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

const port = process.env.APP_PORT ?? 4000;

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const movieHandlers = require("./movieHandlers");
const userHandlers = require("./userHandlers");

app.post("/api/users", userHandlers.postUser);
app.post("/api/movies", movieHandlers.postMovie);
app.put("/api/movies/:id", movieHandlers.putMovies);
app.put("/api/users/:id", userHandlers.putUsers);
app.delete("/api/movies/:id", movieHandlers.deleteMovie);
app.delete("/api/movies/:id", userHandlers.deleteUser);
app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);
app.get("/api/users", userHandlers.getUsers);
app.get("/api/users/:id", userHandlers.getUserById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
