var twitterFeed = require('./twitterFeed');

require('./socketIOServer').start(twitterFeed.onNewTweet);
