const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://payalad10:U1Jnj7va6aj55jrJ@cluster0.q7jcziu.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to database'));
db.once('open', () => console.log("connected to database"));


//U1Jnj7va6aj55jrJ