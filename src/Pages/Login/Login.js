// import React, { useContext } from 'react';

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/Authprovider/Authprovider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
    useTitle('Login')
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { signInWithGoogle, userSignIn, loading } = useContext(AuthContext)


    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        userSignIn(email, password)
            .then(result => {
                navigate(from, { replace: true })

                const loggedUser = result.user;

                const currentUser = {
                    email: loggedUser.email
                }

                fetch('https://pix-lab-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('pixLabToken', data.token)
                        // navigate(from, { replace: true })

                    })

            })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                navigate('/')

                const loggedUser = result.user;

                const currentUser = {
                    email: loggedUser.email
                }

                fetch('https://pix-lab-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('pixLabToken', data.token)
                        navigate(from, { replace: true })

                    })

            })
    }
    return (
        <div>
            {
                loading ?
                    <>
                        <div className='pb-96'>
                            <progress className="progress  w-56 "></progress>
                        </div>
                    </>
                    :
                    <>
                        <div className="hero mb-10 ">
                            <div className="hero-content  gap-20 lg:flex-row">
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-12 bg-base-100">
                                    <h1 className="text-5xl font-bold text-center pt-5">Login now!</h1>
                                    <form onSubmit={handleSignIn} className="card-body">

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                            <label className="label">
                                                <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                                            </label>
                                        </div>
                                        <div className="form-control mt-6">
                                            <input className="btn btn-accent" type="submit" value="Login" />

                                        </div>
                                    </form>

                                    <p className='text-center py-4'>Don't have any account ? <Link className='text-blue-400 font-bold' to="/signup">Register</Link></p>
                                    <button onClick={handleGoogleSignIn} className="btn btn-primary">Login With Google</button>
                                </div>
                            </div>

                        </div>
                    </>
            }



        </div>
    );
};

export default Login;