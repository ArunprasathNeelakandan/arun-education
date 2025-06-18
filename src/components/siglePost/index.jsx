import { useSearchParams, useNavigate,Link } from "react-router-dom";
import { useState } from "react";
import Header from "../header";
import Lists from "../lists";
import Footer from "../footer";

import data from '../../../data/postLists.json'

import "./index.css";
import { use } from "react";

const HeadContainer = (props) => {
  const [showContent, setShowContent] = useState(false);

  const { content, head } = props;

  return (
    <>
      <div
        className="flex-container head-container"
        style={{ justifyContent: "space-between" }}
        onClick={() => {
          setShowContent((perv) => !perv);
        }}
      >
        <h3>{head}</h3>
        <div className="show-controle-container">
          {!showContent && <i className="fas fa-plus"></i>}
          {<i className="fas fa-minus"></i>}
        </div>
      </div>
      {showContent && content()}
    </>
  );
};

const SinglePost = () => {
  const navigate = useNavigate()

  const [searchParams] = useSearchParams();
  const postParam = searchParams.get("post");

  const post = postParam ? JSON.parse(postParam) : null;

  const navigateCourse = () => {

  }

  const renderAboutCourse = () => {
    return (
      <>
        {post.aboutCourse.map((element, index) => (
          <p key={index}>{element}</p>
        ))}
      </>
    );
  };

  const renderStartDates = () => {
    return (
      <>
        <p>
          Course fees are indicative and should be used as a guide.{" "}
          <a href="#">Speak to a counsellor</a> to get an accurate price.
        </p>
        <p>Duration: {post.duration}</p>
        <p>Fees: {post.fees}</p>
        <table className="intack-table">
          <thead>
            <tr>
              <td>Intake</td>
              <td>Location</td>
            </tr>
          </thead>
          <tbody>
            {post.startDates.map((row, index) => (
              <tr key={index}>
                <td>{row.intack}</td>
                <td>{row.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  const renderHowApply = () => {
    return (
      <>
        {post.howToApply.map((element, index) => (
          <div key={index}>
            <h5>{element.head}</h5>
            {element.content ? (
              <p>{element.content}</p>
            ) : (
              <p>
                The application deadline isn't available Speak to an{" "}
                <a href="#">Ria Education counsellor</a> for more detailed
                information
              </p>
            )}
          </div>
        ))}

        <h5>Further information</h5>
        <p>
          If you aren't eligible for the above entry requirements, you might
          have a chance to explore pathway options at Bishop's University. If
          you want to find out more, speak to our counsellors.
        </p>
      </>
    );
  };

  const renderReviews = () => {
    return(
      <>
        <h5>What our students think</h5>
        {post.reviews.length > 0 ? (post.reviews.map((review,index)=>(
          <p key={index}>{review}</p>
        ))):<p>We’ve haven’t received any reviews for this institution yet.</p> }
        
      </>
    )
  }

  const renderAboutUniversity = () => {
    return(
      <>
        <a href="#">More about {post.university}</a>
      </>
    )
  }

  return (
    <>
      <div className="sigle-post-bg">
        <Header />
        <div className="banner">
          <div className="container section">
            <h1>{post.title}</h1>
            <Link to={`/university/${post.university}`}>{post.university}</Link>
            <button>Apply with Ria Education</button>
          </div>
        </div>
        <div className="list-detailes-container">
          <div className="container section">
            <div className="flex-container">
              <div>
                <h4>Location</h4>
                <p>{post.destination}</p>
              </div>

              <div>
                <h4>Qualification</h4>
                <p>{post.qualification}</p>
              </div>

              <div>
                <h4>Fees</h4>
                <p>{post.fees}</p>
              </div>

              <div>
                <h4>Duration</h4>
                <p>{post.duration}</p>
              </div>

              <div>
                <h4>Next intake</h4>
                <p>{post.nextIntake}</p>
              </div>

              {post.entryScore && (
                <div>
                  <h4>Entry Score</h4>
                  <p>{post.entryScore}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="container section">
            <h2 className="section-head">Course info</h2>
            <div className="flex-container" style={{"--gap":"30px"}}>
              <div className="main-cart">
                <HeadContainer
                  content={renderAboutCourse}
                  head={"About the course"}
                />
                <hr />
                <HeadContainer
                  content={renderStartDates}
                  head={"Start dates and prices"}
                />
                <hr />
                <HeadContainer
                  content={renderHowApply}
                  head={"How to apply"}
                />
                <hr />
                <HeadContainer
                  content={renderReviews}
                  head={"Reviews and rankings"}
                />
                <hr />
                <HeadContainer
                  content={renderReviews}
                  head={`About ${post.university}`}
                />
                <hr />
               
              </div>

              <div className="sub-cart">
                  <div className="cart">
                    <h3>Feeling stuck? Let our expert counsellor help you.</h3>
                    <p>Can't decide on the university and course? Our experienced counsellors are here to guide and support you through each stage of your study abroad journey. Reach out today!</p>
                    <button>Meet a counsellor</button>

                    <img src="https://images.ctfassets.net/8bbwomjfix8m/6GJS3QSd7zxJA1ea5U7tG0/56c6c4b827386163fefe5f291234d9c4/Meet_counsellor_promo.png?fit=fill&w=360&q=80&fm=jpg" alt="" />
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section container">
              <h2 className="section-head">Recommended for you</h2>
              <Lists lists={data.slice(0,8)}/>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default SinglePost;
