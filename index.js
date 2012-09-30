
module.exports = process.env.EXPRESS_COV
  ? require('./lib-cov/login')
  : require('./lib/login');
