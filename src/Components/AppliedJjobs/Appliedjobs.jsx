import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import Appliedjoblist from "./Appliedjoblist";

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
           <h1 className="text-xl font-bold">Applied Jobs: {appliedjob.length}</h1>
           <div>
            {
              appliedjob.map(job => <Appliedjoblist key={job.id} job = {job}></Appliedjoblist>)
            }
            </div>         
          </div>
          );
};

export default Appliedjobs;