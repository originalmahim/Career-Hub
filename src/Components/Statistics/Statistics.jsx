import { useEffect } from "react";
import { useState } from "react";
import Featuredjobs from "./Featuredjobs";
import Catagories from "../Catagories/Catagories";
import Banner from "../Banner/Banner";

const Statistics = () => {
          const [jobs,setJobs] = useState([]);
          const [dataload , setDataload] = useState(4)
          const handleSeeALL = () => {
                setDataload(jobs.length)    
          }
          useEffect(() => {
          fetch('jobs.json')
         .then(res => res.json())
         .then(jobs => setJobs(jobs))
          },[])
          return (
          <div className="mb-8">
            <Banner></Banner>
            <Catagories></Catagories>
          <div className="max-w-7xl mx-auto">
          <div className="my-6">
          <h1 className="text-center text-4xl font-medium mb-2">Featured Jobs</h1>
          <p className="text-center text-xl">Explore thousands of job opportunities with all the information you need. Its your future</p>
          </div>
          
           <div className="grid grid-cols-2 lg:gap-8 gap-4 md:px-4">
          {
           jobs.slice(0,dataload).map(job => <Featuredjobs key={job.id} job = {job} ></Featuredjobs>)
          }
          </div>
          <div className={ `text-center mt-4 mb-8 ${dataload === jobs.length && 'hidden'}` }>
          <button onClick={handleSeeALL} className="btn  bg-violet-400 text-white">See All Jobs</button> 
          </div>
          </div>
                
          </div>
          );
};

export default Statistics;