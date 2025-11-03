import {createBrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home";
import AddTodo from './components/AddTodo';
import UpdateTodo from './components/UpdateTodo';
import TodoList from './components/TodoList';
import Error from './Error.jsx';
import App from './App';

const router = createBrowserRouter([
    {path: '/', errorElement: <Error />, element: <App />, children: [
        { path:'/add-todo', element: <AddTodo />},
        { path:'/update-todo/:mytitle', element: <UpdateTodo />},
        { path:'/todolist', element: <TodoList />}

    ]}
]);

export default router;