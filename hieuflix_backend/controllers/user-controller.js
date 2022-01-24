import UserModel from "../models/User.js";
import CryptoJS from "crypto-js";

class UserController {
	// update user
	updateUser = async (req, res, next) => {
		if (req.user.id === req.params.id || req.user.isAdmin) {
			if (req.body.password) {
				req.body.password = CryptoJS.AES.encrypt(
					req.body.password,
					process.env.SECRET_KEY
				).toString();
			}

			try {
				const updatedUser = await UserModel.findByIdAndUpdate(
					req.params.id,
					{
						$set: req.body,
					},
					{ new: true }
				);
				res.status(200).json(updatedUser);
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.status(403).json("You can update only your account!");
		}
	};

	//delete user
	deleteUser = async (req, res, next) => {
		if (req.user.id === req.params.id || req.user.isAdmin) {
			try {
				await UserModel.findByIdAndDelete(req.params.id);
				console.log('delte user', req.params.id);
				res.status(200).json("User has been deleted");
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.status(403).json("You can delete only your account!");
		}
	};

	// get user
	getSingleUser = async (req, res, next) => {
		try {
			const user = await UserModel.findById(req.params.id);
			const { password, ...info } = user._doc;
			res.status(200).json(info);
		} catch (err) {
			res.status(500).json(err);
		}
	};

	// get all user
	getAll = async (req, res, next) => {
		const query = req.query.new;
		if (req.user.isAdmin) {
			try {
				const users = query
					? await UserModel.find().sort({ _id: -1 }).limit(5)
					: await UserModel.find();
				res.status(200).json(users);
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.status(403).json("You are not allowed to see all users!");
		}
	};

	// get users stats
	getStat = async (req, res, next) => {
		const today = new Date();
		const latYear = today.setFullYear(today.setFullYear() - 1);

		try {
			const data = await UserModel.aggregate([
				{
					$project: {
						month: { $month: "$createdAt" },
					},
				},
				{
					$group: {
						_id: "$month",
						total: { $sum: 1 },
					},
				},
			]);
			res.status(200).json(data);
		} catch (err) {
			res.status(500).json(err);
		}
	};
}

export default UserController;
