const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const watchRoute = require("./routes/watch");
const userRoute = require("./routes/user");
const categoryRoute = require("./routes/category");
const wishListRoute = require("./routes/wishList");
const panierRoute = require("./routes/panier");
const salesRoute = require("./routes/sales");
const authRoute = require("./routes/auth");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

mongoose
  .connect("mongodb://localhost:27017/Watch-App", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.listen(8000, () => {
  console.log(`server run on port ${8000}`);
});

app.use("/api", watchRoute);
app.use("/api", userRoute);
app.use("/api", categoryRoute);
app.use("/api", wishListRoute);
app.use("/api", panierRoute);
app.use("/api", salesRoute);
app.use("/api", authRoute);
