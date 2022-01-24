import React, { useState, useEffect } from "react";
import "./listItem.scss";
import {
	PlayArrow,
	Add,
	ThumbUpOutlined,
	ThumbDownAltOutlined,
} from "@material-ui/icons";
import axios from "axios";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Link,
} from "react-router-dom";

const baseURL = "http://localhost:7000/api/";

const ListItem = ({ index, item }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [movie, setMovie] = useState({});
	useEffect(() => {
		const getMovie = async () => {
			try {
				const data = await axios.get(baseURL + "movies/find/" + item, {
					headers: {
						token:
							  "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
							// "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWJkZGQxZWM1OTM4NzhjOThlZjA4NiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDI5NDgxMzIsImV4cCI6MTY0MzQ2NjUzMn0.cxY9B8r4EJ4lJgs2Mg9wRl9egHBEUGme9qytYX5IYz8",
					},
				});
				// console.log("data.data ", data.data);
				if(!data.data){
					console.log('item broken: ', item);
				} else{

					setMovie(data.data);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getMovie();
	}, [item]);



	return (
		<Link to="/watch" state={{movie:movie}}>
			<div
				className="listItem"
				style={{
					left: isHovered && index * 225 - 50 + index * 2.5,
				}}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<img src={movie.img} alt="" />

				{isHovered && (
					<>
						<video src={movie.trailer} autoPlay={true} loop />

						<div className="itemInfo">
							<div className="icons">
								<PlayArrow className="icon" />
								<Add className="icon" />
								<ThumbUpOutlined className="icon" />
								<ThumbDownAltOutlined className="icon" />
							</div>
							<div className="itemInfoTop">
								<span>{movie.duration}</span>
								<span className="limit">+{movie.limit}</span>
								<span>{movie.year}</span>
							</div>
							<div className="description">
								{movie.description}
							</div>
							<div className="genre">{movie.genre}</div>
						</div>
					</>
				)}
			</div>
		</Link>
	);
};

export default ListItem;
