import { useLoaderData, useParams } from "react-router-dom";
import { FaDollarSign,FaLocationArrow,FaPhoneAlt,FaMailBulk } from 'react-icons/fa';
import { PiBagSimpleBold } from 'react-icons/pi';
import { saveJobApplication } from   '../../utility/localstorage'
const Jobdetails = () => {
          const jobs = useLoaderData();
          const {id} = useParams();
          const idInt = parseInt(id)
          const job = jobs.find(job => job.id == idInt);
          
          const handleApplyJob = () =>{
            saveJobApplication(idInt);
        }

          return (
            <div className="md:mt-8">
          <div className="grid grid-cols-4 gap-4 lg:my-32 max-w-7xl mx-auto md:px-6">
            <div className="border col-span-3 rounded-md px-4">
          <h1 className="my-3 lg:text-xl "><span className="font-bold">Job Description:</span> {job.job_description}</h1>
          <h1 className="my-3 text-xl "><span className="font-bold" >Job Responsibility:</span> {job.job_responsibility} </h1>
          <h1 className="my-2 text-xl "> <span className="font-bold">Educational Requirements:</span> <br />
          {job.educational_requirements}
           </h1>
          <h1 className="my-2 text-xl "><span className="font-bold">Experiences:</span> <br />
          {job.experiences}
           </h1>
          </div>
          <div className="border rounded-md px-2">
          <h1 className="my-2 font-bold">Job Details</h1>
          <hr />
          <h1 className="my-2 lg:flex lg:items-center gap-2"> <FaDollarSign></FaDollarSign> <span className="font-semibold">Salary:</span> <br /> {job.salary}</h1>
          <h1 className="my-2 lg:flex lg:items-center gap-1"> <PiBagSimpleBold></PiBagSimpleBold> <span className="font-semibold">Job Title:</span> <br /> {job.job_title}</h1>
          <h1 className="mt-4 mb-2 font-bold">Contact Info</h1>
          <hr />
          <h1 className="my-2 lg:flex items-center gap-2"><FaPhoneAlt></FaPhoneAlt> <span className="font-semibold">Phone:</span> {job.contact_information.phone}</h1>
          <h1 className="my-2 lg:flex items-center gap-2"><FaMailBulk></FaMailBulk> <span className="font-semibold">Email:</span> {job.contact_information.email}</h1>
          <h1 className=" lg:flex items-center gap-2"> <FaLocationArrow></FaLocationArrow> <span className="font-semibold">Address:</span> <br /> {job.contact_information.address}</h1>
          
          <button onClick={handleApplyJob} className="btn btn-primary w-full my-4">Apply Now</button>
          </div>        
          </div>
          </div>
          );
};

export default Jobdetails;