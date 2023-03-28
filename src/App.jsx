import { useState } from "react";
import "./App.css";
import PostList1 from "./components/PostList1";
import PostList2 from "./components/PostList2";
import Post from "./components/Post";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const [currentPage, setCurrentPage] = useState(<PostList1 />);

  return (
    <div className="App">
      <button onClick={() => setCurrentPage(<PostList1 />)}>Post List 1</button>{" "}
      <span></span>
      <button onClick={() => setCurrentPage(<PostList2 />)}>Post List 2</button>
      <span></span>
      <button onClick={() => setCurrentPage(<Post id={1} />)}>
        First Post
      </button>
      <br />
      {currentPage}
    </div>
  );
}

export default App;
