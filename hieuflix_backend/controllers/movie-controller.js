import MovieModel from "../models/Movie.js";
import ListModel from "../models/List.js";
class MovieController {
	// create new movie
	createMovie = async (req, res, next) => {
		if (req.user.isAdmin) {
			const newMovie = new MovieModel(req.body);
			try {
				const savedMovie = await newMovie.save();
				res.status(201).json(savedMovie);
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.status(403).json("You are not allowed!");
		}
	};

	// update a movie
	updateMovie = async (req, res, next) => {
		if (req.user.isAdmin) {
			try {
				const updatedMovie = await MovieModel.findByIdAndUpdate(
					req.params.id,
					{
						$set: req.body,
					},
					{ new: true }
				);
				res.status(200).json(updatedMovie);
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.status(403).json("You are not allowed!");
		}
	};

	//delete a movie
	deleteMovie = async (req, res, next) => {
		if (req.user.isAdmin) {
			try {
				// await MovieModel.findByIdAndDelete(req.params.id);

				//delete movie from list
				let lists = await ListModel.find({ content: req.params.id });
				// console.log("lists ",lists);
				let newList = [];
				for (let list of lists) {
					list.content = list.content.filter(
						(c) => c !== req.params.id
					);

					await list.save();
				}

				// lists = newList;
				console.log("newList ", lists);

				res.status(200).json("The movie has been deleted...");
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.status(403).json("You are not allowed!");
		}
	};

	// get a movie
	getMovie = async (req, res, next) => {
		try {
			const movie = await MovieModel.findById(req.params.id);
			res.status(200).json(movie);
		} catch (err) {
			res.status(500).json(err);
		}
	};

	//get movie by name
	getMovieByName = async (req, res, next) => {
		const keyword = req.params.keyword;
		try {
			const movies = await MovieModel.findOne({
				title: { $regex: keyword },
			});
			console.log("moviesL ", movies);

			res.status(200).json(movies);
		} catch (err) {
			res.status(500).json(err);
		}
	};

	// get a random movie
	getRandomMovie = async (req, res, next) => {
		const type = req.query.type;
		let movie;
		try {
			if (type === "series") {
				movie = await MovieModel.aggregate([
					{ $match: { isSeries: true } },
					{ $sample: { size: 10 } },
				]);
			} else {
				movie = await MovieModel.aggregate([
					{ $match: { isSeries: false } },
					{ $sample: { size: 10 } },
				]);
			}
			res.status(200).json(movie);
		} catch (err) {
			res.status(500).json(err);
		}
	};

	// get all movies
	getAll = async (req, res, next) => {
		if (req.user.isAdmin) {
			try {
				const movies = await MovieModel.find();
				res.status(200).json(movies.reverse());
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.status(403).json("You are not allowed!");
		}
	};
}

export default MovieController;
