const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");


app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
dotenv.config();

app.use((req, res, next) => {
    var allowedOrigins = ["http://localhost:3000", "*"];
    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.setHeader(
      "Access-Control-Allow-Headers",
      "x-access-token, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
  });

mongoose.connect(
    process.env.MONGO_URL,
     {useNewUrlParser: true},
      ()=>{console.log("Connected to MongoDB")}
);

app.get('/health-check',(req,res,next)=>{
    res.send("api is working")
})

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);


app.listen(8800,()=>{
    console.log("Backend server is running ! ")
})