import Header from "../header";
import Contact from "../contact";
import Footer from "../footer";

import data from "./data.json"


const Terms = () => {

    return(
        <>
        <Header/>
        <div className="main-content">
            <div className="section container">
                <h2 className="section-head">
                    Website Terms of use
                </h2>
                {
                    data.map((each, index)=>(
                        <div key={index}>
                            <h4>
                                {each.head}
                            </h4>
                            {
                                each.content.map((c,i)=>(
                                    <>
                                    <p>{c}</p>
                                    </>
                                ))
                            }
                        </div>
                    ))    
                }
            </div>
        </div>
       <Contact/>
        <Footer/>
        </>
    )

}


export default Terms


