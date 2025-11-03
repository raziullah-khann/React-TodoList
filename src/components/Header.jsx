import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${classes.link} ${classes.active}` : classes.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/add-todo"
          className={({ isActive }) =>
            isActive ? `${classes.link} ${classes.active}` : classes.link
          }
        >
          Add Todo
        </NavLink>

        <NavLink
          to="/todolist"
          className={({ isActive }) =>
            isActive ? `${classes.link} ${classes.active}` : classes.link
          }
        >
          Todo List
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
