const express = require("express");
const app = express();

// enviroimnet config
const dotenv = require("dotenv");

dotenv.config({path:"./config/config.env"});

// databsae
const db = require("./db/db")();

// express session middleware

const session = require("express-session");

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }))

// logging server activities
const morgan = require("morgan");

// cross origin request access
const cors = require("cors");

// additional security headers
const helmet = require("helmet");

const bodyParser = require("body-parser");

// passport js initialization ( authentication middleware )
const passport = require("passport");

app.use(passport.initialize());
app.use(passport.session());

require("./middlewares/google_auth")(passport);



app.use(helmet());
app.use(cors());
// app.use(morgan("dev"));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// routes
const authenticationRouter = require("./routes/authentication");
const authRouter = require("./routes/google_auth");
const transactionRouter = require("./routes/transaction");

app.use(authenticationRouter);
app.use(transactionRouter);
app.use("/auth",authRouter);

app.get("/",(req,res)=>{
    res.send("server is working");
});

app.use((error,req,res,next)=>{
    const statusCode = error.statusCode;
    const message = error.message;
    res.status(statusCode).json(message);;
});

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log("Server is running on",PORT);
});