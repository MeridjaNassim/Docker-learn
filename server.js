const express = require("express");
const db = require("./db/db");
const { User } = require("./models/user.model");
const app = express();
let id = 0;
app.get("/", (req, res) => {
  User.find({})
    .then(data => {
      res.header("Content-type", "application/json");
      res.status(200).json(data);
    })
    .catch(err => {
      console.error(err);
    });
});
app.post("/save", (req, res) => {
  const user = new User({
    username: `gDgDockerUser${id}`,
    email: "gdg2019@esi.dz",
    bio: "Best community ever",
    name: `GDG member ${id}`
  });
  id++;
  user
    .save()
    .then(doc => {
      res.status(200).json(user);
    })
    .catch(err => {
      res
        .status(500)
        .send("Could not save")
        .redirect("/");
    });
});
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
