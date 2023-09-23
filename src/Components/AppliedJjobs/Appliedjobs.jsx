import { useLoaderData } from "react-router-dom";

const Appliedjobs = () => {

          const jobs = useLoaderData;

          return (
          <div>
           <h1>Applied Jobs</h1>         
          </div>
          );
};

export default Appliedjobs;