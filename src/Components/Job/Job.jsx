import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";

const Job = ({job}) => {
   const {logo, job_title, company_name, remote_or_onsite, job_type, location, salary, } = job
    console.log(job);
    return (
        <div className="border py-10 px-16 rounded-xl mt-10">
            <img src={logo} alt="" />
            <h1 className="text-2xl font-bold mt-4">{job_title}</h1>
            <p className="font-semibold mt-2 mb-2">{company_name}</p>
            <div className="flex gap-6">
                <button className=" px-6 py-2 border-2 rounded-lg border-purple-500 ">{remote_or_onsite}</button>
                <button className="px-6  py-2 border-2 rounded-lg border-purple-500">{job_type}</button>
            </div>
            <div className="flex gap-10 mt-4 mb-6">
            <p className="text-lg flex items-center text-[#757575] gap-2"> <CiLocationOn />{location}</p>
            <p className="text-lg flex items-center gap-2 text-[#757575]"><AiOutlineDollarCircle /> Salary:  {salary}</p>
            </div>
            <button className=" btn btn-gr text-white font-bold">View Details</button>
        </div>
    );
};

export default Job;