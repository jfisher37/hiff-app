const express = require('express');
const { Project } = require('../database/models');
const { authenticationRequired } = require('../middlewares');

const projectRouter = express.Router();

//Create projects:
projectRouter.post('/create-project', async (req, res) => {
    try {
      const { title, school, proposal, solving, tags, mainImg, imgs } = req.body;
  
      // Create a new project instance with the provided data
      const project = await Project.create({
        title,
        school,
        proposal,
        solving,
        tags,
        mainImg,
        imgs,
        approved: false, // Default value for "approved" field is set to false
      });
  
      res.json({ message: 'Project created successfully', project });
    } catch (error) {
      console.error('Error creating project:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

//Get projects:
projectRouter.get('/get-projects', async (req, res) => {
    console.log("HERE!!!!")
});

//Get specific project?

//Edit projects:

//Delete projects:



module.exports = { projectRouter };