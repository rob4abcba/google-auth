require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session"); // This module stores the session data on the client within a cookie
const app = express();

app.use(
  cookieSession({
    name: "session", // The name of the cookie to set, defaults to session.
    keys: ["rob4software"], // The list of keys to use to sign & verify cookie values, or a configured Keygrip instance. Set cookies are always signed with keys[0], while the other keys are valid for verification, allowing for key rotation. If a Keygrip instance is provided, it can be used to change signature parameters like the algorithm of the signature.
    maxAge: 24 * 60 * 60 * 1000, // maxAge = a number representing the milliseconds from Date.now() for expiry // ms/day = 24hr/day x 60min/hr x 60sec/min x 1000ms/sec
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
