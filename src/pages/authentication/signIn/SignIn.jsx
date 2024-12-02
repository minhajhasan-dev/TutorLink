import { Link, useLocation, useNavigate} from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import GoogleSignIn from "./socialSignIn/GoogleSignIn";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const SignIn = () => {

    const {signInUser}=useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
     const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
        .then(result => {
            toast.success('Sign In successfully');    
            setTimeout(() => {
                const from = location.state?.from || '/';
                navigate(from, { replace: true });
            }, 1000);
        })
        .catch(error => {
            console.error(error);
            toast.error('Invalid email or password. Please try again.');
        });
    }
    return (
        <div className="max-w-screen-xl">
            <Helmet>
                <title>Sign_In | TutorLink</title>
            </Helmet>

            
            <div className=" max-w-sm  bg-base-100 flex items-center  mx-auto ">
               
            <form className="card-body" onSubmit={handleSignIn}>
            <h1 className="text-4xl text-center font-bold mb-4">Sign In Now!!</h1>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Password</span>
                </label>
                <div className="flex relative">
                     <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" className="input input-bordered w-full" required />
                    <button type="button" className="absolute right-3 top-4" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                </div>
               
                
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
               
                <button type="submit" className="btn btn-outline border-0 border-b-4 border-t-2 border-black text-black px-3 text-xl font-bold w-full">Sign In</button>
                <div className="divider">OR</div>
                <div className="flex justify-between">
                <GoogleSignIn></GoogleSignIn>
                {/* <GithubLogin></GithubLogin> */}
                </div>
            
                </div>
                <p className="text-center mb-5">New to TutorLink? Please <Link to="/signup">
                            <button className="text-blue-400 underline font-bold">Sign Up</button>
                        </Link></p>
            </form>
            </div>
            
            </div>
     
       
    );
};

export default SignIn;