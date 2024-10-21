import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/Bookmarks/BookMarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const handleAddToMarks = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };
  return (
    <>
      <Header></Header>
      <div className="w-11/12 m-auto md:flex">
        <Blogs handleAddToMarks={handleAddToMarks}></Blogs>
        <BookMarks bookMarks={bookMarks}></BookMarks>
      </div>
    </>
  );
}

export default App;
