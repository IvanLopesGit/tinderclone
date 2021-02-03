import Express from "express";
import Mongoose from "mongoose";
import Cors from "cors";
import Cards from "./dbCards.js";

// App Config

const app = Express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://IvanLopes:NemotoNagi11@cluster0.yuzx7.mongodb.net/tinderdb?retryWrites=true&w=majority";

// Middlewares
app.use(Express.json());
app.use(Cors());

// DB Config
Mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints

app.get("/", (req, res) => res.status(200).send("É nozes"));

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener

app.listen(port, () => console.log(`funcionou o localhost: ${port}`));
