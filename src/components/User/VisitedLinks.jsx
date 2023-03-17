import { Link } from "react-router-dom";

const VisitedLinks = ({ visitedLinks }) => {
  return (
    <div className="mb-5 p-5">
      {visitedLinks.map((link, index) => (
        <span key={index}>
          {index > 0 && " > "}
          <Link className="text-[#551A8B] underline text-base" to={link.link}>
            {link.name}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default VisitedLinks;
