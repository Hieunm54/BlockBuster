import axios from "axios";
import {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  createUserStart,
  createUserSuccess,
  createUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} from "./UserActions";
const baseUrl = "http://localhost:7000/api/";

export const getUsers = async (dispatch) => {
	dispatch(getUsersStart());
	try {
		const res = await axios.get(baseUrl + "users/", {
			headers: {
				token:
					"Bearer " +
					JSON.parse(localStorage.getItem("user")).accessToken,
			},
		});
		dispatch(getUsersSuccess(res.data));
	} catch (err) {
		dispatch(getUsersFailure());
	}
};

// create
export const createUser = async (movie, dispatch) => {
	dispatch(createUserStart());
	try {
		const res = await axios.post(baseUrl + "users", movie, {
			headers: {
				token:
					"Bearer " +
					JSON.parse(localStorage.getItem("user")).accessToken,
			},
		});
		dispatch(createUserSuccess(res.data));
	} catch (err) {
		dispatch(createUserFailure());
	}
};

//delete
export const deleteUser = async (id, dispatch) => {
	dispatch(deleteUserStart());
	try {
		await axios.delete(baseUrl + "users/" + id, {
			headers: {
				token:
					"Bearer " +
					JSON.parse(localStorage.getItem("user")).accessToken,
			},
		});
		dispatch(deleteUserSuccess(id));
	} catch (err) {
		dispatch(deleteUserFailure());
	}
};
