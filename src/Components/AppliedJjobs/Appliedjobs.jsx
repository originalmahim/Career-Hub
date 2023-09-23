import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

const Appliedjobs = () => {
          const [appliedjob, setAppliedjob] = useState([]);
          const jobs = useLoaderData();
          
          useEffect(() => {
            const storedJobs = getStoredJobApplication();
            if (jobs.length > 0) {
             const jobsApplied = jobs.filter(job => storedJobs.includes(job.id))
             console.log( jobs, storedJobs,jobsApplied);
             setAppliedjob(jobsApplied)
            }
          },[])
          

          return (
          <div>
           <h1>Applied Jobs: {appliedjob.length}</h1>         
          </div>
          );
};

export default Appliedjobs;