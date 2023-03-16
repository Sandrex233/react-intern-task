import { useEffect } from "react";
import { Link } from "react-router-dom";

const VisitedLinks = () => {
  const visitedLinks = JSON.parse(localStorage.getItem("visitedLinks")) || [];

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div>
      {visitedLinks.map((link, index) => (
        <span key={index}>
          {index > 0 && " > "}
          <Link to={link.link}>{link.name}</Link>
        </span>
      ))}
    </div>
  );
};

export default VisitedLinks;
