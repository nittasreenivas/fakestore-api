import "./index.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <li>
          {" "}
          <Link to="/"> Home </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/products"> products </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/signin"> Signin </Link>{" "}
        </li>
      </ul>
    </div>
  );
}
