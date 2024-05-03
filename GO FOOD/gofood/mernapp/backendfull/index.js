const express = require("express")
const mongoose = require("mongoose")


const app = express()

const PORT = 6060
mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://sandeepyadav:sandeep70077@cluster0.lthmxsg.mongodb.net/gofoodmern?retryWrites=true&w=majority")
  .then(() => console.log("connect to database"))
  .catch((err) => console.log(err))

////




//////


app.get("/", (req, res) => {
  res.send("server is running sandeep")
})

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
})




//scheema
app.use(express.json())

app.use('/api', require("./Routes/CreateUser"))



app.listen(PORT, () => console.log("server is running at port :" + PORT))