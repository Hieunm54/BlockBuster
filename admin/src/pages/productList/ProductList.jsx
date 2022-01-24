import { useState, useContext, useEffect } from "react";
import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";

export default function ProductList() {
	const { movies, dispatch } = useContext(MovieContext);

	useEffect(() => {
		getMovies(dispatch);
	}, [dispatch]);

	const handleDelete = (id) => {
		// setData(data.filter((item) => item.id !== id));
		deleteMovie(id, dispatch);
	};

	// console.log(movies);

	const columns = [
		{ field: "_id", headerName: "ID", width: 120 },
		{
			field: "movie",
			headerName: "Movie",
			width: 450,
			renderCell: (params) => {
				return (
					<div className="productListItem">
						<img
							className="productListImg"
							src={params.row.img}
							alt=""
						/>
						{params.row.title}
					</div>
				);
			},
		},
		{ field: "genre", headerName: "Genre", width: 120 },
		{ field: "year", headerName: "Year", width: 120 },
		{ field: "limit", headerName: "Limit", width: 120 },
		{ field: "isSeries", headerName: "IsSeries", width: 120 },
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link
							to={{
								pathname: "/product/" + params.row._id,
								movie: params.row,
							}}
						>
							<button className="productListEdit">Edit</button>
						</Link>
						<DeleteOutline
							className="productListDelete"
							onClick={() => handleDelete(params.row._id)}
						/>
					</>
				);
			},
		},
	];

	return (
		<div className="productList">
			<div className="productTitleContainer">
				<h1 className="productTitle">Movie List</h1>
				<Link to="/newproduct">
					<button className="productAddButton">Create</button>
				</Link>
			</div>
			<DataGrid
				rows={movies}
				disableSelectionOnClick
				columns={columns}
				pageSize={8}
				checkboxSelection
				getRowId={(r) => r._id}
			/>
		</div>
	);
}
