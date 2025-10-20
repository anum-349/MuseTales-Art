import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Art({ data, height="h-64" }) {
    return (
        <>
            <div className="grid md:grid-cols-5 grid-cols-2 gap-10 gap-y-16 ml-20 mr-20 mt-10 mb-10">
                {
                    data.map((item) => (
                        <div key={item._id} className="relative">
                            <LazyLoadImage src={item.image} alt={item.name} className="w-full ${height}" />
                            <div className={height}>
                                <h3 className="text-xl font-semibold mt-5">{item.name}</h3>
                                <h3 className="text-xl font-normal mt-3 mb-2">{item.detail}</h3>
                                <p>{item.description}</p>
                                {
                                    item.link ?
                                        <Link to={item.link} className="underline hover:text-orange_web left-0 absolute">{item.linkName}</Link>
                                        : null
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}