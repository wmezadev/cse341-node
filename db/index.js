const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
let dbConnection;

module.exports = {
  initDb: function (callback) {
    if (dbConnection) {
      return callback(null, dbConnection);
    }
    MongoClient.connect(process.env.MONGODB_URI)
      .then((client) => {
        dbConnection = client;
        callback(null, dbConnection);
      })
      .catch((err) => {
        callback(err);
      });
  },

  getDb: () => {
    return dbConnection;
  }
};
