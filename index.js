const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.use(express.static(path.join(__dirname, "public")));

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.set('view engine', 'pug')
app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

// add the router
app.use("/", router);
app.listen(process.env.port || 3000);

console.log("running...");