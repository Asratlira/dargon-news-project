import { FaRegCalendarAlt, FaRegEye, FaStar } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { MdOutlineToday } from "react-icons/md";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex gap-2">
        {news.others_info.is_trending && (
          <div className="badge badge-error gap-2 text-white">
            <IoIosTrendingUp /> Trending
          </div>
        )}
        {news.others_info.is_todays_pick && (
          <div className="badge badge-primary gap-2 text-white">
            <MdOutlineToday /> Today's Pick
          </div>
        )}
      </div>

      {/* News Image */}
      <figure className="relative h-48 overflow-hidden">
        <img
          src={news.image_url}
          alt={news.title}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-4">
        {/* Category */}
        <div className="flex justify-between items-center mb-2">
          <span className="badge badge-outline">{`Category ${news.category_id}`}</span>
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="text-sm font-medium">
              {news.rating.number} ({news.rating.badge})
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="card-title text-lg line-clamp-2">{news.title}</h2>

        {/* Author Info */}
        <div className="flex items-center gap-3 mt-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={news.author.img} alt={news.author.name} />
            </div>
          </div>
          <div>
            <p className="font-medium">{news.author.name}</p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <FaRegCalendarAlt />
              <span>
                {new Date(news.author.published_date).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Description (truncated) */}
        <p className="mt-3 text-gray-600 line-clamp-3">{news.details}</p>

        {/* Footer Stats */}
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <FaRegEye />
            <span>{news.total_view} views</span>
          </div>
          <button className="btn btn-primary btn-sm">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
