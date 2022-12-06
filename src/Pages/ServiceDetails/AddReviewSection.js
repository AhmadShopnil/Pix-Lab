import React, { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider/Authprovider';

const AddReviewSection = ({ handleReview }) => {


    const { user } = useContext(AuthContext)

    // const { displayName, email } = user

    // console.log(displayName)


    return (
        <div className='my-6'>
            <form onSubmit={handleReview} >

                <textarea name='text' className="textarea textarea-bordered h-24 w-full mt-4" placeholder="Give Review" required></textarea>

                <input className='btn' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReviewSection;