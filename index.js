
const express = require("express");
const app = express();
const cors=require("cors");
const movieRoute=require("./routes");
app.use(express.json());
app.use(cors());



app.listen(8800, () => {
    console.log("Backend server is running!");
  });
app.use('/api/movies', movieRoute);