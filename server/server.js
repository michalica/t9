
var express = require("express");
var app = express();

app.get("/numbers", (req, res, next) => {
    const query = req.query;

        res.json({
            letters: ['abc', 'def', 'ghj', 'vfh']
        });


});

app.post("/post", function(request, response) {
    console.log(request.body); //This prints the JSON document received (if it is a JSON document)

});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
