const index = async (req, res) => {
  res.status(200).setHeader('Content-Type', 'application/json').json({
    author: '@wmezadev',
    apiVersion: 'v1',
    docs: '/api-docs'
  });
};

module.exports = { index };
