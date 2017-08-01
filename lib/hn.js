const hn = require('hacker-news-api')

const HACKERNEWS_URL = 'https://news.ycombinator.com/item?id='

module.exports.getPosts = function(cb) {
	hn.ask_hn()
		.author('whoishiring')
		.recent()
		.hitsPerPage(10)
		.search('who hiring', (err, res) => {
			cb(err, res.hits.map(hit => {
				hit.url = `${HACKERNEWS_URL}${hit.objectID}`
				return hit;
			}));
		});
}
