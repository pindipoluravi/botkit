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
        form: data,
        headers: {
            'Content-Type': 'application/json',
        }
    };
    request(options, function (error, response, body) {
        if (!error) {
            res.json({
                "response": "okay"
            });
        } else {
            console.log('Error happened: ' + error);
        }
    });
}

module.exports = changePayload;