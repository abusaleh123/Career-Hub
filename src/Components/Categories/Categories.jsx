import { useEffect, useState } from "react";
import Category from "../Category/Category";


const Categories = () => {
    const [categories, setCategory] = useState([]);
    useEffect(() => {
        fetch('./categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div>
            <h2 className="text-5xl font-bold text-center mt-16">Job Category List </h2>
            <p className="text-center mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
 
           <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto  ">
           {
                categories.map(category => <Category key={category.id} category={category} ></Category>)
            }
           </div>
        </div>
    );
};

export default Categories;