
const mongoose = require('mongoose');

const sensorDataSchema = new mongoose.Schema({
  userId: String,
  heartRate: Number,
  timestamp: Date,
});

module.exports = mongoose.model('SensorData', sensorDataSchema);

// server/models/Questionnaire.js
const mongoose = require('mongoose');

const questionnaireSchema = new mongoose.Schema({
  userId: String,
  responses: Array,
  timestamp: Date,
});

module.exports = mongoose.model('Questionnaire', questionnaireSchema);

// server/models/Log.js
const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  userId: String,
  action: String,
  timestamp: Date,
});

module.exports = mongoose.model('Log', logSchema);
