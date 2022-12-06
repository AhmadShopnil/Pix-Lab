import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider/Authprovider';
import AddReviewSection from './AddReviewSection';
import ReviewCard from './ReviewCard';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ServiceDetails = () => {
    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext);

    // console.log(reviews)

    const userEmail = user?.email
    const userName = user?.displayName
    const userPhoto = user?.photoURL

    // const { displayName, email } = user

    const data = useLoaderData()
    const serviceDetails = data.data
    const { _id, title, price, rating, img, details } = serviceDetails

    useEffect(() => {
        fetch(`https://pix-lab-server.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data.data)
            })
    }, [reviews])




    const handleReview = (event) => {
        event.preventDefault()
        const form = event.target
        const text = event.target.text.value;

        const review = {
            text,
            serviceId: _id,
            title,
            userEmail,
            userName,
            userPhoto

        }

        fetch("https://pix-lab-server.vercel.app/reviews", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {

                    toast.success('Review Add Success')
                    // alert('Review Add Successfully')
                    form.reset()
                }
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="grid  card  rounded-box place-items-center">

                    <div className="hero ">
                        <div className="hero-content flex-col lg:flex-row">

                            <PhotoProvider speed={() => 800}
                                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
                                <PhotoView src={img}>
                                    <figure>
                                        <img className='object-cover h-72 w-full ' src={img} style={{ objectFit: 'cover' }} alt="" />
                                    </figure>
                                </PhotoView>
                            </PhotoProvider>
                            <div>
                                <h1 className="text-5xl font-bold">{title}</h1>
                                <p className="py-6">{details}</p>
                                <p>Price:${price}</p>
                                <p>Rating:${rating}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="divider">Reviews</div>
                {
                    reviews.length > 0 ?
                        <div className=" m-10 grid flex-grow  lg:grid-cols-2 gap-4  rounded-box place-items-center">
                            {
                                reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                            }
                        </div>
                        :
                        <div>
                            <h2 className='text-center text-4xl'>No Reviews</h2>
                        </div>
                }

                {
                    user?.uid ?
                        <div className='flex justify-center '>
                            <AddReviewSection handleReview={handleReview}></AddReviewSection>
                        </div>
                        :
                        <>
                            <h2 className='text-center text-2xl mb-4'>Please <Link className='text-blue-500 font-bold' to='/login'>Login</Link> To give Review</h2>
                        </>
                }
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default ServiceDetails;