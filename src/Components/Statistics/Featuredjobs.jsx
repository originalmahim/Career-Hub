
import { CiLocationArrow1 } from 'react-icons/ci';
import { AiOutlineDollarCircle } from 'react-icons/ai';
const Featuredjobs = ({job}) => {
          const {logo,job_title,company_name,remote_or_onsite,job_type,location,salary} = job;
          return (
          <div className="border-2 border-solid p-4 rounded-lg">
            <img className="w-28" src={logo}/>
            <h2 className="text-xl">{job_title}</h2> 
            <h2 className="text-xl">{company_name}</h2>
            <div className="flex gap-2 my-2">
          <button className="border-2 p-2 border-violet-400 border-solid rounded-lg ">{remote_or_onsite}</button>
          <button className="border-2 p-3 border-solid border-violet-400 rounded-lg ">{job_type}</button>
          </div>  
          <div className="flex gap-6 mb-2">
          <h1 className='flex items-center gap-1'><CiLocationArrow1></CiLocationArrow1> {location}</h1>
          <h1 className='flex items-center gap-1'><AiOutlineDollarCircle></AiOutlineDollarCircle> {salary}</h1>
          </div> 
          <button className="btn bg-violet-400 text-white">View Details</button>    
          </div>
          );
};

export default Featuredjobs;