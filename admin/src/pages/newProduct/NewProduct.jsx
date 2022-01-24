import React, { useState, useContext } from "react";
import "./newProduct.css";
import storage from "../../firebase.js";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import {userHistory} from 'react-router-dom';
import { useHistory } from "react-router-dom";

export default function NewProduct() {
	const [movie, setMovie] = useState(null);
	const [img, setImg] = useState(null);
	const [imgTitle, setImgTitle] = useState(null);
	const [imgSm, setImgSm] = useState(null);
	const [trailer, setTrailer] = useState(null);
	const [video, setVideo] = useState(null);
	const [uploaded, setUploaded] = useState(0);

	const { dispatch } = useContext(MovieContext);

	const history = useHistory();

	const handleChange = (e) => {
		const value = e.target.value;
		setMovie({ ...movie, [e.target.name]: value });
	};
	// console.log('movie: ', img)
	const upload = (items) => {
		items.forEach((item) => {
			const fileName = new Date().getTime() + item.label + item.file.name;

			const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);

			// 1. 'state_changed' observer, called any time the state changes
			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log("Upload is " + progress + "% done");
				},
				// 2. Error observer, called on failure
				(error) => {
					console.log(error);
				},
				// 3. Completion observer, called on successful completion
				() => {
					uploadTask.snapshot.ref.getDownloadURL().then((url) => {
						setMovie((prev) => {
							return { ...prev, [item.label]: url };
						});
						setUploaded((prev) => prev + 1);
					});
				}
			);
		});
	};

	const handleUpload = (e) => {
		e.preventDefault();
		upload([
			{ file: img, label: "img" },
			{ file: imgTitle, label: "imgTitle" },
			{ file: imgSm, label: "thumnail" },
			{ file: trailer, label: "trailer" },
			{ file: video, label: "video" },
		]);
	};

	console.log("movie: ", movie);

	const handleSubmit = (e) => {
		e.preventDefault();
		createMovie(movie, dispatch);
		history.push('/movies')
	};

	return (
		<div className="newProduct">
			<h1 className="addProductTitle">New Movie</h1>
			<form className="addProductForm">
				<div className="addProductItem">
					<label>Image</label>
					<input
						type="file"
						id="img"
						name="img"
						onChange={(e) => setImg(e.target.files[0])}
					/>
				</div>
				<div className="addProductItem">
					<label>Title Image</label>
					<input
						type="file"
						id="imgTitle"
						name="imgTitle"
						onChange={(e) => setImgTitle(e.target.files[0])}
					/>
				</div>
				<div className="addProductItem">
					<label>Thumbnail Image</label>
					<input
						type="file"
						id="imgSm"
						name="imgSm"
						onChange={(e) => setImgSm(e.target.files[0])}
					/>
				</div>
				<div className="addProductItem">
					<label>Title</label>
					<input
						type="text"
						placeholder="Spider man"
						id="title"
						name="title"
						onChange={handleChange}
					/>
				</div>
				<div className="addProductItem">
					<label>Description</label>
					<input
						type="text"
						placeholder="Description"
						id="description"
						name="description"
						onChange={handleChange}
					/>
				</div>
				<div className="addProductItem">
					<label>Year</label>
					<input
						type="text"
						placeholder="Year"
						id="year"
						name="year"
						onChange={handleChange}
					/>
				</div>
				<div className="addProductItem">
					<label>Genre</label>
					<input
						type="text"
						placeholder="Genre"
						id="genre"
						name="genre"
						onChange={handleChange}
					/>
				</div>
				<div className="addProductItem">
					<label>Duration</label>
					<input
						type="text"
						placeholder="Duration"
						id="duration"
						name="duration"
						onChange={handleChange}
					/>
				</div>
				<div className="addProductItem">
					<label>Limit</label>
					<input
						type="text"
						placeholder="Limit"
						id="limit"
						name="limit"
						onChange={handleChange}
					/>
				</div>
				<div className="addProductItem">
					<label>is Series ?</label>
					<select name="active" id="isSeries">
						<option value="false">No</option>
						<option value="true">Yes</option>
					</select>
				</div>
				<div className="addProductItem">
					<label>Trailer</label>
					<input
						type="file"
						name="trailer"
						id="trailer"
						onChange={(e) => setTrailer(e.target.files[0])}
					/>
				</div>
				<div className="addProductItem">
					<label>Video</label>
					<input
						type="file"
						name="video"
						id="video"
						onChange={(e) => setVideo(e.target.files[0])}
					/>
				</div>
				{/* <button className="addProductButton">Upload</button> */}
				{uploaded === 5 ? (
					<button className="addProductButton" onClick={handleSubmit}>
						Create
					</button>
				) : (
					<button className="addProductButton" onClick={handleUpload}>
						Upload
					</button>
				)}
			</form>
		</div>
	);
}
