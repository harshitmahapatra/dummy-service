var express = require("express");
var app = express();

app.get("/visualize", (req, res, next) => {
    res.json({
        UserId: req.headers['x-auth-userid']
    });

   });

app.listen(8080, () => {
console.log("Server running on port 8080");
});