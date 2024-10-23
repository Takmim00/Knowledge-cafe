import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/Bookmarks/BookMarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToMarks = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  const handleMarkAsRead = (time,id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    //remove the read blog from bookmarks
    // console.log('remove book mark', id);
    const remainingBookMarks = bookMarks.filter(bookMark => bookMark.id !== id);
    setBookMarks(remainingBookMarks)
  };
  return (
    <>
      <Header></Header>
      <div className="w-11/12 m-auto md:flex">
        <Blogs
          handleAddToMarks={handleAddToMarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
      </div>
    </>
  );
}

export default App;
