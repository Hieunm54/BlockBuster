import React, { useRef, useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import ListItem from "../listItem/ListItem";
import "./list.scss";

const List = ({list}) => {
	const [isMoved, setIsMoved] = useState(false);
	const [slideNumber, setSlideNumber] = useState(0);
	const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
	const listRef = useRef();

	//handle slide to choose movies
	const handleClick = (directions) => {
		// get the position
        setIsMoved(true);
		let distance = listRef.current.getBoundingClientRect().x - 50;

		//making animation
		if (directions === "left" && slideNumber > 0) {
			console.log("slideNumber left", slideNumber);
			setSlideNumber(slideNumber - 1);
			listRef.current.style.transform = `translateX(${230 + distance}px)`;
		}
		if (directions === "right" && slideNumber < 10 - clickLimit) {
			console.log("slideNumber right", slideNumber);

			// let rightMove = distance - 230;
			setSlideNumber(slideNumber + 1);
			listRef.current.style.transform = `translateX(${distance - 230}px)`;
		}
	};



	return (
		<div className="list">
			<span className="listTitle">{list.title}</span>

			<div className="wrapper">
				<ArrowBackIos
					className="sliderArrow left"
					onClick={() => handleClick("left")}
                    style={{display: !isMoved && 'none'}}
				/>
				<div className="container" ref={listRef}>
					{list.content.map((item,i)=>(
						<ListItem index={i} item={item} />
						))
					}
					
				</div>
				<ArrowForwardIos
					className="sliderArrow right"
					onClick={() => handleClick("right")}
				/>
			</div>
		</div>
	);
};

export default List;
