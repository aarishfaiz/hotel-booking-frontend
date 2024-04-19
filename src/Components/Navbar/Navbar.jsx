
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogout = () => {
    // Call the logout function from AuthContext
    logout();
    // Redirect the user to the home page after logout
    navigate("/");
  };



  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={"/"} style={{ color: 'white', textDecoration: 'none' }}>
          <span className="logo">lamabooking</span>
        </Link>
        {user ? <>
          {user.username}
          <button onClick={handleLogout} >Log out</button>
        </> : <div className="navItems">
          <Link to={"/register"}>
            <button className="navButton">Register</button>
          </Link>
          <Link to={"/login"}>
            <button className="navButton">Login</button>
          </Link>
        </div>}
      </div>
    </div>
  )
}

export default Navbar