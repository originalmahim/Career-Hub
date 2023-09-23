import { CiLocationArrow1 } from 'react-icons/ci';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Appliedjoblist = ({job}) => {
          const { id, logo,job_title,company_name,remote_or_onsite,job_type,location,salary} = job;
          return (
                    <div className="border-2 border-solid p-4 rounded-lg grid grid-cols-5 items-center justify-center px-4 my-4 ">
                    <div className='col-span-1 bg-[#F4F4F4] m-4 border-2 rounded-md w-10/12 lg:h-full h-[80%] flex items-center justify-center text-center'>
                    <img className="lg:w-28 w-20" src={logo} alt="Logo" />
                    </div>

                    <div className='col-span-3 md:pl-4'>
                    <h2 className="lg:text-xl font-bold">{job_title}</h2> 
                    <h2 className="lg:text-xl">{company_name}</h2>
                    <div className="flex gap-2 my-2">
                  <button className="border-2 p-2 border-violet-400 border-solid rounded-lg ">{remote_or_onsite}</button>
                  <button className="border-2 p-3 border-solid border-violet-400 rounded-lg ">{job_type}</button>
                  </div>  
                  <div className="flex gap-6 mb-2">
                  <h1 className='flex items-center gap-1'><CiLocationArrow1></CiLocationArrow1> {location}</h1>
                  <h1 className='flex items-center gap-1'><AiOutlineDollarCircle></AiOutlineDollarCircle> {salary}</h1>
                  </div>
                    </div>
                  <div className='col-span-1'>
                  <Link to = {`/job/${id}`}>
                  <button className="btn bg-violet-400 text-white">View Details</button>    
                    </Link> 
                  </div>
                  
                  
                  </div>
          );
};

export default Appliedjoblist;