import { useState, useEffect } from "react";
import "./widgetSm.css";
import { SettingsPhoneTwoTone, Visibility } from "@material-ui/icons";
import axios from "axios";

const baseUrl = "http://localhost:7000/api/";

export default function WidgetSm() {
	const [newUser, setNewUser] = useState([]);

	useEffect(() => {
		const getNewUser = async () => {
			try {
				const res = await axios.get(baseUrl + "users?new=true", {
					headers: {
						// token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTkzMDJjNTE4NmQ3MTUwMDYyYmQ5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjkzNTQwNCwiZXhwIjoxNjQzNDUzODA0fQ.djwCNo8X4o567aYZrwj7BRB81_2XZnxbvbn2GcDezss",
						token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,

					},
				});

        setNewUser(res.data);
			} catch (error) {}
		};

    getNewUser();
	},[newUser]);

	return (
		<div className="widgetSm">
			<span className="widgetSmTitle">New Join Members</span>
			<ul className="widgetSmList">

        {newUser.map(user =>(

          
          <li className="widgetSmListItem">
					<img
          src={user.profilePic || "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"}
						alt=""
						className="widgetSmImg"
            />
					<div className="widgetSmUser">
						<span className="widgetSmUsername">{user.username}</span>
						<span className="widgetSmUserTitle">
							Software Engineer
						</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
          ))}
			

				{/* <li className="widgetSmListItem">
					<img
						src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Anna Keller</span>
						<span className="widgetSmUserTitle">
							Software Engineer
						</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li> */}
				
			</ul>
		</div>
	);
}
