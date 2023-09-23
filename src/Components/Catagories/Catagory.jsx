
const Catagory = ({catagory}) => {
          const {logo,category_name,availability} = catagory;
console.log(catagory);
          return (
          <div className="bg-gradient-to-r from-violet-100 via-white to-violet-100 border-2 rounded-md flex flex-col items-center justify-center text-center p-4 bg-gradient-to-r from-[rgba(126, 144, 254, 0.05)] to-[rgba(152, 115, 255, 0.05)]">
          <img src={logo} className="mb-2" alt="Logo" />
          <h1 className="text-xl font-bold">{category_name}</h1>
          <h1>{availability}</h1>
          </div>
          
          );
};

export default Catagory;