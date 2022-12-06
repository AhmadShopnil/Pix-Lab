import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/Authprovider/Authprovider';
import useTitle from '../../hooks/useTitle';
import MyReviewsCard from './MyReviewsCard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const MyReviews = () => {
    useTitle('MyReviews')
    const [myReviews, setMyReviews] = useState([])
    const [refresh, setRefresh] = useState(false)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://pix-lab-server.vercel.app/myReviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('pixLabToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setMyReviews(data.data)
                }
            })

    }, [refresh, myReviews])


    const deleteReview = (id) => {

        const DeleteConfirm = window.confirm('Are you sure want to delete ?')

        if (DeleteConfirm) {
            fetch(`https://pix-lab-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status) {
                        setRefresh(!false)
                        toast.success('Service Delete success')
                    }
                })
                .catch(error => console.error(error))
        }

    }


    return (

        <div>
            {
                myReviews.length > 0 ?
                    <>
                        <div>
                            <h2 className='text-center text-4xl'>Here are all reviews you give in defferent services</h2>
                        </div>
                        <div className="min-h-screen grid flex-grow  lg:grid-cols-3 gap-4  rounded-box place-items-center" >

                            {
                                myReviews.map(myReview => <MyReviewsCard key={myReview._id} myReview={myReview} deleteReview={deleteReview}></MyReviewsCard>)
                            }

                        </div>
                    </>
                    :
                    <>

                        <div className='min-h-screen'>
                            <h2 className='text-center text-4xl'>No Reviews</h2>
                        </div>
                    </>
            }


            <ToastContainer position="top-center" />
        </div>






    );
};

export default MyReviews;