const Category = ({category}) => {
    const {logo, category_name, availability } = category;
    console.log(category);
    return (
        <div>
            <div className="  bg-purple-50 py-10  px-10 rounded-xl mt-10 ">
                <img className="mb-6" src={logo} alt="" />
                <h1  className="text-2xl mb-4 font-bold">{category_name}</h1>
                <p className="">{availability}</p>
            </div>
        </div>
    );
};

export default Category;