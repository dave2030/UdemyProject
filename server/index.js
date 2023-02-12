const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000; //process.env is for production purposes (port provided by deployment tool)
app.listen(5000);
