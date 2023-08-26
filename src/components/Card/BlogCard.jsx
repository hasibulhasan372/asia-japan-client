

const BlogCard = ({blog}) => {
    const {title, details, writer, img, date} = blog;
    return (
        <div className="py-[22px] px-5 border rounded-xl max-w-[384px]">
            <h3 className="text-[19px] text-[#011E40] font-semibold leading-8">{title}</h3>
            <p className="text-[#696969] leading-7 pb-3  ">{details}</p>
            <div className="flex flex-col md:flex-row gap-x-2">
                <span className="text-[#0092E0] text-sm font-medium  ">{writer}</span>
                <span className="text-[#696969] text-sm font-medium">{date}</span>
            </div>
            <div className="mt-6">
                <img src={img} alt="" className="" />
            </div>
            
        </div>
    );
};

export default BlogCard;