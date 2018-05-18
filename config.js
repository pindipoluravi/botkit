const config = {
    "server": {
        "port": 8003
    },
    "app": {
        "apiPrefix" : "/api/v1/sdk"
    },
    "credentials": {
        "apikey": process.env.apiKey,
        "appId": process.env.appId
    },
    "connect": {
        "api":process.env.connectApi
    },
    "redis": {
        "available": false
    },
    "supportsMessageAck": true
}
module.exports = config;