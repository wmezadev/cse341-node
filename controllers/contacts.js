const mongodb = require('../db');
const ObjectId = require('mongodb').ObjectId;

const index = async (req, res) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.status(200).setHeader('Content-Type', 'application/json').json(lists);
  });
};

const show = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId });
  result.toArray().then((lists) => {
    res.status(200).setHeader('Content-Type', 'application/json').json(lists[0]);
  });
};

const store = async (req, res) => {
  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    const contact = { firstName, lastName, email, favoriteColor, birthday };
    const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
    res.status(201).setHeader('Content-Type', 'application/json').json(response);
  } catch (err) {
    // TODO: add a Log handler feature instead of using console.error(error);
    res.status(500).setHeader('Content-Type', 'application/json').json(err);
  }
};

const update = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    const contact = { firstName, lastName, email, favoriteColor, birthday };
    const response = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .replaceOne({ _id: userId }, contact);
    if (!(response.modifiedCount > 0)) {
      throw new Error('Error while updating contact.');
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).setHeader('Content-Type', 'application/json').json(err);
  }
};

const destroy = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .deleteOne({ _id: userId }, true);
    if (!(response.deletedCount > 0)) {
      throw new Error('Error while deleting contact.');
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).setHeader('Content-Type', 'application/json').json(err);
  }
};

module.exports = { index, show, store, update, destroy };
