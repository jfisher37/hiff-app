const express = require('express');
const { Project } = require('../models');
const { authenticationRequired } = require('../middlewares');

const projectRouter = express.Router();

projectRouter.get('/projects', async (req, res) => {

});