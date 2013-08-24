var credentials = require('./twitterCredentials'),
  ntwitter = require('ntwitter'),
  twitter = new ntwitter(credentials);

twitter.verifyCredentials(function (error, data) {
  if (error) {
    console.log('Credential verification error: ' + error);
  }
});

exports.onNewTweet = function(emit) {

  twitter.stream(
    'statuses/filter',

    { track: ['nodejs', 'FirefoxOS', 'geeksphone', 'braziljs', 'mozilla'] },

    function(stream) {

      stream.on('data', function(tweet) {
        emit({text: tweet.text, username: tweet.user.screen_name,
        	user_img: tweet.user.profile_image_url, user_fullname: tweet.user.name});
      });

      stream.on('error', function(error, code) {
        console.log("Stream error: " + error + ": " + code);
      });
    }
  );

};