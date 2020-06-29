var express = require("express");
var app = express();

app.get("/visualize", (req, res, next) => {
    res.json(["Visualization"]);
   });

app.listen(8080, () => {
console.log("Server running on port 8080");
});