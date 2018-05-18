# BotKit
Kore Bot Server SDK is set of libraries which gives you more control over the bots you build on Kore Bots platform. Once you build the Dialog task using Dialog Editor, you can subscribe to all the message and webhook events. You can easily add event handlers in the SDK and get the handle over the messages and webhook events [click here](https://developer.kore.com/docs/bots/bot-builder/defining-bot-tasks/dialog-tasks/using-the-botkit-sdk/) for configuration instructions and API documentation.



### Installation/Setup

Install latest version of [Node.js](https://nodejs.org/)

Install the dependencies 

```sh
$ cd BotKit
$ npm install
```
Set the enviornment varibles
```
export apiKey=12345666
export appId=1111
export connectApi=https://38f9ad46.ngrok.io/tasks
export botId=1112
export botName=Citi
Replace all these values with respest your Bot
```

To run the application

```
$ node app.js
```

