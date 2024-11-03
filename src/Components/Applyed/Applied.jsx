import { useLoaderData } from "react-router-dom";
import Head from "./head";
import { useEffect, useState } from "react";
import { getStoredReadList } from "../utility/AddToSTRG";
import Job from "../Job/Job";


const Applied = () => {
    const [applied, setApplied] = useState([]);
    const allJobs = useLoaderData();
    useEffect(() => {
        const storedJobs = getStoredReadList();
        const storedJobsInt = storedJobs.map(id => parseInt(id))
        const appliedJobs = allJobs.filter(job =>storedJobsInt.includes(job.id))
        // console.log(storedJobs, allJobs, storedJobsInt, appliedJobs);
        setApplied(appliedJobs)

    },[])
    return (
        <div>
            <Head></Head>
            <h2>Hello World {applied.length}</h2>
            {
                applied.map(job => <Job key={job.id} job = {job}></Job>)
            }
        </div>
    );
};

export default Applied;