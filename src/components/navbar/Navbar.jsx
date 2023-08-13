// CSS
import "./Navbar.css";

function Navbar({ usersLength }) {
  return (
    <div className="navbar">
      <div className="container navbar-container">
        <h1 className="navbar-logo">CUser</h1>
        <h3 className="navbar-counter">
          {usersLength > 0 ? "You have:" + usersLength : "No users :("}
        </h3>
      </div>
    </div>
  );
}

export default Navbar;
