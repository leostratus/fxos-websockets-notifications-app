Firefox OS #Hashtag Watcher
==================================================

This is an example of FireFox OS push notifications via websockets using Node.js with the socket.io and nTwitter modules. The server waits for tweets with specific keywords (using the Twitter streaming API) and pushes them to the client through websockets.

The "client" module is the FireFox OS app with a `manifest.webapp` file which can be installed on phones running FireFox OS or in the Firefox OS simulator add-on for Firefox. The app will make a websocket connection to the "server" and will then display the tweets received through that connection as notifications.

This was a prototype/hack for the BrazilJS 2013 conference.

Based on earlier work in [firefox_os_websocket_notification](https://github.com/mmollaverdi/firefox_os_websocket_notification) by [Mehdi Mollaverdi](https://github.com/mmollaverdi).

## How to install

### Run the server

Create a twitterCredentials.js file with the following content in the "server" directory:

``` javascript
var credentials = {
  consumer_key: 'Your twitter consumer key',
  consumer_secret: 'Your twitter consumer secret',
  access_token_key: 'Your twitter access token key',
  access_token_secret: 'Your twitter access token secret'
};

module.exports = credentials;
```

Twitter keys can be acquired from [dev.twitter.com/apps](https://dev.twitter.com/apps).

Then, from the "server" directory, run `npm install` to install the dependencies and at the end, run `node app.js`.

### Try the app on FireFox OS simulator

Add the "manifest.webapp" file in the "client" directory to the simulator dashboard.
