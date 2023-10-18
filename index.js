const express = require('express');
const router = require('./routers/index');
require('./config//mongoose');
const passport = require('passport');
const passportStrategy = require('./config/passport-jwt-strategy');
const PORT = 8000

const app = express();
// for post requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(router)

app.listen(PORT, (err) => {
    if (err) console.log("Error in running server", err);
    else console.log("Server is running on port ", PORT)
})