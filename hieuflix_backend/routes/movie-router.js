import express from 'express';
import MovieController from '../controllers/movie-controller.js';
import verify from '../verifyToken.js';


const movieController = new MovieController();

const router = express.Router();

router.get('/findbyname', verify, movieController.getMovieByName)
router.get('/find/:id',verify, movieController.getMovie);
router.post('/',verify, movieController.createMovie );
router.put('/:id',verify, movieController.updateMovie );
router.delete('/:id',verify, movieController.deleteMovie );
router.get('/random',verify, movieController.getRandomMovie);
router.get('/', verify, movieController.getAll)

export default router; 


