import React from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddServices = () => {
    useTitle("Add Service")
    // const current = new Date();
    // const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    // console.log(date)

    const handleAddService = (event) => {
        event.preventDefault()

        const form = event.target;
        const title = form.title.value
        const img = form.img.value
        const details = form.details.value
        const price = form.price.value
        const rating = form.rating.value

        const time = new Date().toISOString()

        const services = {
            title, img, details, price, rating, time
        }

        fetch('https://pix-lab-server.vercel.app/services', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    toast.success('Service add success')
                    form.reset()
                }
            })

    }

    return (
        <div className='hero min-h'>


            <form onSubmit={handleAddService} >

                <h2 className='text-4xl my-4'>Add A New Service </h2>
                <div className='grid col-span-1 gap-2'>
                    <input name='title' type="text" placeholder="Enter Service Title" className="input input-bordered input-accent w-full max-w-xs" required />
                    <input name='details' type="text" placeholder="Enter Service Details" className="input input-bordered input-accent w-full max-w-xs" required />
                    <input name='price' type="text" placeholder="Enter Service Price" className="input input-bordered input-accent w-full max-w-xs" required />
                    <input name='rating' type="text" placeholder="Enter Service Rating" className="input input-bordered input-accent w-full max-w-xs" required />
                    <input name='img' type="text" placeholder="Enter Service Image" className="input input-bordered input-accent w-full max-w-xs" required />
                </div>
                <input className="btn btn-primary w-full my-2 text-center" type="submit" value="Add " />
            </form>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default AddServices;