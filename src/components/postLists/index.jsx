import { useSearchParams, useNavigate } from "react-router-dom";

import Header from "../header";
import Lists from "../lists";
import Footer from "../footer";
import pageData from '../../../data/postLists.json'

// import pageData from "./data.json";
import "./index.css";

const PostLists = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get query params and handle them as arrays
  const courses = searchParams.get("courses")?.split(",") || [];
  const studyLevel = searchParams.get("studyLevel")?.split(",") || [];
  const destination = searchParams.get("destination")?.split(",") || [];



 

  const filterCourse = (data) => {
    var filterData = data.filter(
      (obj) =>
        courses.includes(obj.course) &&
        studyLevel.includes(obj.studyLevel) &&
        destination.includes(obj.destination)
    );
    return filterData;
  };

  

  var filterData = filterCourse(pageData);

  return (
    <div className="post-list-bg">
      <Header />
      <div className="banner section">
        <div className="container">
          <h1>
            {filterData.length} Courses Available in {destination.join(", ")}
          </h1>
          <p>
            Found {filterData.length} Doctorate Health Sciences courses and
            degrees in {destination} for international students, showing the
            most popular courses below
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container ">
          {filterData.length > 0 ? (
            <Lists lists={filterData}/>
          ) : (
            <h2 className="no-found-text">
              No Results Found
              <br />
              Try selecting multiple options
            </h2>
          )}
        </div>
      </div>
     
      <Footer />
    </div>
  );
};

export default PostLists;
