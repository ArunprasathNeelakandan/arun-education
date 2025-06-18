import { useParams, useSearchParams, Link } from "react-router-dom";

import Header from "../header";
import Contact from "../contact";
import Footer from "../footer";

import universityData from "./data.json";

import "./index.css";



const Universities = () => {
  const { universityName } = useParams();
  const [searchParams] = useSearchParams();

  const filderData = universityData.find(
    (each) =>
      each.university.toLowerCase() ==
      decodeURIComponent(universityName).toLowerCase()
  );

  const randomNumber = Math.floor(Math.random() * 5) + 1;

console.log(`${import.meta.env.BASE_URL}university-${randomNumber}.jpg`)
  return (
    <div className="universities-bg">
      <Header />
      <div className="banner ">
        <div className="container">
          <img src={`./university-${randomNumber}.jpg`} alt="" />
          <h1>{filderData.university}</h1>
          <a href={`${import.meta.env.BASE_URL}counselling`}><button>Avail FREE Counselling</button></a>
        </div>
      </div>
      <div className="list-detailes-container">
        <div className="container section">
          <div className="flex-container">
            <div>
              <h4>Location</h4>
              <p>{filderData.destination}</p>
            </div>
            <div>
              <h4>International students</h4>
              <p>{filderData.internationalStudents}</p>
            </div>
            <div>
              <h4>Cost of living (Avg)</h4>
              <p>{filderData.costOfLiving}</p>
            </div>
            {
              filderData.ranking !== "" && (
                <div>
              <h4>THE World Ranking</h4>
              <p>{filderData.ranking}</p>
            </div>
              )
            }
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="container section">
          <h2 className="section-head">University info</h2>
          <div className="flex-container" style={{ "--gap": "30px" }}>
            <div className="main-cart">
              <h4>Overview</h4>
              {filderData.overView.map((each, index) => (
                <p key={index}>{each}</p>
              ))}

              <a
                href={filderData.site}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit the university website
              </a>
            </div>

            <div className="sub-cart">
              <div className="cart">
                <h3>Feeling stuck? Let our expert counsellor help you.</h3>
                <p>
                  Can't decide on the university and course? Our experienced
                  counsellors are here to guide and support you through each
                  stage of your study abroad journey. Reach out today!
                </p>
                <button>Meet a counsellor</button>

                <img
                  src="./ssss.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default Universities;
