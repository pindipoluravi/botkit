var request = require("request");
var config = require("./config");

function changePayload(req, res) {
    var data = {
        "from": req.body.to,
        "to": req.body.from,
        "text": req.body.text
    }
    var options = {
        method: 'POST',
        url: config.connect.api,
        body: data,
        json: true,
        headers: {
            'Content-Type': 'application/json',
        }
    };
    console.log("options are ", options);
    request(options, function (error, response, body) {
        if (!error) {
            console.log('CU response [' + response.statusCode + '] body:  ' + body);
            res.json({
                "response": "okay"
            });
        } else {
            console.log('Error happened: ' + error);
        }
    });
}

module.exports = changePayload;