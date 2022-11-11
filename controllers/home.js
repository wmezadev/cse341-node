const index = async (req, res) => {
  res.status(200).json({
    author: '@wmezadev',
    apiVersion: 'v1',
    routes: [{ uri: '/contacts', methods: ['GET', 'POST', 'PUT', 'DELETE'] }]
  });
};

module.exports = { index };
