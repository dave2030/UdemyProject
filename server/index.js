const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");

mongoose.connect(keys.mongoDbUri);

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000; //process.env is for production purposes (port provided by deployment tool)
app.listen(5000);
