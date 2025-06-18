import {useNavigate } from "react-router-dom";

import "./index.css";

const Lists = (props) => {
  const navigate = useNavigate();

  const { lists } = props;

  const navigateSiglePost = (post) => {
    const queryParams = new URLSearchParams();
    queryParams.append("post", JSON.stringify(post)); 
    navigate(`/siglePost/?${queryParams.toString()}`);
    window.scrollTo(0, 0);
  };



  return (
    <>
      <div className="flex-container post-wrapper" style={{"--gap": "20px"}}>
        {lists.map((post, index) => (
          <div
            key={index}
            className="post-list cart position three-cart-layout"
            style={{
              "--pad": "20px 30px 80px 30px",
              "--pos": "relative",
              "--b-r": "20px",
              
            }}
          >
            <h3>{post.title}</h3>
            <a href={`${import.meta.env.BASE_URL}university/${post.university}`}>
              <p>{post.university}</p>
            </a>
            
            <hr />
            <ul>
              <li>
                <span>
                  <i class="fas fa-graduation-cap"></i>
                </span>
                {post.qualification}
              </li>

              <li>
                <span>
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                {post.location}
              </li>

              <li>
                <span>
                  <i class="fas fa-calendar-alt"></i>
                </span>
                Next Intake: {post.nextIntake}
              </li>

              {post.entryScore && (
                <li>
                  <span>
                    <i class="fas fa-chart-line"></i>
                  </span>
                  {post.entryScore}
                </li>
              )}

              <li>
                <span>
                  <i className="fas fa-dollar-sign"></i>
                </span>
                {post.fees}
              </li>
            </ul>

            <button
              className="position"
              style={{
                "--pos": "absolute",
                "--inset": "auto auto 20px auto",
                width: "calc(100% - 60px)",
              }}
              onClick={() => {
                navigateSiglePost(post);
              }}
            >
              See more
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Lists;
