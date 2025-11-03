import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import classes from "./UpdateTodo.module.css";
import useLocalStorage from "../hooks/useLocalStorage";

const UpdateTodo = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { todos, setTodos } = useLocalStorage("todos", []);
  const { mytitle } = useParams();
  const product = todos.find((p) => p.title === mytitle);
  console.log("getting product from url title", product);
  console.log("getting parama from url", mytitle);
  
  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setPrice(product.price);
      setDescription(product.description);
    }
  }, [product]);
  const validation = () => {
    if (
      title.trim() === "" ||
      price.trim() === "" ||
      description.trim() === ""
    ) {
      setError("All field required!");
      return false;
    }
    if (title.trim().length < 3) {
      setError("Title is must be atleast 3 charater!");
      return false;
    }
    if (Number(price.trim()) < 20) {
      setError("Price is must be atleast 20!");
      return false;
    }
    if (description.trim().length < 5) {
      setError("Description is must be atleast 5 charater!");
      return false;
    }
    setError("");
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const valid = validation();
    if (!valid) {
      return;
    }

    const UpdatedList = todos.map((todo) => {
      if (todo && todo.title === mytitle) {
        // Replace old values with new ones
        return { ...todo, title, price, description };
      }
      // Always return the current todo for others
      return todo;
    });
    setTodos(UpdatedList);

    // clear fields
    setTitle("");
    setPrice("");
    setDescription("");

    //redirect on list page
    navigate("/todolist");
  };

  return (
    <>
      {error && <p className={classes.error}>{error}</p>}
      <form onSubmit={submitHandler} className={classes.todoForm}>
        <div className={classes.inputdata}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={classes.inputdata}>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className={classes.inputdata}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Update Todo</button>
      </form>
    </>
  );
};

export default UpdateTodo;
