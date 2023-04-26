const express = require('express');
const { Project } = require('../database/models');
const { authenticationRequired } = require('../middlewares');

const projectRouter = express.Router();

projectRouter.get('/projects', async (req, res) => {
    console.log("HERE!!!!")
});


module.exports = { projectRouter };