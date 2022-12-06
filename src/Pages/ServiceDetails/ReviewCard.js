import React from 'react';

const ReviewCard = ({ review }) => {
    const { text, userEmail, userName, userPhoto } = review


    return (
        <div className="card w-full  bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Review</h2>
                <p>{text}</p>

                <div className="card-actions justify-end">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={userPhoto} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <p className='mt-2'> {userName}</p>
                </div>

            </div>
        </div>
    );
};

export default ReviewCard;