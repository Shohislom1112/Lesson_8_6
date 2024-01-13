import { useEffect, useState } from "react";

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
      <ul>
        {album.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Album;
