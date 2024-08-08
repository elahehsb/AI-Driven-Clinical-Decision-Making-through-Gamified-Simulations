
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const sensorRoutes = require('./routes/sensorRoutes');
const questionnaireRoutes = require('./routes/questionnaireRoutes');
const logRoutes = require('./routes/logRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/gamified_platform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.use('/api/sensors', sensorRoutes);
app.use('/api/questionnaires', questionnaireRoutes);
app.use('/api/logs', logRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
