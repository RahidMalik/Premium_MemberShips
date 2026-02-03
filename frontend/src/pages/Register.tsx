import { FacebookSignUp } from '@/Utilities/FacebookAutho';
import { loginWithGoogle } from '@/Utilities/GoogleAutho';
import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import axios from "axios"
import toast from 'react-hot-toast';
import { useRef } from "react";


const SignUpPage = () => {

    const [show, setShow] = useState<boolean>(false)

    const firstNameref = useRef<HTMLInputElement>(null);
    const lastNameref = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const handleSignUp = async (e: FormEvent) => {
        e.preventDefault();
        const email = emailRef.current?.value;
        const Password = passwordRef.current?.value;
        const firstName = firstNameref.current?.value;
        const lastName = lastNameref.current?.value;

        if (!email || !Password || !firstName || !lastName) {
            toast.error("Please fill all the required field");
            return;
        };

        const EmailRegix = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!EmailRegix.test(email)) {
            toast.error("Invalid Email")
            return;
        }
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-+.])(?=.{6,})/;

        if (!strongRegex.test(Password) || Password.length < 6) {
            toast.loading("Password must be at least 6 characters long, include uppercase, lowercase, number, and special character ");
        };
        const fullUsername = `${firstName} ${lastName}`.trim();
        try {
            // 2. Backend API Call (Example)
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                fullUsername,
                email,
                Password
            });

            if (response.data.success) {
                console.log("Registration Successful!");
                toast.success("Registration Successful!")
                navigate('/dashboard');
            }
        } catch (err) {
            if (err instanceof Error) {
                toast.error(err.message)
                console.log(err.message)
            } else {
                toast.error("Registration Failed")
            }
        }
    };
    const LoginPage = () => {
        navigate("/login")
    }
    function ClickOnAppleIcon() {
        toast.error("comming soon, use another method")
    }


    return (
        <section className="flex items-center min-h-[85vh] justify-center bg-gray-50 p-4 py-10">
            <div className="flex w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl">
                <div className="hidden w-1/2 flex-col items-center justify-center bg-[#2D7A7B] p-8 text-white md:flex relative overflow-hidden bg-cover bg-center bg-no-repeat"
                    // BG image
                    style={{ backgroundImage: "url('/loginImages/BgPic.png')" }}
                >
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="mb-4 flex h-35 w-35 items-center justify-center rounded-full border-4 bg-[#224855] shadow-xl overflow-hidden">
                            {/* logo image  */}
                            <img src="/Logo.png" alt="logo"
                                className="w-full h-full object-contain p-2"
                            />
                        </div>
                        <h1 className="text-2xl font-bold tracking-wide text-center">Membership Console</h1>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full p-8 md:w-1/2 lg:p-10">
                    <h2 className="text-xl text-center md:text-start font-bold text-[#224855]">Welcome to Membership Console</h2>
                    <button onClick={LoginPage} className="mb-6 mt-1 text-xs cursor-pointer font-semibold text-[#2D7A7B]">Sign In to Continue</button>

                    <form className="space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <label className="block text-xs font-medium text-gray-700">Enter First Name</label>
                                <input
                                    type="text"
                                    ref={firstNameref}
                                    placeholder="First Name"
                                    className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-[#2D7A7B] focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-700">Enter Last Name</label>
                                <input
                                    type="text"
                                    ref={lastNameref}
                                    placeholder="Last Name"
                                    className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-[#2D7A7B] focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700">Enter Email Address</label>
                            <input
                                type="email"
                                ref={emailRef}
                                autoComplete="new-email"
                                placeholder="abc@gmail.com"
                                className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-[#2D7A7B] focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-700">Enter Your Password</label>
                            <div className='relative'>
                                <input
                                    type={show ? "text" : "password"}
                                    placeholder="••••••••"
                                    autoComplete="new-password"
                                    ref={passwordRef}
                                    className="mt-1 w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-[#2D7A7B] focus:outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShow(!show)}
                                    className="absolute right-3 top-6 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {show ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            <div className="mt-1 text-right">
                                <a href="#" className="text-[10px] font-semibold text-gray-500 hover:text-[#2D7A7B]">Forgot Password</a>
                            </div>
                        </div>

                        <button onClick={handleSignUp} className="w-full rounded-lg bg-[#2D7A7B] py-2.5 text-sm font-semibold text-white transition hover:bg-[#246162]">
                            Sign Up
                        </button>

                        <div className="relative my-4 flex items-center">
                            <div className="grow border-t border-gray-300"></div>
                            <span className="mx-3 text-[10px] text-gray-400">or</span>
                            <div className="grow border-t border-gray-300"></div>
                        </div>

                        <div className="space-y-2">
                            <button onClick={loginWithGoogle} type="button" className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 py-1.5 text-xs font-medium hover:bg-gray-50">
                                <img src="/loginImages/Google.png" className="h-5 w-5" alt="google" />
                                Google
                            </button>
                            <button onClick={FacebookSignUp} type="button" className="flex w-full items-center justify-center gap-1 rounded-full border border-gray-200 py-1.5 text-xs font-semibold hover:bg-gray-50">
                                <img src="/loginImages/facebook.png" className="h-5 w-5 ml-3" alt="Facebook" />
                                Facebook
                            </button>
                            <button onClick={ClickOnAppleIcon} type="button" className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-300 py-1 text-xs font-medium hover:bg-gray-50">
                                <img src="/loginImages/Apple.png" className="h-8 w-8 " alt="apple" />
                                Apple
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </section >
    );
};

export default SignUpPage;