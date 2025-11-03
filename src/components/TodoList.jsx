import TodoItem from "./TodoItem";
import useLocalStorage from "../hooks/useLocalStorage";
const TodoList = () => {
  const { todos, setTodos } = useLocalStorage("todos", []);
  const deleteHandler = (ind) => {
    const updateList = todos.filter((_, i) => i !== ind);
    setTodos(updateList);
  };
  return (
    <>
      <ul>
        {todos.map((item, ind) => (
          <TodoItem key={item.title || ind} ind={ind} item={item} deleteHandler={deleteHandler} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
