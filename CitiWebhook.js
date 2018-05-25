var botId = process.env.botId;
var botName = process.env.botName;
var sdk = require("./lib/sdk");
var Promise = sdk.Promise;
var request = require("request");
var config = require("./config");


function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function changePaylod(data, message) {
    var overrideMessagePayload = {
        body: JSON.stringify({
            "textmessage": message,
            "accountnumber": data.context.session.BotUserSession.AccountNumber,
            "partner": data.context.session.BotUserSession.PartnerName,
            "transactionId": data.context.session.BotUserSession.TransactionId
        }),
        isTemplate: true
    };
    return overrideMessagePayload;
}

module.exports = {
    botId: botId,
    botName: botName,

    on_user_message: function (requestId, data, callback) {
        console.log(JSON.stringify(data));
        sdk.sendBotMessage(data, callback);
    },
    on_bot_message: function (requestId, data, callback) {
        console.info(JSON.stringify(data));
        if (data._originalPayload.channel.type == "ivr") {
            if (IsJsonString(data.message)) {
                var mesObj = JSON.parse(data.message);
                if ("isTemplate" in mesObj) {
                    console.info("It is template type" + mesObj.text);
                    data.overrideMessagePayload = changePaylod(data, mesObj.text);
                } else {
                    console.info("It is object type" + JSON.parse(data.message).textmessage);
                }
            } else {
                console.info("It is string type" + data._originalPayload.channel.message);
                data.overrideMessagePayload = changePaylod(data, data.message);
            }
        }
        sdk.sendUserMessage(data, callback);
    }
};
