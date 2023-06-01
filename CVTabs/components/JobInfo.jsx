import React from 'react'
import { FiChevronsRight } from "react-icons/fi";
function JobInfo({jobs, current}) {
    const{title, date, company, duties}=jobs[current]
  return (
    <div>
        <h1>{title}</h1>
        <p className='job-company'>{company}</p>
        <p className='job-date'>{date}</p>
        {
            duties.map((item)=>{
                return(
                    <li className='job-desc'>
                        <FiChevronsRight className='job-icon'/>
                        <p>{item}</p>
                    </li>
                );
            })
        }
    </div>
  )
}

export default JobInfo