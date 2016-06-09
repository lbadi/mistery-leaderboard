module.exports = {
	'secret': process.env.APP_SECRET || 'misteryROCKS',
  'database': process.env.MONGODB_URI || 'mongodb://localhost/',
  'autoindex': process.env.MONGODB_AUTOINDEX && true,
};
