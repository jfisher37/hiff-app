const express = require('express');
const { Project } = require('../database/models');
const { authenticationRequired } = require('../middlewares');

const projectRouter = express.Router();

//TODO: Add spec. authorization (maybe do it through authenticationRequired) just for admin

//Create projects:
projectRouter.post('/create-project', authenticationRequired, async (req, res) => {
    try {
      const { title, school, proposal, solving, tags, mainImg, imgs } = req.body;
  
      //TODO: add video field and remove approved field.
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
projectRouter.get('/get-projects', authenticationRequired, async (req, res) => {
    try {
        // Retrieve all projects from the database
        const allProjects = await Project.findAll();
        res.json(allProjects);
      } catch (error) {
        console.error('Error retrieving projects:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
});

//Get specific project?
projectRouter.get('/get-single-project', authenticationRequired, async (req, res) => {
    const projectId = req.body.id;
  
    try {
      const project = await Project.findByPk(projectId);
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
  
      res.json(project);
    } catch (error) {
      console.error('Error finding project:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

//Update project:
projectRouter.put('/update-project', authenticationRequired, async (req, res) => {
    const projectId = req.body.id;
  
    try {
      const project = await Project.findByPk(projectId);
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
  
      // Update project information based on req.body
      const { title, school, proposal, solving, tags, mainImg, imgs, approved } = req.body;
  
      await project.update({
        title,
        school,
        proposal,
        solving,
        tags,
        mainImg,
        imgs,
        approved,
      });
  
      res.json({ message: 'Project updated successfully' });
    } catch (error) {
      console.error('Error updating project:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

//Delete project:
projectRouter.delete('/delete-project',authenticationRequired, async (req, res) => {
    const projectId = req.body.id;
  
    try {
      const project = await Project.findByPk(projectId);
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
  
      await project.destroy();
      res.json({ message: 'Project deleted successfully' });
    } catch (error) {
      console.error('Error deleting project:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


module.exports = { projectRouter };