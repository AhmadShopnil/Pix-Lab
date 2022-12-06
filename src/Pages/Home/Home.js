import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../../Shared/ServiceCard';
import HomeBanner from './HomeBanner';
import StepsToGetService from './StepsToGetService';


const Home = () => {
    const data = useLoaderData()
    const services = data.data
    useTitle("Home")


    return (
        <div className='w-screen'>
            <div>

                <HomeBanner></HomeBanner>

            </div>

            <div className=' my-5 w-full flex justify-items-center justify-center'>
                <div className="stats shadow me-auto p-16 flex flex-wrap">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">User Satisfaction Level</div>
                        <div className="stat-value text-primary">95%</div>
                        <div className="stat-desc">Increasing day by day</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Page Views</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Tasks done</div>
                        <div className="stat-desc text-secondary">31 tasks remaining</div>
                    </div>

                </div>
            </div>
            <div className='flex justify-center my-4'>

                <StepsToGetService></StepsToGetService>
            </div>

            <h2 className='text-center text-3xl mt-6 font-bold '>My Services</h2>
            <div className=" my-4 grid flex-grow  lg:grid-cols-3 gap-2  rounded-box place-items-center">

                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }


            </div>

            <div className='grid justify-items-center  '>
                <Link to='/services'><button className="btn btn-active my-2 ">See More</button></Link>
            </div>

        </div>
    );
};

export default Home;