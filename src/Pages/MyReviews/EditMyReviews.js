import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';



const EditMyReviews = () => {
    const navigate = useNavigate()
    const router = useParams()
    const { id } = router


    const editReview = (event) => {
        event.preventDefault()
        const form = event.target
        const text = form.text.value;
        const review = {
            text
        }

        fetch(`https://pix-lab-server.vercel.app/reviews/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    navigate('/myreviews')
                }
            })
            .catch(error => {

            })
    }

    return (
        <div>
            <h2>Edit Review</h2>
            <div className='my-6'>
                <form onSubmit={editReview} >
                    <textarea name='text' className="textarea textarea-bordered h-24 w-full mt-4" placeholder="Edit Review"></textarea>

                    <input className='btn' type="submit" value="Edit Review" />
                </form>
            </div>
        </div >
    );
};

export default EditMyReviews;