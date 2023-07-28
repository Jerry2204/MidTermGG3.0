import express from 'express';
import ProductController from '../../controllers/product/index.js';

const Router = express.Router();

const Controller = new ProductController();

Router.get('/', Controller.get);
Router.get('/:id', Controller.getOne);
Router.post('/', Controller.create);
Router.put('/:id', Controller.update);
Router.delete('/:id', Controller.delete);

export { Router };
