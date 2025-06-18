import { useState } from 'react'
import { sendCourseName } from '../services/adminApi'

import Loading from '../Loading'

import './index.css'




const Admin = () => {

    const[newCourseName, setAddCourseName] = useState('')
    const [showLoading,setShowLoading] = useState(false)

    const handleAddCourseName = async() => {
        setShowLoading(true)
        const res = await sendCourseName(newCourseName)
        if (res.result === 'success') {
           setShowLoading(false) 
           alert(res.data)
        }else {
            setShowLoading(false) 
           alert(res.msg)
        }
        setAddCourseName('')

    }


    return(
        <>
        {showLoading && <Loading/>}
          <div className="admin-bg">

            <div className="section">
                <div className="container">
                    <h2 className="section-head">Add Course, Study Level, Destination</h2>
                    <div className="flex-container admin-add-input-wrapper" style={{"--gap":"20px"}}>
                        <div className="three-cart-layout">
                            <h4>Add Course</h4>
                            <input type="text" placeholder='Type Course Name' className='multi-select-input' onChange={(e)=>{setAddCourseName(e.target.value)}} value={newCourseName}/>
                            <button onClick={handleAddCourseName}>Add</button>
                        </div>
                        <div className="three-cart-layout">
                            <h4>Add Study Level</h4>
                            
                            <input type="text" placeholder='Type Course Name' className='multi-select-input'/>
                            <button>Add</button>
                        </div>
                        <div className="three-cart-layout">
                            <h4>Add Destination</h4>
                            <input type="text" placeholder='Type Course Name' className='multi-select-input'/>
                            <button>Add</button>
                        </div>
                        <div className="three-cart-layout">
                            <h4>Add University</h4>
                            <input type="text" placeholder='Type Course Name' className='multi-select-input'/>
                            <button>Add</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section main-content">
                <div className="container">
                    <h2 className='section-head'>Add Course Posts</h2>

                    <div className="flex-container add-course-list-wrapper" style={{"--gap":"20px"}}>
                        <div className='four-cart-layout'>
                            <label htmlFor="post-list-title">Title</label>
                            <input type='text' id='post-list-title' required className='multi-select-input' placeholder='Title'/>
                        </div>
                        <div className='four-cart-layout'>
                            <label htmlFor="post-list-university">University</label>
                            <input type='text' id='post-list-university' required className='multi-select-input' placeholder='Title'/>
                        </div>
                        <div className='four-cart-layout'>
                            <label htmlFor="post-list-location">Location</label>
                            <input type='text' id='post-list-location' required className='multi-select-input' placeholder='Title'/>
                        </div>
                        <div className='four-cart-layout'>
                            <label htmlFor="post-list-Qualification">Qualification</label>
                            <input type='text' id='post-list-Qualification' required className='multi-select-input' placeholder='Title'/>
                        </div>
                        <div className='four-cart-layout'>
                            <label htmlFor="post-list-fees">Fees</label>
                            <input type='text' id='post-list-fees' required className='multi-select-input' placeholder='Title'/>
                        </div>
                        <div className='four-cart-layout'>
                            <label htmlFor="post-list-duration">Duration</label>
                            <input type='text' id='post-list-duration' required className='multi-select-input' placeholder='Title'/>
                        </div>
                        <div className='four-cart-layout'>
                            <label htmlFor="post-list-next-intack">Next intake</label>
                            <input type='text' id='post-list-next-intack' required className='multi-select-input' placeholder='Title'/>
                        </div>
                        <div className='four-cart-layout'>
                            <label htmlFor="post-list-entry-score">Entry Score</label>
                            <input type='text' id='post-list-entry-score' required className='multi-select-input' placeholder='Title'/>
                        </div>
                        
                    </div>
                </div>
                
            </div>
          </div>  
        </>
    )
}


export default Admin