const events = require('./events.json');
const jobs = require('./jobs.json');
const posts = require('./posts.json');
const startups = require('./startups.json');

module.exports = () => ({
  events: events,
  jobs: jobs,
  posts: posts,
  startups: startups
});