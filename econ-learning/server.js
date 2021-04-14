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
  tokens: Number,
  module1: Number,
  module2: Number,
  module3: Number,
  module4: Number,
  module5: Number,
  module6: Number,
  module7: Number,
  module8: Number,
  module9: Number,
  module10: Number,
});
const User = mongoose.model("User", userSchema);

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  const { username, password, tokens, module1, module2, module3, module4, module5, module6, module7, module8, module9, module10 } = req.body;
  const user = await User.findOne({ username }).exec();
  if (user) {
    res.status(500);
    res.json({
      message: "User Already Exists",
    });
    return;
  }
  await User.create({ username, password, tokens, module1, module2, module3, module4, module5, module6, module7, module8, module9, module10});
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

/////////////// DATA COLLECTION ///////////////
app.get("/ModuleProgress", async (req, res) => {
  const { authorization } = req.headers;
  const [, token] = authorization.split(" ");
  const [username, password, module1] = token.split(":");
  const user = await User.findOne({ username }).exec();
  if (!user || user.password !== password) {
    res.status(403);
    res.json({
      message: "invalid access",
    });
    return;
  }
  const todo = await User.findOne({username: username}).exec();
  var todos = [todo]
  res.json(todos);
});

app.get("/TestingDragChart", async (req, res) => {
  const { authorization } = req.headers;
  const [, token] = authorization.split(" ");
  const [username, password, module1] = token.split(":");
  const user = await User.findOne({ username }).exec();
  if (!user || user.password !== password) {
    res.status(403);
    res.json({
      message: "invalid access",
    });
    return;
  }
  const todo = await User.findOne({username: username}).exec();
  var todos = [todo]
  res.json(todos);
});
////////////////////////////////////////////////

////////////////// MODULE 1 //////////////////
app.post("/Quiz1", async (req, res) => {
  const { username, password, tokens} = req.body;
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

  db.collection('users').updateOne(
    {username: user.username},
    {
      $inc: {
        tokens: +tokens
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
//////////////////////////////////////////////

////////////////// MODULE 2 //////////////////
app.post("/Quiz2", async (req, res) => {
  const { username, password, tokens} = req.body;
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

  db.collection('users').updateOne(
    {username: user.username},
    {
      $inc: {
        tokens: +tokens
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
//////////////////////////////////////////////

////////////////// MODULE 3 //////////////////
app.post("/Quiz3", async (req, res) => {
  const { username, password, tokens} = req.body;
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

  db.collection('users').updateOne(
    {username: user.username},
    {
      $inc: {
        tokens: +tokens
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
//////////////////////////////////////////////

////////////////// MODULE 4 //////////////////
app.post("/Quiz4", async (req, res) => {
  const { username, password, tokens} = req.body;
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

  db.collection('users').updateOne(
    {username: user.username},
    {
      $inc: {
        tokens: +tokens
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
//////////////////////////////////////////////

////////////////// MODULE 5 //////////////////
app.post("/Quiz5", async (req, res) => {
  const { username, password, tokens} = req.body;
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

  db.collection('users').updateOne(
    {username: user.username},
    {
      $inc: {
        tokens: +tokens
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
//////////////////////////////////////////////

////////////////// MODULE 6 //////////////////
app.post("/Quiz6", async (req, res) => {
  const { username, password, tokens} = req.body;
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

  db.collection('users').updateOne(
    {username: user.username},
    {
      $inc: {
        tokens: +tokens
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
//////////////////////////////////////////////

////////////////// MODULE 7 //////////////////
app.post("/Quiz7", async (req, res) => {
  const { username, password, tokens} = req.body;
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

  db.collection('users').updateOne(
    {username: user.username},
    {
      $inc: {
        tokens: +tokens
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
//////////////////////////////////////////////

////////////////// MODULE 8 //////////////////
app.post("/Quiz8", async (req, res) => {
  const { username, password, tokens} = req.body;
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

  db.collection('users').updateOne(
    {username: user.username},
    {
      $inc: {
        tokens: +tokens
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
//////////////////////////////////////////////

////////////////// MODULE 9 //////////////////
app.post("/Quiz9", async (req, res) => {
  const { username, password, tokens} = req.body;
  const user = await User.findOne({ username }).exec();
  const db = mongoose.connection;
  db.collection('users').updateOne(
    {username: user.username},
    {
      $set: {
        module9: "100"
      }
    }
  );

  db.collection('users').updateOne(
    {username: user.username},
    {
      $inc: {
        tokens: +tokens
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
//////////////////////////////////////////////

////////////////// MODULE 10 //////////////////
app.post("/Quiz10", async (req, res) => {
  const { username, password, tokens} = req.body;
  const user = await User.findOne({ username }).exec();
  const db = mongoose.connection;
  db.collection('users').updateOne(
    {username: user.username},
    {
      $set: {
        module10: "100"
      }
    }
  );

  db.collection('users').updateOne(
    {username: user.username},
    {
      $inc: {
        tokens: +tokens
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
///////////////////////////////////////////////

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
