
const express = require('express');
const SensorData = require('../models/SensorData');
const router = express.Router();

router.post('/', async (req, res) => {
  const { userId, heartRate, timestamp } = req.body;
  const newSensorData = new SensorData({ userId, heartRate, timestamp });
  await newSensorData.save();
  res.status(201).send(newSensorData);
});

module.exports = router;

// server/routes/questionnaireRoutes.js
const express = require('express');
const Questionnaire = require('../models/Questionnaire');
const router = express.Router();

router.post('/', async (req, res) => {
  const { userId, responses, timestamp } = req.body;
  const newQuestionnaire = new Questionnaire({ userId, responses, timestamp });
  await newQuestionnaire.save();
  res.status(201).send(newQuestionnaire);
});

module.exports = router;

// server/routes/logRoutes.js
const express = require('express');
const Log = require('../models/Log');
const router = express.Router();

router.post('/', async (req, res) => {
  const { userId, action, timestamp } = req.body;
  const newLog = new Log({ userId, action, timestamp });
  await newLog.save();
  res.status(201).send(newLog);
});

module.exports = router;
