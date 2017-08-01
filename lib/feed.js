const RSS = require('rss');

module.exports.create = (items) => {
  var feed = new RSS({
    title: 'Who\'s Hiring',
    description: 'An overview of the most recent "Who\s Hiring" threads on Hacker News',
    feed_url: 'https://who-is-hiring.now.sh/rss',
    site_url: 'https://who-is-hiring.now.sh',
    language: 'en',
    categories: ['Jobs']
  });

  items.forEach(item => {
    feed.item({
      title: item.title,
      description: item.story_text,
      url: item.url,
      guid: item.url,
      author: item.author,
      date: item.created_at
    });
  });

  return feed.xml();
};
