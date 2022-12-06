import React from 'react';
import { Link } from 'react-router-dom';


const MyReviewsCard = ({ myReview, deleteReview }) => {
    const { text, title, _id, } = myReview
    // console.log(myreview)

    const handleDelete = () => {
        deleteReview(_id)
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleDelete} className="btn ">Delete</button>
                    <Link className='btn' to={`/editmyreviews/${_id}`}>Edit</Link>
                </div>
            </div>

        </div>
    );
};

export default MyReviewsCard;