
var express = require("express");
var app = express();

const mobileKyeboard = {
    "1": " ",
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
    "0": "_",
};

var cors = require('cors')

app.use(cors())

app.get("/numbers", function(request, response, next) {
    console.log(request.body); //This prints the JSON document received (if it is a JSON document)
    // if(request.body
    const query = request.query;
    const queryNum = query.num;
    let results = [];
    if (!queryNum) {
        response.status(400);
        response.send({ error: 'num is not defined!' });
        next();
        return;
    }

    for(let i = 0; i< queryNum.length; i++) {
        console.log(queryNum[i]);
        results.push(mobileKyeboard[queryNum[i]]);
        console.log(mobileKyeboard[queryNum[i]]);
    }

    response.json({
        letters: results
    });
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});


