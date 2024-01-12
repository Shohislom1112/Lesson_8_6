import { useEffect, useState } from "react";
// import AddTodos from "./AddTodos";

const Album = () => {
  const [album, setAlbums] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setAlbums(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <AddTodos fetchData={fetchData} /> */}
      <ul>
        {album.map((ab) => (
          <li key={ab.id}>{ab.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Album;
