import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {


    const { createUser, setUser } = use(AuthContext);

    const handleRegister=(e)=>{
        e.preventDefault();
        console.log('handle register called');

        const form = e.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log({name, photo, email, password});
        // console.log(createUser);
        createUser(email,password)
        .then((result) => {
            const user = result.user;
            // console.log(result.user);
            setUser(user);
        })
        .catch((error) => {
            const errorCode =error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }


    
    


    return (
        <div className="flex justify-center min-h-screen items-center">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                        
                        <h2 className="text-center text-2xl font-semibold mt-5">Please Register</h2>
                        <div className="card-body">
                            <form onSubmit={handleRegister} className='space-y-2'>
                                
                                {/* name */}
                                <label className="label">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="input"
                                    placeholder="name"
                                    required
                                />
                                
                                
                                {/* photo url */}
                                <label className="label">Photo URL</label>
                                <input
                                    type="text"
                                    name="photo"
                                    className="input"
                                    placeholder="photo url"
                                    required
                                />


                                {/* email */}
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input"
                                    placeholder="Email"
                                    required
                                />
                                
                                {/* password */}
                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="input"
                                    placeholder="Password"
                                    required
                                />
                                
                                <button className="btn btn-neutral mt-4" type='submit'>Register</button>
                                
                                <p className="text-center text-sm font-semibold pt-5" >Already have an account? <Link to="/auth/login" className="text-secondary ">Login</Link> </p>
                            </form>
        
        
                        </div>
                    </div>
                </div>
    );
};

export default Register;