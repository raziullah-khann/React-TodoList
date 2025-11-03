import { NavLink } from "react-router-dom";
import classes from "./TodoItem.module.css";

const TodoItem = ({ item, ind, deleteHandler }) => {
  
  return (
    <div className={classes.container}>
      <h3>{item.title}</h3>
      <h2>{item.price}</h2>
      <p>{item.description}</p>
      <NavLink to={`/update-todo/${item.title}`}>Update</NavLink>
      <button onClick={() => deleteHandler(ind)} className={classes.delete}>Delete</button>
    </div>
  );
};

export default TodoItem;
