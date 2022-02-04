const events = require('./events.json');
const jobs = require('./jobs.json');
const posts = require('./posts.json');
const startups = require('./startups.json');
const members = require('./members.json');

module.exports = () => ({
  events: events,
  jobs: jobs,
  members: members,
  posts: posts,
  startups: startups
});