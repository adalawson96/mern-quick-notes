// const jwt = require('jsonwebtoken');
// const User = require('../../models/user');
// const bcrypt = require('bcrypt');
const Note = require('../../models/note');

module.exports = {
  create,
};

async function create(req, res) {
  try {
    req.body.user = req.user._id 
    
    const createdNote = await Note.create(req.body);
    
    res.json(createdNote)
  } catch (err) {
    res.status(400).json(err)
  }
}
