import { Link } from "react-router-dom";

function Films(props) {
  return (
    <div className="hover:[&>img]:h-[210px] transition-all w-full">
      <img
        src={props.image}
        alt={props.title}
        className="w-full h-[220px] sm:h-[240px] object-cover"
      />
      <p className="font-semibold text-sm sm:text-base mt-2">{props.title}</p>
      <p className="flex justify-between text-xs sm:text-sm">
        <span>{props.release_date?.slice(0, 4)}</span>
        <span>{props.vote_average}</span>
      </p>

      <Link
        to={`/movie/${props.id}`}
        className="mt-2 inline-block bg-teal-600 text-white px-3 py-1 text-xs sm:text-sm hover:bg-teal-700"
      >
        Details
      </Link>
    </div>
  );
}

export default Films;
