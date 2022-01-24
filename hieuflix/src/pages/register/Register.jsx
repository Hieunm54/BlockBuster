import axios from "axios";
import React, { useState, useRef } from "react";
import "./register.scss";
import { useNavigate } from "react-router-dom";
const baseUrl = "http://localhost:7000/api/";
const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const navigate = useNavigate();

	const emailRef = useRef();
	const passwordRef = useRef();
	const usernameRef = useRef();

	const handleStart = (e) => {
		e.preventDefault();
		setEmail(emailRef.current.value);
		console.log(email);
	};

	const handleFinish = async (e) => {
		e.preventDefault();
		setPassword(passwordRef.current.value);
		setUsername(usernameRef.current.value);
		try {
			await axios.post(baseUrl + "auth/register", {
				email,
				username,
				password,
			});
			navigate("/login");
		} catch (err) {}
	};

	return (
		<div className="register">
			<div className="top">
				<div className="wrapper">
					<img
						className="logo"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
						alt=""
					/>
					<button className="loginButton" onClick={()=> navigate('/login')}>Sign In</button>
				</div>
			</div>

			<div className="container">
				<h1>Unlimited movies, TV shows, and more.</h1>
				<h2>Watch anywhere. Cancel anytime.</h2>
				<p>
					Ready to watch? Enter your email to create or restart your
					membership.
				</p>
				{
					// console.log('email already')
					!email ? (
						<div className="input">
							<input
								type="email"
								placeholder="Enter your email"
								ref={emailRef}
							/>
							<button
								className="registerButton"
								onClick={handleStart}
							>
								Get started
							</button>
						</div>
					) : (
						<form className="input">
							<input
								type="username"
								placeholder="username"
								ref={usernameRef}
							/>
							<input
								type="password"
								placeholder="Enter your password"
								ref={passwordRef}
							/>

							<button
								className="registerButton"
								onClick={handleFinish}
							>
								Start
							</button>
						</form>
					)
				}
			</div>
		</div>
	);
};

export default Register;
