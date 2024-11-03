import { Link, useLoaderData, useParams } from "react-router-dom";
import Head2 from "./Head2";

import phone from '../../assets/assets/icons/phone.png'
import money from '../../assets/assets/icons/money.png'
import location from '../../assets/assets/icons/location2.png'
import account from '../../assets/assets/icons/accounts.png'
import calender from '../../assets/assets/icons/calendar.png'
import email from '../../assets/assets/icons/email.png'
import { addToStoredReadList } from "../utility/AddToSTRG";


const JobDetails = () => {
  const {id} = useParams();
  const idStr  = parseInt(id)
  const data = useLoaderData();
  const job = data.find(job => job.id === idStr);
  const {id : idb, logo,experiences,job_responsibility,educational_requirements, job_description , salary} = job;
  const handleApplyJob = (id) => {
      addToStoredReadList(id)
  }
    return (
        <div className="">
            <div>      
               <Head2></Head2>
            </div>
            <div className="flex  w-10/12 mx-auto">
            <div className="w-8/12/12 border">
            <p className="mb-4"> <span className="text-lg font-bold">Job Description:</span> {job_description}</p>
            <p className="mb-4"> <span className="text-lg font-bold">Job Responsibility:</span> {job_responsibility}</p>
           <p className="mb-6">  <span className="text-lg font-bold mb-10"> Educational Requirements: </span> </p>
             <p>{educational_requirements}</p>
             <p className="text-lg mb-6">Experience: </p>
             <p>{experiences}</p>
            </div>
            <div className="w-8/12 flex flex-col h-80 ">
            
             <div className="bg-purple-100  border ">
             <h1>Job Details</h1>
                <p className="border-t-2"></p>
                <div className="flex  mb-4" mb-4><img src={money} alt="" /> <p><span className="font-bold">Salary: </span> {salary} (Per Month)</p></div>
                <div className="flex mb-4"><img src={phone} alt="" /> <p><span className="font-bold">Salary: </span> {salary} (Per Month)</p></div>
                <div className="flex mb-4"><img src={location} alt="" /> <p><span className="font-bold">Salary: </span> {salary} (Per Month)</p></div>
                <div className="flex mb-4"><img src={account} alt="" /> <p><span className="font-bold">Salary: </span> {salary} (Per Month)</p></div>
                <div className="flex mb-4"><img src={calender} alt="" /> <p><span className="font-bold">Salary: </span> {salary} (Per Month)</p></div>
                <div className="flex mb-4"><img src={email} alt="" /> <p><span className="font-bold">Salary: </span> {salary} (Per Month)</p></div>
             </div>
                <div className="">
               <Link ><button onClick={() => handleApplyJob(id)} className="mt-6 btn btn-gr w-full" >Apply Now</button></Link>
                </div>
              
            </div>
            
            </div>
        </div>
    );
};
export default JobDetails;