import react, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
const baseUrl = "http://localhost:7000/api/";

export default function Home() {
  const MONTHS = useMemo(
    () => [
		
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      
    ],
    []
  );

	const [userStats, setUserStats] = useState([]);

	useEffect(() => {
		const getStats = async () => {
			try {
				const data = await axios.get(baseUrl + "users/stats", {
					headers: {
						// token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTkzMDJjNTE4NmQ3MTUwMDYyYmQ5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mjc1ODI3MywiZXhwIjoxNjQyOTMxMDczfQ.zPLSksqmkJgb8Xir20DdXog7Q-YJRKYiczaNbzU17p4",
						token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,

					},
				});

				// setUserStat(data.data);
        const statsList = data.data.sort(function (a, b) {
          return a._id - b._id;
        });

				statsList.map((item) =>
					setUserStats((prev) => [
						...prev,
						{ name: MONTHS[item._id - 1], "New User": item.total },
					])
				);
			} catch (error) {
				console.log(error);
			}
		};

		getStats();
	}, [MONTHS]);

	console.log(userStats);
	return (
		<div className="home">
			<FeaturedInfo />
			<Chart
				data={userStats}
				title="User Analytics"
				grid
				dataKey="New User"
			/>
			<div className="homeWidgets">
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
}
