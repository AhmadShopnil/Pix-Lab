import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, title, img, details, price, rating } = service
    // const Description = details.slice(0, 100);
    const shortDetails = details.slice(0, 100);



    return (
        <div className="card px-2 sm:mx-40  md:mx-4 lg:mx-4  bg-base-100 shadow-xl m-5">
            <figure><img className='object-cover h-72 w-full ' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}

                </h2>

                {
                    details.length > 100 ?
                        <p>{shortDetails}...</p>
                        :
                        <p>{details}</p>
                }

                {/* <p>{details}</p> */}



                <div className="my-2 card-actions justify-end">
                    <div className="badge badge-outline">${price}</div>
                    <div className="badge badge-outline"><span>Rating: {rating}</span></div>

                </div>
                <Link className="btn btn-accent" to={`/serviceDetails/${_id}`}>View Details</Link>
            </div>
        </div>
    );

};

export default ServiceCard;