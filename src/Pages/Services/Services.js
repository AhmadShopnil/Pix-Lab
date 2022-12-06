import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../../Shared/ServiceCard';

const Services = () => {
    const [allServices, setAllservices] = useState([])

    const [loader, seTLoader] = useState(true)
    useTitle('Services')

    // const data = useLoaderData()
    // const allServices = data.data

    useEffect(() => {
        fetch('https://pix-lab-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                if (data.data) {
                    setAllservices(data.data)
                    seTLoader(false)
                }
            })



    }, [])

    return (
        <div>
            {
                loader ?
                    <div className='min-h-screen text-center'><progress className="progress w-56"></progress></div>
                    :
                    <>
                        <div className="grid flex-grow md:grid-cols-2  lg:grid-cols-3 gap-2  rounded-box place-items-center">

                            {
                                allServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                            }

                        </div>

                    </>
            }



        </div>
    );
};

export default Services;