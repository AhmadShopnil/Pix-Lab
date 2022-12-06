import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider/Authprovider';
import useTitle from '../../hooks/useTitle';



const SignUp = () => {
    useTitle("Sign Up")
    const { createUser, updateUser, loading } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                if (result.user) {

                    form.reset()
                    handleUpdateProfile(name, photo)

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


                    navigate('/')
                }
            })
            .catch(error => console.log(error))

    }

    const handleUpdateProfile = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateUser(profile)
            .then(result => {

            })
            .catch(error => console.error(error))

    }
    return (
        <div>
            {
                loading ?
                    <div className='pb-96'>
                        <progress className="progress "></progress>
                    </div>
                    :
                    <div className="hero mb-10 ">
                        <div className="hero-content  gap-20 lg:flex-row">
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-12 bg-base-100">
                                <h1 className="text-5xl font-bold text-center pt-5">Sign Up now!</h1>
                                <form onSubmit={handleSignUp} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Full Name</span>
                                        </label>
                                        <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Photo</span>
                                        </label>
                                        <input name='photo' type="text" placeholder="photo" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                            <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <input className="btn btn-accent" type="submit" value="Sign Up" />

                                    </div>
                                </form>

                                <p className='text-center py-4'>Already have any account ? <Link className='text-blue-400 font-bold' to="/login">Login</Link></p>

                            </div>
                        </div>

                    </div>

            }

        </div>
    );
};

export default SignUp;