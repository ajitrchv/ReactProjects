const url = 'https://course-api.com/react-tabs-project';
import React from 'react';
import { useState, useEffect } from 'react';
import BtnContainer from './components/BtnContainer';
import JobInfo from './components/JobInfo';

function App() {

  const[jobs, setJobs]=useState([])
  const [loading, setLoading]= useState(true)
  const [current, setCurrent]=useState(0)
  const fetchJobs=async()=>{
    setLoading(true)
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setJobs(data);
    setLoading(false)
  }
  useEffect(()=>{
    fetchJobs();
  },[])
  return (
    <section className='jobs-center'>
      
      <BtnContainer jobs={jobs} current={current} setCurrent={setCurrent}/>
      <JobInfo jobs={jobs} current={current}/>
    </section>
  )
}

export default App