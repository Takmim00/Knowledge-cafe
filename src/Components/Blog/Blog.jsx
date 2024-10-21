import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog}) => {
    const {title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;
    return (
        <div className='space-y-6 mb-4'>
            <img className='w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <p className='text-2xl font-bold'>{author}</p>
                        <p className='text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-gray-500'>{reading_time} min read</span>
                    <button className='text-2xl'><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            {
                hashtags.map((hash , idx) => <span className='text-zinc-500 ml-3' key={idx}><a href="">#{hash}</a></span>)
            }
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
}

export default Blog;