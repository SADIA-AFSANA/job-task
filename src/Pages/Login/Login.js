import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider/AuthProvider';

const Login = () => {

    const { login, signInWithGoogle } = useContext(AuthContext)
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(error => console.log(error));
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }
    return (
        <div>
            <div className="hero w-full bg-base-200">
                <div className="hero-content py-10 grid md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLGJ4DlUiUsFRmN84dPOoPpoK01nlV8fG57Q&usqp=CAU" alt="" />

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  ">
                        <h1 className="text-5xl font-bold text-center">Login!</h1>
                        <form onSubmit={handleLogin} className="card-body">
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
                                <input className="btn btn-primary" type="submit" value="Login" />

                            </div>
                        </form>
                        <button onClick={handleGoogleSignIn} className='btn btn-secondary'>Google</button>
                        <p className=' font-bold text-center pb-5'>New to account <Link className='text-orange-500 font-bold' to='/signup'>Signup</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;