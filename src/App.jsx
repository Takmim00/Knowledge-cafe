import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/Bookmarks/BookMarks";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="w-11/12 m-auto md:flex">
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </div>
    </>
  );
}

export default App;
