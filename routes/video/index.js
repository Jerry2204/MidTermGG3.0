import express from 'express';
import VideoController from '../../controllers/video/index.js';

const Router = express.Router();

const Controller = new VideoController();

Router.get('/', Controller.get);
Router.get('/:id', Controller.getOne);
Router.post('/', Controller.create);
Router.put('/:id', Controller.update);
Router.delete('/:id', Controller.delete);

export { Router };
