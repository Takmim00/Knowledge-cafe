import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookMarks }) => {
  return (
    <div className="md:w-1/3 bg-[#1111110D] mt-8 ml-6 rounded-lg">
      <p className="text-2xl font-bold pl-4 pt-4">
        BookMarked Blogs : {bookMarks.length}
      </p>
      {bookMarks.map((bookMark) => (
        <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>
      ))}
    </div>
  );
};
BookMarks.propTypes = {
  bookMarks: PropTypes.array,
};

export default BookMarks;
