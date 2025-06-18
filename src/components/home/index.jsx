import { useState } from "react";
import { data, useNavigate } from "react-router-dom";

import Header from "../header";
import MultiSelect from "../multiselectinput";
import Contact from "../contact";
import Footer from "../footer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Basic Swiper styles
import "swiper/css/navigation"; // Optional: Navigation arrows
import "swiper/css/pagination"; // Optional: Pagination dots

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import inputData from "../../../data/input-fields.json";
import contentData from "./data.json";

import "./index.css";

const Home = () => {
  const [activeTap, setActiveTap] = useState("Courses");
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [selectStutyLevel, SetSelectStudyLevel] = useState([]);
  const [selectDestination, SetSelectDestination] = useState([]);

  const navigate = useNavigate();

  const initiateStates = () => {
    setSelectedCourse([]);
    SetSelectDestination([]);
    SetSelectStudyLevel([]);
  };

  const navigatePostLists = (e) => {
    e.preventDefault();
    console.log(selectDestination, selectStutyLevel, selectedCourse);

    const queryParams = new URLSearchParams();

    if (selectedCourse.length > 0) {
      queryParams.append("courses", selectedCourse.join(","));
    }
    if (selectStutyLevel.length > 0) {
      queryParams.append("studyLevel", selectStutyLevel.join(","));
    }
    if (selectDestination.length > 0) {
      queryParams.append("destination", selectDestination.join(","));
    }

    navigate(`/postLists?${queryParams.toString()}`);
    window.scrollTo(0, 0);
  };

  // const navigateScholarships = (e) => {
  //   e.preventDefault();

  //   const queryParams = new URLSearchParams();

  //   if (selectStutyLevel.length > 0) {
  //     queryParams.append("studyLevel", selectStutyLevel.join(","));
  //   }
  //   if (selectDestination.length > 0) {
  //     queryParams.append("destination", selectDestination.join(","));
  //   }

  //   navigate(`/scholarships?${queryParams.toString()}`);
  // };

  // const navigateUniversities = (e) => {
  //   e.preventDefault();

  //   const queryParams = new URLSearchParams();

  //   if (selectDestination.length > 0) {
  //     queryParams.append("destination", selectDestination.join(","));
  //   }

  //   navigate(`/universities?${queryParams.toString()}`);
  // };

  const renderCoursesInputField = () => {
    return (
      <form
        className="flex-container cart position search-form-container"
        onSubmit={navigatePostLists}
        style={{
          "--pad": "10px 20px 60px 20px",
          "--pos": "relative",
          "--gap": "20px",
        }}
      >
        <MultiSelect
          options={inputData.courses}
          placeHolder="Enter course subject e.g. Law"
          selected={selectedCourse}
          setSelected={setSelectedCourse}
        />
        <MultiSelect
          options={inputData.studyLevel}
          placeHolder="Select study level"
          selected={selectStutyLevel}
          setSelected={SetSelectStudyLevel}
        />
        <MultiSelect
          options={inputData.destination}
          placeHolder="Select a study destination"
          selected={selectDestination}
          setSelected={SetSelectDestination}
        />
        <button
          type="submit"
          className="position"
          style={{ "--pos": "absolute", "--inset": " auto 20px 20px auto" }}
        >
          Search
        </button>
      </form>
    );
  };

  const renderScholarshipsField = () => {
    return (
      <>
        <form
          className="flex-container cart position search-form-container"
          onSubmit={navigatePostLists}
          style={{
            "--height": "100%",
            "--width": "100%",
            "--pad": "10px 20px 60px 20px",
            "--pos": "relative",
            "--gap": "20px",
          }}
        >
          <MultiSelect
            options={inputData.studyLevel}
            placeHolder="Select study level"
            selected={selectStutyLevel}
            setSelected={SetSelectStudyLevel}
          />
          <MultiSelect
            options={inputData.destination}
            placeHolder="Select a study destination"
            selected={selectDestination}
            setSelected={SetSelectDestination}
          />
          <button
            type="submit"
            className="position"
            style={{ "--pos": "absolute", "--inset": " auto 20px 20px auto" }}
          >
            Search
          </button>
        </form>
      </>
    );
  };

  const renderUniversitiesField = () => {
    return (
      <form
        className="flex-container cart position search-form-container"
        onSubmit={navigatePostLists}
        style={{
          "--height": "100%",
          "--width": "100%",
          "--pad": "10px 20px 60px 20px",
          "--pos": "relative",
          "--gap": "20px",
        }}
      >
        <MultiSelect
          options={inputData.destination}
          placeHolder="Select a study destination"
          selected={selectDestination}
          setSelected={SetSelectDestination}
        />
        <button
          type="submit"
          className="position"
          style={{ "--pos": "absolute", "--inset": " auto 20px 20px auto" }}
        >
          Search
        </button>
      </form>
    );
  };

  const formContent = {
    Courses: renderCoursesInputField(),
    Scholarships: renderScholarshipsField(),
    Universities: renderUniversitiesField(),
  };

  return (
    <>
      <div className="home-bg">
        <Header />
        <div className="hero-bg">
          <img
            src={`${import.meta.env.BASE_URL}ria-home.png`}
            alt=""
            className="home-bg-img"
          />
          <div className="container">
            <Swiper
            className="hero-swiper"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
          >
            {contentData.hero.map((each, index) => (
              <SwiperSlide key={index}>
                <h1>{each.head}</h1>
                <p>{each.para}</p>
                <button>
                  Avail FREE counselling
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </div>
        <div style={{ backgroundColor: "#f2f2f2" }}>
          <div className="container">
            <div className="search-container">
              <div
                className="flex-container cart head-container"
                style={{
                  "--gap": "20px",
                  "--bg-c": "#f2f2f2",
                  "--b-r": "20px 20px 0px 0px",
                }}
              >
                {inputData.formHeading.map((head, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      setActiveTap(head);
                      initiateStates();
                    }}
                    className={head === activeTap ? "active-tap" : ""}
                    style={{ cursor: "pointer", transition: "0.3s" }}
                  >
                    {head}
                  </p>
                ))}
              </div>
              <div className="flex-container">{formContent[activeTap]}</div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <div className="section service-bg">
        <div className="container">
          <h2 className="section-head">Services</h2>
          <div className="flex-container wrap " style={{ "--gap": "20px" }}>
            {contentData.service.map((each, index) => (
              <div key={index} className="three-cart-layout cart">
                <i className={`${each.icon}`}></i>
                <h4>{each.head}</h4>
                <p>{each.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section know-destination">
        <h2 className="section-head">Know your destination</h2>
        <div
          className="container flex-container wrap"
          style={{ "--gap": "20px" }}
        >
          {contentData.knowDestination.map((each, index) => (
            <div key={index} className="three-cart-layout">
              <img src={`${import.meta.env.BASE_URL}${each.img}`} alt="" />
              <h4 className="destination">{each.destination}</h4>
              <div className="content-cart cart">
                <h4>{each.head}</h4>
                <p>{each.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
