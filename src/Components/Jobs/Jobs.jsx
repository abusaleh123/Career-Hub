import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('./jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div className="text-center mt-32">
            <h1 className="text-5xl font-bold mb-4">Featured Jobs</h1> 
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid md:grid-cols-2 mx-auto w-9/12 gap-10 ">
                {
                    jobs.map(job => <Job key={job.id} job = {job}> </Job>)
                }
            </div>
        </div>
    );
};

export default Jobs;