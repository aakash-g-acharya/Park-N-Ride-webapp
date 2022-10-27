import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Link to="/UserHome">USER</Link>
      <br />
      <Link to="/AdminHome">ADMIN</Link>
    </>
  );
}
