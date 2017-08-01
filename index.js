const path = require('path');
const express = require('express');

const hn = require('./lib/hn');
const feed = require('./lib/feed');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
	hn.getPosts((err, posts) => {
  	res.render('home', { title: 'Who\'s Hiring', posts });
	});
});

app.get('/rss', (req, res) => {
	hn.getPosts((err, posts) => {
  	res.send(feed.create(posts));
	});
});

app.listen(process.env.PORT || 3000, (err) => {
	if (err) throw err
	console.log('> Ready on http://localhost:3000')
});




