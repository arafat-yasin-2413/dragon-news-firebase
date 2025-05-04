import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";




const Login = () => {
    const [error, setError] = useState("")
    const { setUser ,loginUser } = use(AuthContext);

    const location = useLocation();
    // console.log('location from login : ', location);

    const navigate = useNavigate(); // returns a function

    const handleLogin=(e)=>{
        e.preventDefault();
        
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        // console.log(email);
        // console.log(password);

        loginUser(email,password)
        .then(result=>{
            const user = result.user;
            // console.log('user login koriche : ', user);
            navigate(`${location.state ? location.state : '/'}`)
        })
        .catch((error)=>{
            const errorCode = error.code;
            // const errorMessage = error.message;

            // alert(errorCode, errorMessage)
            setError(errorCode);
        })
    }


	return (
		<div className="flex justify-center min-h-screen items-center">
			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
				
                <h2 className="text-center text-2xl font-semibold mt-5">Login to your account</h2>
                <div className="card-body">
					<form onSubmit={handleLogin} className="space-y-2">
						
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
						<div>
							<a className="link link-hover">Forgot password?</a>
						</div>


                        {   
                            error && <p className=" rounded-md px-3 py-2 text-red-500 font-semibold bg-base-200 w-fit shadow-xl">{error}</p> 
                        
                        }


						<button className="btn btn-neutral mt-4" type="submit">Login</button>
                        
                        <p className="text-center text-sm font-semibold pt-5" >Don't have an account? <Link to="/auth/register" className="text-secondary ">Register</Link> </p>
					</form>


				</div>
			</div>
		</div>
	);
};

export default Login;
