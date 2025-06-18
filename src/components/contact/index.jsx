import { Link } from "react-router-dom";

import data from "../../../data/input-fields.json";

import "./index.css";

const Contact = () => {
  return (
    <>
      <div className="contact-bg">
        <div className="container section">
          <h2 className="section-head">Get FREE Counselling Today!</h2>
          <div className="flex-container" style={{ "--gap": "20px" }}>
            <div className="sub-cart-1">
              <p>
                Enter your details and our expert will reach out to you to
                discuss your plans. By the way, all our services are free!
              </p>

              <form action="">

                <div className="flex-container input-flex">
                  <div className="input-cart">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" name="first-name" id="first-name" required/>
                  </div>

                  <div className="input-cart">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" name="last-name" id="last-name" required/>
                  </div>
                </div>

                <div className="input-cart">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" name="email" id="email" required/>
                </div>

                <div className="input-cart ">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="number" name="phone" id="phone" required />
                </div>

                <div className="flex-container input-flex">
                  <div className="input-cart">
                    <label htmlFor="destination">
                      Your preferred study destination*
                    </label>
                    <select name="destination" id="destination" required>
                      <option value="" disabled selected hidden>
                        -- Select --
                      </option>
                      {data.destination.map((name, index) => (
                        <option value={name} key={index}>
                          {name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="input-cart">
                    <label htmlFor="when">When would you like to start?*</label>
                    <select name="when" id="when">
                      <option value="" disabled selected hidden>
                        -- Select --
                      </option>
                      {data.whenStart.map((time, index) => (
                        <option value={time} key={index}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex-container input-flex">
                  <div className="input-cart">
                    <label htmlFor="study-level">Preferred study level*</label>
                    <select name="study-level" id="study-level" required>
                      <option value="" disabled selected hidden>
                        -- Select --
                      </option>
                      {data.studyLevel.map((value, index) => (
                        <option value={value} key={index}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="input-cart">
                    <label htmlFor="fund">
                      How would you fund education?*
                    </label>
                    <select name="fund" id="fund" required>
                      <option value="" disabled selected hidden>
                        -- Select --
                      </option>
                      {data.fundForEducation.map((value, index) => (
                        <option value={value} key={index}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="terms-container">
                    <div>
                        <input type="checkbox" name="termsAndCondition" id="termsAndCondition" required />
                        <label htmlFor="termsAndCondition">I agree to Ria Education <a className="inline-link" href={`${import.meta.env.BASE_URL}terms`}>Terms</a> and  <a className="inline-link" href={`${import.meta.env.BASE_URL}privacy`}>privacy policy</a> </label>
                    </div>

                    <div>
                        <input type="checkbox" name="termsAndCondition" id="termsAndCondition" required />
                        <label htmlFor="termsAndCondition">Please contact me by phone, email or SMS to assist with my enquiry</label>
                    </div>

                    <div>
                        <input type="checkbox" name="termsAndCondition" id="termsAndCondition" required />
                        <label htmlFor="termsAndCondition">I would like to receive updates and offers from IDP</label>
                    </div>
                </div>
                      <button type="submit">Avail FREE Counselling</button>
              </form>
            </div>
            <div className="contact-side-img sub-cart-2">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
