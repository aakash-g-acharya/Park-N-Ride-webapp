import {Link} from "react-router-dom";

export default function AdminHome()
{
    return(
        <>
        <Link to="/Func1">Profile</Link>
        <br />
        <Link to="/Func2">Contact Service Agents</Link>
        <br />
        <Link to="/Func31">Service Requests</Link>
        <br />
        <Link to="/Func4">Service Faulty Slots</Link>
        </>
    );
}