const mongodb = require('../db');
const ObjectId = require('mongodb').ObjectId;

const index = async (req, res) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const show = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const store = async (req, res) => {
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;
  const contact = { firstName, lastName, email, favoriteColor, birthday };
  try {
    const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { index, show, store };
