const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/smartcity', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const IssueSchema = new mongoose.Schema({
  issue: String,
  date: { type: Date, default: Date.now }
});

const Issue = mongoose.model('Issue', IssueSchema);

app.post('/api/issues', async (req, res) => {
  const { issue } = req.body;
  const newIssue = new Issue({ issue });
  await newIssue.save();
  res.status(201).send(newIssue);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
