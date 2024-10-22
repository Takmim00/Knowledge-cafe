import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookMarks , readingTime}) => {
  return (
    <div className="md:w-1/3 ml-6 ">
      <div className="bg-[#6047EC1A] border-2 border-purple-700 rounded-xl py-5  mt-6 flex items-center justify-center ">
        <p className="text-2xl font-bold">Spent time on read : {readingTime} min</p>
      </div>
      <div className="bg-[#1111110D] rounded-lg  mt-4 ">
        <p className="text-2xl font-bold pl-4 py-4">
          BookMarked Blogs : {bookMarks.length}
        </p>
        {bookMarks.map((bookMark) => (
          <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>
        ))}
      </div>
    </div>
  );
};
BookMarks.propTypes = {
  bookMarks: PropTypes.array,
  readingTime : PropTypes.number
};

export default BookMarks;
