import Home from "./pages/home/Home";
import "./app.scss";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

function App() {
	const { user } = useContext(AuthContext);
	// const user = true;
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						user ? <Home user={user}/> : <Navigate replace to="/register" />
					}
				/>

				{/* {user ? <Home /> : <Redirect to="/register" />} */}
				<Route path="/movies" element={<Home user={user} type="movie" />} />
				<Route
					path="/register"
					element={!user ? <Register /> : <Navigate replace to="/" />}
				/>
				<Route
					path="/login"
					element={!user ? <Login /> : <Navigate replace to="/" />}
				/>

				{user && (
					<>
						<Route
							path="/series"
							element={<Home user={user} type="series" />}
						/>
						<Route path="/watch" element={<Watch />} />
					</>
				)}
			</Routes>
			{/* <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route> */}
			{/* {user && (
          <>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
        )} */}
		</Router>
	);
}

export default App;
