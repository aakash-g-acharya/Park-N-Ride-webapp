import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Main = () => {


	const navigate = useNavigate();

	useEffect(()=>{
		const user = localStorage.getItem("userID");
		if(!user){
			navigate("/login")
		}
	})

	

	const handleLogout = () => {
		localStorage.removeItem("userID");
		navigate("/login");
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>fakebook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;
