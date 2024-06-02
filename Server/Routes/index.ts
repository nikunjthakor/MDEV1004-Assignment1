import express from 'express';
const router = express.Router();

import { DisplayMovieList } from '../Controllers/movie';

/* Endpooint */
/* GET movie page. */
router.get('/', function(req, res, next) {  DisplayMovieList(req, res, next); });

export default router;
