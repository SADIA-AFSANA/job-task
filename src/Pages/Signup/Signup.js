import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider/AuthProvider';

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.log(err));
    }


    return (
        <div>
            <div className="hero w-full bg-base-200">
                <div className="hero-content py-10 grid md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLGJ4DlUiUsFRmN84dPOoPpoK01nlV8fG57Q&usqp=CAU" alt="" />

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  ">
                        <h1 className="text-5xl font-bold text-center">SignUp!</h1>
                        <form onSubmit={handleSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />

                            </div>
                        </form>
                        <p className=' font-bold text-center pb-5'>Already Have an account <Link className='text-orange-500 font-bold' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;