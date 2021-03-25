const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 4000;

const ObjectId = require("mongoose").Types.ObjectId;

mongoose.connect("mongodb+srv://fil:admin@cluster0.jqnnp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  module1: String,
  module2: String,
  module3: String,
  module4: String,
  module5: String,
  module6: String,
  module7: String,
  module8: String,
  module9: String,
  module10: String,
});
const User = mongoose.model("User", userSchema);

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  const { username, password, module1, module2, module3, module4, module5, module6, module7, module8, module9, module10 } = req.body;
  const user = await User.findOne({ username }).exec();
  if (user) {
    res.status(500);
    res.json({
      message: "User Already Exists",
    });
    return;
  }
  await User.create({ username, password, module1, module2, module3, module4, module5, module6, module7, module8, module9, module10});
  res.json({
    message: "success",
  });
});

app.post("/login", async (req, res) => {
  const { username, password} = req.body;
  const user = await User.findOne({ username }).exec();
  if (!user || user.password !== password) {
    res.status(403);
    res.json({
      message: "Invalid Login",
    });
    return;
  }
  res.json({
    message: "success",
  });
});

app.post("/welcome", async (req, res) => {
  const { username, password} = req.body;
  const user = await User.findOne({ username }).exec();
  const db = mongoose.connection;
  db.collection('users').updateOne(
  {username: user.username},
  {
    $set: {
      module1: "100"
    }
  }
);
  if (!user || user.password !== password) {
    res.status(403);
    res.json({
      message: "invalid login",
    });
    return;
  }
  res.json({
    message: "success",
    
  });
});

app.post("/Quiz1", async (req, res) => {
  const { username, password} = req.body;
  const user = await User.findOne({ username }).exec();
  const db = mongoose.connection;
  db.collection('users').updateOne(
  {username: user.username},
  {
    $set: {
      module1: "100"
    }
  }
);
  if (!user || user.password !== password) {
    res.status(403);
    res.json({
      message: "invalid login",
    });
    return;
  }
  res.json({
    message: "success",
    
  });
});

app.post("/Quiz2", async (req, res) => {
  const { username, password} = req.body;
  const user = await User.findOne({ username }).exec();
  const db = mongoose.connection;
  db.collection('users').updateOne(
  {username: user.username},
  {
    $set: {
      module2: "100"
    }
  }
);
  if (!user || user.password !== password) {
    res.status(403);
    res.json({
      message: "invalid login",
    });
    return;
  }
  res.json({
    message: "success",
    
  });
});

app.post("/Quiz3", async (req, res) => {
  const { username, password} = req.body;
  const user = await User.findOne({ username }).exec();
  const db = mongoose.connection;
  db.collection('users').updateOne(
  {username: user.username},
  {
    $set: {
      module3: "100"
    }
  }
);
  if (!user || user.password !== password) {
    res.status(403);
    res.json({
      message: "invalid login",
    });
    return;
  }
  res.json({
    message: "success",
    
  });
});

app.post("/Quiz4", async (req, res) => {
  const { username, password} = req.body;
  const user = await User.findOne({ username }).exec();
  const db = mongoose.connection;
  db.collection('users').updateOne(
  {username: user.username},
  {
    $set: {
      module4: "100"
    }
  }
);
  if (!user || user.password !== password) {
    res.status(403);
    res.json({
      message: "invalid login",
    });
    return;
  }
  res.json({
    message: "success",
    
  });
});

app.post("/Quiz5", async (req, res) => {
  const { username, password} = req.body;
  const user = await User.findOne({ username }).exec();
  const db = mongoose.connection;
  db.collection('users').updateOne(
  {username: user.username},
  {
    $set: {
      module5: "100"
    }
  }
);
  if (!user || user.password !== password) {
    res.status(403);
    res.json({
      message: "invalid login",
    });
    return;
  }
  res.json({
    message: "success",
    
  });
});

app.post("/Quiz6", async (req, res) => {
  const { username, password} = req.body;
  const user = await User.findOne({ username }).exec();
  const db = mongoose.connection;
  db.collection('users').updateOne(
  {username: user.username},
  {
    $set: {
      module6: "100"
    }
  }
);
  if (!user || user.password !== password) {
    res.status(403);
    res.json({
      message: "invalid login",
    });
    return;
  }
  res.json({
    message: "success",
    
  });
});

app.post("/Quiz7", async (req, res) => {
  const { username, password} = req.body;
  const user = await User.findOne({ username }).exec();
  const db = mongoose.connection;
  db.collection('users').updateOne(
  {username: user.username},
  {
    $set: {
      module7: "100"
    }
  }
);
  if (!user || user.password !== password) {
    res.status(403);
    res.json({
      message: "invalid login",
    });
    return;
  }
  res.json({
    message: "success",
    
  });
});

app.post("/Quiz8", async (req, res) => {
  const { username, password} = req.body;
  const user = await User.findOne({ username }).exec();
  const db = mongoose.connection;
  db.collection('users').updateOne(
  {username: user.username},
  {
    $set: {
      module8: "100"
    }
  }
);
  if (!user || user.password !== password) {
    res.status(403);
    res.json({
      message: "invalid login",
    });
    return;
  }
  res.json({
    message: "success",
    
  });
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
