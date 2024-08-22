import React, { useState, useRef, useContext } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from './Redux/userSlice';
import {toggleLogin} from "./Redux/LoginSlice"

const ToggleSignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [userToEmployer, setUserToEmployer] = useState(false);

    const dispatch = useDispatch();

    
    const Email = useRef(null);
    const Password = useRef(null);
    const Name = useRef(null);
    const navigate = useNavigate();

    const toggleToEmployer = () => {
        setUserToEmployer(prev=> !prev);
        if (Email.current) Email.current.value = '';
        if (Password.current) Password.current.value = '';
        if (Name.current) Name.current.value = '';
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleRegister = () => {
        setIsRegistering(!isRegistering);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = Email.current.value;
        const password = Password.current.value;
        const name = isRegistering ? Name.current.value : "";
        const role = userToEmployer ? 'EMPLOYER' : 'USER';
        
        try {
            let response;
            if (isRegistering) {
                response = await axios.post('https://ecoavenstra-be.onrender.com/api/v1/user/signup', {
                    name,
                    role,
                    email,
                    password,
                });
            } else {
                response = await axios.post('https://ecoavenstra-be.onrender.com/api/v1/user/login', {
                    email,
                    password,
                });
            }
            console.log(response.data);
            dispatch(addUser(response.data));
            dispatch(toggleLogin());
            console.log(response.data.token)
            console.log(response.data.user)
            if(response.data.token){
                
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("profile_Name" ,response.data.user.name)
                localStorage.setItem("profile_Email" ,response.data.user.email)

            }
            
        
            
            // Navigation logic based on userToEmployer state
         
            if (userToEmployer) {
                navigate('/employerform');
                toast.success('Logged In as Employer Successfully!');
                dispatch(toggleLogin());
                
            } else {
                navigate('/');
                toast.success('Logged In as User Successfully!');
                dispatch(toggleLogin());
            }

            console.log(`Logged In Successfully as ${userToEmployer ? 'Employer' : 'User'}!`);
        } catch (error) {
            toast.error('Invalid Credentials!');
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <section className="bg-gray-100 py-10 min-h-screen flex box-border justify-center items-center">
            <div className="bg-[#3c7dff] rounded-2xl flex max-w-3xl p-5 items-center">
                <Toaster />
                <div className="md:w-1/2 px-8">
                <div className="font-bold text-3xl text-black">
                        {isRegistering ? (userToEmployer ? 'Employer Register' : 'User Register') : (userToEmployer ? 'Employer Login' : 'User Login')}
                    </div>

                    <p className="text-sm mt-4 mb-8 text-[#000000]">
                        {isRegistering ? 'Create your account now.' : 'If you already have an account, log in now.'}
                    </p>
                    
                    <form onSubmit={handleSubmit} className={`${userToEmployer ? 'Employer' : 'User'} flex flex-col gap-4`}>
                        {isRegistering && (
                            <input
                                ref={Name}
                                className="p-2 rounded-xl border"
                                type="text"
                                name="name"
                                placeholder="Name"
                            />
                        )}
                        <input
                            ref={Email}
                            className="p-2 rounded-xl border"
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <div className="relative">
                            <input
                                ref={Password}
                                className="p-2 rounded-xl border w-full"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="gray"
                                className={`bi bi-eye${showPassword ? "-slash-fill" : ""} absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100`}
                                onClick={togglePasswordVisibility}
                                viewBox="0 0 16 16"
                            >
                                {showPassword ? (
                                    <>
                                        <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                    </>
                                ) : (
                                    <>
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </>
                                )}
                            </svg>
                        </div>
                        <button
                            className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#0e4374] font-medium"
                            type="submit"
                        >
                            {isRegistering ? 'Register' : 'Login'}
                        </button>
                    </form>

                    <div className="mt-6 items-center text-gray-100">
                        <hr className="border-gray-300" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-300" />
                    </div>
                    <button
                        onClick={toggleToEmployer}
                        className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium"
                    >
                        {userToEmployer ? 'Login As a User' : 'Login As an Employer'}
                    </button>
                    <div className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">
                        Forget password?
                    </div>
                    <div className="mt-4 text-sm flex justify-between items-center container-mr">
                        <p className="mr-3 md:mr-0">
                            {isRegistering ? "Already have an account?" : "If you don't have an account.."}
                        </p>
                        <button
                            className="hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300"
                            onClick={toggleRegister}
                        >
                            {isRegistering ? 'Log in' : 'Register'}
                        </button>
                    </div>
                </div>
                <div className="md:block hidden w-1/2">
                    <img
                        className="rounded-2xl max-h-[1600px]"
                        src="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmcmVzaHxlbnwwfDF8fHwxNzEyMTU4MDk0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="login form"
                    />
                </div>
            </div>
        </section>
    );
};

export default ToggleSignIn;
