import React from "react";
import "./watch.scss";
import { ArrowBack } from "@material-ui/icons";
import { useLocation, Link } from "react-router-dom";

const Watch = () => {
	const location = useLocation();
	const movie = location.state.movie;
	console.log(location.state.movie);

	return (
		<div className="watch">
			<Link to="/">
			<div className="back">
				<ArrowBack />
				Home
			</div>
			</Link>

			<video
				src={movie.video}
				className="video"
				autoPlay
				progress
				controls
			></video>
		</div>
	);
};

export default Watch;
