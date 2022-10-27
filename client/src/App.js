import { Route, Routes } from "react-router-dom";
import Signup from "./components/Singup";
import Login from "./components/Login";
import UserDash from "./components/User/UserDash"

function App() {
	// const user = localStorage.getItem("userID");

	return (
		<Routes>
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/dashboard" exact element={<UserDash />} />
		</Routes>
	);
}
/* <Route path="/userPage" element={<Navigate replace to="/login" />} /> */

export default App;
