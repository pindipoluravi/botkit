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

function changePaylod(data) {
    var overrideMessagePayload = {
        body: JSON.stringify({
            "textmessage": data.message,
            "accountNumber": data.context.session.BotUserSession.lastMessage.messagePayload.accountNumber,
            "transactionId": data.context.session.BotUserSession.lastMessage.messagePayload.transactionId
        }),
        isTemplate: true
    };
    return overrideMessagePayload;
}

module.exports = {
    botId: botId,
    botName: botName,

    on_user_message: function (requestId, data, callback) {
        sdk.sendBotMessage(data, callback);
    },
    on_bot_message: function (requestId, data, callback) {
        if (data._originalPayload.channel.type == "ivr") {
            if (IsJsonString(data.message)) {
                console.info("It's object type" + JSON.parse(data.message).textmessage);
            } else {
                console.info("It's string type" + data._originalPayload.channel.message);
                data.overrideMessagePayload = changePaylod(data);
            }
        }
        sdk.sendUserMessage(data, callback);
    }
};
