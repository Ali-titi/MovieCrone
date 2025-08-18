import { Link } from "react-router-dom";

function Films(props) {
  return (
    <div className="hover:[&>img]:h-[210px] transition-all">
      <img src={props.image} alt={props.title} className="h-[240px] rounded-lg" />
      <p className="font-semibold">{props.title}</p>
      <p className="flex justify-between text-sm">
        <span>{props.release_date?.slice(0, 4)}</span>
        <span>{props.vote_average}</span>
      </p>

      {/* NEW Details Button */}
      <Link
        to={`/movie/${props.id}`}
        className="mt-2 inline-block bg-teal-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-teal-700"
      >
        Details
      </Link>
    </div>
  );
}

export default Films;
