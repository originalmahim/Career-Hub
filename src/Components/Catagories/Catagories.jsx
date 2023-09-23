import { useEffect, useState } from "react";
import Catagory from "./Catagory";


const Catagories = () => {

          const [catagories,SetCatagories] = useState([]);
          useEffect(() => {
          fetch('catagories.json')
          .then(res => res.json())
          .then(data => SetCatagories(data))
          },[])

          return (
          <div className="max-w-7xl mx-auto">
          <div className="my-6 ">
          <h1 className="text-center text-4xl font-medium mb-2">Job Category List</h1>
          <p className="text-center text-xl">Explore thousands of job opportunities with all the information you need. Its your future</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
             {
                catagories.map(catagory => <Catagory key={catagory.id} catagory = {catagory}></Catagory>)
             }       
          </div>
          </div>

          );
};

export default Catagories;