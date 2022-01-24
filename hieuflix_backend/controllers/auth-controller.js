import UserModel from "../models/User.js";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

class AuthController {
	// [POST] /login
	login = async (req, res, next) => {
		try {
			const user = await UserModel.findOne({ email: req.body.email });
			if(!user){
			 	return res.status(401).json("Wrong password or username!");

			}

			const bytes = CryptoJS.AES.decrypt(
				user.password,
				process.env.SECRET_KEY
			);
			const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

			if(originalPassword !== req.body.password){
				return res.status(401).json("Wrong password or username!");

			}

			const accessToken = jwt.sign(
				{ id: user._id, isAdmin: user.isAdmin },
				process.env.SECRET_KEY,
				{ expiresIn: "6d" }
			);

			const { password, ...info } = user._doc;

			return res.status(200).json({ ...info, accessToken });
		} catch (err) {
			return res.status(500).json(err);
		}
	};

	// [POST] /register
	register = async (req, res, next) => {
		//create a new user
		const newUser = new UserModel({
			username: req.body.username,
			email: req.body.email,
			password: CryptoJS.AES.encrypt(
				req.body.password,
				process.env.SECRET_KEY
				).toString(),
			});
			
			try {
			console.log("register", newUser)
			const user = await newUser.save();
			console.log("ko save dc /")
			return res.status(201).json(user);
		} catch (err) {
			return res.status(500).json(err);
		}
	};
}

export default AuthController;
