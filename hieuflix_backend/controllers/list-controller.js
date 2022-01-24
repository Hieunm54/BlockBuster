import ListModel from "../models/List.js";

class ListController {
	// create
	createList = async (req, res, next) => {
		console.log("user ", req.user);
		if (req.user.isAdmin) {
			const newList = new ListModel(req.body);
			try {
				const savedList = await newList.save();
				res.status(201).json(savedList);
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.status(403).json("You are not allowed!");
		}
	};

	//delete
	deleteList = async (req, res, next) => {
		if (req.user.isAdmin) {
			try {
				await ListModel.findByIdAndDelete(req.params.id);
				res.status(201).json("The list has been delete...");
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.status(403).json("You are not allowed!");
		}
	};

	// get list
	getList = async (req, res, next) => {
		const typeQuery = req.query.type;
		const genreQuery = req.query.genre;
		console.log(typeQuery, genreQuery);
		let list = [];
		try {
			if (typeQuery) {
				if (genreQuery) {
					console.log("a");

					list = await ListModel.aggregate([
						{ $sample: { size: 10 } },
						{ $match: { type: typeQuery, genre: genreQuery } },
					]);
				} else {
					console.log("b");
					list = await ListModel.aggregate([
						{ $sample: { size: 10 } },
						{ $match: { type: typeQuery } },
					]);
					console.log("2");
				}
			} else {
				console.log("c");
				list = await ListModel.aggregate([
					{
						$sample: {
							size: 10,
						},
					},
				]);
			}
			res.status(200).json(list);
		} catch (err) {
			res.status(500).json(err);
		}
	};
}

export default ListController;
