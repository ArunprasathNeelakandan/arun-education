import Header from "../header";

import Footer from "../footer";


const data = [
   {
    "head":"",
    "content":["Riaoverseas.com is the sole proprietor of the information collected on this site. The Privacy of our customers & website visitors is our highest priority. We understand the importance of the information that you share with us, in view of the strong bonding with you.","We are committed not to sell, disclose or rent the individually identifiable user information collected at our web site under any circumstances. The information given by the user online and individually will remain private and confidential and will only be used for purposes like assessing your eligibility, preparing to submit your application, publishing information about you on the website (Like Testimonials) or to deliver you the services that you purchase from this site."]
   },
   {
    "head":"Personal information collection",
    "content":[
        "However, from time to time, we may collect and/or disclose, transfer or share aggregated demographic or usage information obtained by us. The general information collected by us includes your name, address, phone number, e-mail, and other information gathered through the application process.","In addition to that, the visitors to our site may be asked for information such as profile verification for a student visa, visa application, subscribe to receive regular updates and to carry out transactions.","In case of any emergency situation, if the disclosures reasonably necessary for the purposes identified elsewhere above, we may disclose your personal information to the extent that it is required to do so by law."
    ]
   },
   {
    "head":"Security",
    "content":["Riaoverseas.com takes reasonable technical and organizational precautions to prevent the loss, misuse or alteration of your personal information. All the personal information is stored on our secure servers. The information entered electronically into this website will be protected by encryption technology."]
   },
   {
    "head":"Privacy Policy Update",
    "content":["We reserve the right to amend our privacy policy from time to time without any prior notice. The user has to keep on checking time to time to ensure that they are familiar with any changes."]
   },
   {
    "head":"Link to other websites",
    "content":[
        "This website has links to other websites. We are not responsible for the privacy policies or practices of any third party."
    ]
   }




]

const Privacy = () => {

    return(
        <>
        <Header/>

        <div className="main-content">
           <div className="section container">
                <h2 className="section-head">Privacy Policy</h2>
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

        <Footer/>
        </>
    )

} 



export default Privacy