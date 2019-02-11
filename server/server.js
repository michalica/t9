
var express = require("express");
var app = express();



var cors = require('cors')

app.use(cors())

const phoneDigitsToLetters = {
    0: '_', 1: ' ', 2: 'ABC', 3: 'DEF', 4: 'GHI',
    5: 'JKL', 6: 'MNO', 7: 'PQRS', 8: 'TUV', 9: 'WXYZ'
};

var telephoneWords = function(digitString) {
    var result = [''];

    for(var digit = 0; digit < digitString.length; digit++) {
        // for every digit in the input
        var thisDigit = digitString[digit];
        // pass the result so far, and the letters corresponding to the digit
        // into addDigit.
        result = addDigit(result, phoneDigitsToLetters[thisDigit]);
    }
    return result;

    function addDigit(array, options) {
        var newArray = [];
        for(var i = 0; i < array.length; i++) {
            // for all the solutions so far
            var subSolution = array[i];
            for(var x = 0; x < options.length; x++) {
                var letter = options[x];
                // for every letter corresponding to this digit,
                // we create a new array combining that subsolution and the option,
                // and push it into our new result.
                newArray.push(subSolution.concat(letter));
            }
        }
        return newArray;
    }
};



app.get("/num", function(request, response, next) {
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

    results = telephoneWords(queryNum);

    response.json({
        letters: results
    });
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});


