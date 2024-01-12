import { useEffect, useState } from "react";
// import Todos from "./Todos";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getUserPosts = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getUserTodos = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${id}`
      );
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div className="users">
        {users.map((user) => (
          <div key={user.id} className="user">
            <h2>{user.id}</h2>
            <h2>{user.name}</h2>
            <h2>{user.username}</h2>
            <button onClick={() => getUserPosts(user.id)}>Posts</button>
            <button onClick={() => getUserTodos(user.id)}>Todos</button>
          </div>
        ))}
      </div>

      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.userId}</h2>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {/* <button onClick={() => getUserPosts(user.id)}>Posts</button> */}
          </div>
        ))}
      </div>
      <div className="todos">
        {todos.map((todos) => (
          <div key={todos.id} className="todos">
            <h2>{todos.userId}</h2>
            <h2>{todos.title}</h2>
            <p>{todos.completed}</p>
            {/* <button onClick={() => getUserTodos(user.id)}>Todos</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
