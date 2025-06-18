import { useSearchParams } from "react-router-dom"

import Header from "../header"

import pagedata from "./data.json"


const Scholarships = () => {
    const [searchParams] = useSearchParams()

    const studyLevel = searchParams.get("studyLevel")?.split(',')||[] 
    const destination = searchParams.get("destination")?.split(',')||[]

    const filterThedata=(pagedata)=>{
        return pagedata.filter((data)=>studyLevel.includes(data.studyLevel) && destination.includes(data.destination))
    }

    const filterData = filterThedata(pagedata) 
    return (
        <div>
          <Header/>
          <div className="container">
          <h1 className='page-head'>Scolarships</h1>
  
          {filterData.length > 0 ? (<div className='page-wrapper'>
          {filterData.map((scolarship, index) => (
            <div key={index}>
              <h3>{scolarship.title}</h3>
              <hr />
              <p> <span><i class="fas fa-map-marker-alt"></i></span> {scolarship.destination}</p>
              <p> <span><i class="fas fa-graduation-cap"></i></span> {scolarship.studyLevel}</p>
              <p> <span><i class="	fa-solid fa-hand-holding-dollar"></i></span> {scolarship["Funding type"]}</p>
              <p> <span><i class="fa-solid fa-money-bill-wave"></i></span> {scolarship["Value of award"]}</p>
            </div>
          ))}
  
          </div>):(<h2 className='no-found-text'>No Results Found<br/>Try selecting multiple options</h2>)}
          
          
          </div>
          
        </div>
      );
    
}


export default Scholarships