import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
	return (
		<div className="topbar">
			<div className="topbarWrapper">
				<div className="topLeft">
					<span className="logo">HieuFlix</span>
				</div>
				<div className="topRight">
					<div className="topbarIconContainer">
						<NotificationsNone />
						<span className="topIconBadge">2</span>
					</div>
					<div className="topbarIconContainer">
						<Language />
						<span className="topIconBadge">2</span>
					</div>
					<div className="topbarIconContainer">
						<Settings />
					</div>
					<img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
						alt=""
						className="topAvatar"
					/>
				</div>
			</div>
		</div>
	);
}
