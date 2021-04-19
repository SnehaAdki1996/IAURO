const bodyParser = require("body-parser");
var express = require("express");
var mongoose = require("mongoose");
const app = express();

const userRouter = require('./router/userRouter')
const productRouter = require('./router/productRouter')


mongoose.connect(
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false",
  { useNewUrlParser: true ,useUnifiedTopology: true }
);


app.use(bodyParser.json())
app.use('/',userRouter)
app.use('/product',productRouter)

app.listen(3000, () => {
  console.log("listening to port 3000");
});
