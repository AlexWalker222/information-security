import express from "express";
import dotenv from ".env";
const app = express();
app.use("/public", express.static("/public/style.css"));
app.listen(3000, (req, res, err, next) => {
  res.sendFile("/views/index.html", console.log(`listening on ${PORT}`), next(null, req, res, err))
})