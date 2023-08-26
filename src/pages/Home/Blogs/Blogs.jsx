import BlogCard from "../../../components/Card/BlogCard";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import useBlogs from "../../../hooks/useBlogs";


const Blogs = () => {
    const [blogs] = useBlogs();
    return (
        <div className="my-con py-16 md:py-20 lg:py-32">
            <div className="md:w-5/6 lg:w-8/12 xl:w-1/2   mx-auto">
                <SectionTitle title="Why We Are Different From Another Real Estate"></SectionTitle>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 justify-center md:px-10 lg:px-0">
                {
                        blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>

        </div>
    );
};

export default Blogs;