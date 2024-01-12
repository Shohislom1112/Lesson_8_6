import { useEffect, useState } from "react";

const DocumentTitle = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(
    () => {
      console.log("useEffect called");
      document.title = `Count: ${count}`;

      return () => {};
    }
    //  []
  );

  return (
    <div>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Incement</button>
    </div>
  );
};

export default DocumentTitle;
