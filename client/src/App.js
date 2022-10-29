import { Route, Routes } from "react-router-dom";
import Signup from "./components/Singup";
import Login from "./components/Login";
import UserDash from "./components/User/UserDash"
import Profile from "./components/Profile/Profile";
import Ticket from "./components/RequestTicket/RequestTicket"
import Services from "./components/Services/Services"
import Payment from "./components/Payment/Payment"
import Confirmation from "./components/Confirmation/Confirmation"

function App() {
	// const user = localStorage.getItem("userID");

	return (
		<Routes>
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/" exact element={<Login />} />
			<Route path="/dashboard" exact element={<UserDash />} />
			<Route path="/profile" exact element={<Profile />} />
			<Route path="/ticket" exact element={<Ticket />} />
			<Route path="/service" exact element={<Services />} />
			<Route path="/payment" exact element={<Payment />} />
			<Route path="/confirm" exact element={<Confirmation />} />
		</Routes>
	);
}
/* <Route path="/userPage" element={<Navigate replace to="/login" />} /> */

export default App;
