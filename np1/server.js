const express = require("express");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());