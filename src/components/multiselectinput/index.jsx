import { useState, useEffect } from "react";
import "./index.css";





// const MultiSelect = (props) => {
//   const [showDropdown,setShowDropdown] = useState(false)
  
//   const {options,placeHolder,selected,setSelected} = props

//   const findinput = () => {
//     const c = selected.map((opt)=>opt).join(', ')  
//     return c
//   }

//   const toggleSelected = (w) => {
//     if (selected.includes(w)) {
//       setSelected((perv)=>perv.filter((i) => i != w))
//     } else {
//       setSelected((perv)=> [...perv, w])
//     }
//   }

//   useEffect(()=>{
//     findinput()
//   },[])
  

//   return(
//     <div className="multi-select-input-container" >
//     <input type="text" value={findinput()} required placeholder={placeHolder} className="multi-select-input" onClick={()=>{setShowDropdown((perv) => !perv)}} />

//     <div className="multi-select-option-container" >
//         {
//           showDropdown && options.map((opt)=>(
//             <div>
//               <input type="checkbox" id={opt} checked={selected.includes(opt)} onChange={()=>{toggleSelected(opt)}} />
//               <label htmlFor={opt}>{opt}</label>
//             </div>
//           ))
//         }
//     </div>
//     </div>
//   )
// }

const MultiSelect = (props) => {
  
  const {options,placeHolder,selected,setSelected} = props

  const findinput = () => {
    const c = selected.map((opt)=>opt).join(', ')  
    return c
  }

  const toggleSelected = (w) => {
    if (selected.includes(w)) {
      setSelected((perv)=>perv.filter((i) => i != w))
    } else {
      setSelected((perv)=> [...perv, w])
    }
  }

  useEffect(()=>{
    findinput()
  },[])
  

  return(
    <div className="multi-select-input-container" >
    <input type="text" value={findinput()} required placeholder={placeHolder} className="multi-select-input"/>

    <div className="multi-select-option-container" >
        {
          options.map((opt)=>(
            <div>
              <input type="checkbox" id={opt} checked={selected.includes(opt)} onChange={()=>{toggleSelected(opt)}} />
              <label htmlFor={opt}>{opt}</label>
            </div>
          ))
        }
    </div>
    </div>
  )
}

export default MultiSelect;
