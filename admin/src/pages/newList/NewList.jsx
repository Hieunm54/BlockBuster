import React, { useState, useContext, useEffect } from "react";
import "./newList.css";
import storage from "../../firebase.js";
import { createMovie, getMovies } from "../../context/movieContext/apiCalls";
import {createList } from "../../context/listContext/apiCalls";
import { useHistory } from "react-router-dom";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";

export default function NewProduct() {
	const [list, setList] = useState(null);
	const history = useHistory()

	const { dispatch } = useContext(ListContext);
	const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

	useEffect(() => {
		getMovies(dispatchMovie);
	}, [dispatchMovie]);

	const handleChange = (e) => {
		const value = e.target.value;
		setList({ ...list, [e.target.name]: value });
	};

	const handleSelect = (e) => {
		// console.log(e.target.selectedOptions)
		let value = Array.from(
			e.target.selectedOptions,
			(option) => option.value
		);
		setList({ ...list, [e.target.name]: value });
	};

	console.log("list: ", list);

	const handleSubmit = (e) => {
		e.preventDefault();
		// createMovie(movie, dispatch);
		createList(list, dispatch);
		history.push("/lists")
	};

	return (
		<div className="newProduct">
			<h1 className="addProductTitle">New List</h1>
			<form className="addProductForm">
				<div className="formLeft">
					<div className="addProductItem">
						<label>Title</label>
						<input
							type="text"
							placeholder="Your List Name"
							id="title"
							name="title"
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
						<label>Type</label>
						<select
							name="type"
							onChange={handleChange}
						>
							<option selected>--Type--</option>
							<option value="movie">Movie</option>
							<option value="series">Series</option>
						</select>
					</div>
				</div>

				<div className="formRight">
					<div className="addProductItem">
						<label>Content</label>
						<select multiple name="content" onChange={handleSelect} style={{height:"280px"}}>
							{movies.map((movie) => (
								<option key={movie._id} value={movie._id}>
									{movie.title}
								</option>
							))}
						</select>
					</div>
				</div>
				<button className="addProductButton" onClick={handleSubmit}>
					Create
				</button>
			</form>
		</div>
	);
}
