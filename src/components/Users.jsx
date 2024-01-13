import { useEffect, useState } from "react";
// import Todos from "./Todos";
// import Album from "./Album";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [album, setAlbums] = useState([]);

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
  const getUserAlbums = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/album?userId=${id}`
      );
      const data = await res.json();
      setAlbums(data);
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
            <h2> {user.email}</h2>
            <h2> {user.website}</h2>
            <h2> {user.address}</h2>
            <h2> {user.phone}</h2>
            <div className="ss">
              <button onClick={() => getUserPosts(user.id)} className="but">
                Posts
              </button>
              <button onClick={() => getUserTodos(user.id)} className="but">
                Todos
              </button>
              <button onClick={() => getUserAlbums(user.id)} className="but">
                Albums
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.userId}</h2>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <div className="todos">
        {todos.map((todos) => (
          <div key={todos.id} className="todos">
            <h2>{todos.userId}</h2>
            <h2>{todos.title}</h2>
            <p>{todos.complete}</p>
          </div>
        ))}
      </div>
      <div className="albums">
        {album.map((albums) => (
          <div key={albums.id} className="albums">
            <h2>{albums.userId}</h2>
            <h2>{albums.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
