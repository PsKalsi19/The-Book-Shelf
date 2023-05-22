import { NavLink } from "react-router-dom";
const CategoryCard = ({ category }) => {
    const { imgUrl, categoryName, _id, description } = category
    return (
        <NavLink to={`/products/${categoryName}`} id={_id} title={description} className="w-full h-full pb-2 bg-gray-600 border shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] border-gray-400 transition-all duration-200 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60"
        >
            <div className="relative">
                <img src={imgUrl} className='w-full h-auto max-w-lg p-2'  alt={description} />
                <div className="absolute px-4 ml-4 text-sm leading-7 text-gray-100 bg-gray-600 bottom-3 backdrop-blur-md backdrop-filter bg-clip-padding bg-opacity-20 lg:gap-x-10 md:flex rounded-xl">
                    <span className="cursor-pointer" >
                        {categoryName}
                    </span>
                </div>
            </div>
                <p className="mx-4 text-sm text-gray-100 dm:text-xm">{description}</p>
        </NavLink>
    );
};

export default CategoryCard;


/*
   <dl className="grid grid-cols-1 gap-8 mt-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse">
                                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
*/