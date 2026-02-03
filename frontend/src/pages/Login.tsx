import { FacebookSignUp } from '@/Utilities/FacebookAutho';
import { loginWithGoogle } from '@/Utilities/GoogleAutho';
import { useRef, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Eye, EyeOff } from 'lucide-react';


const LoginPage = () => {
    const [show, setShow] = useState<boolean>(false);
    // Using UseRef For Unnecessary Re-Render
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const handleSignIn = async (e: FormEvent) => {
        e.preventDefault();
        const email = emailRef.current?.value;
        const Password = passwordRef.current?.value;

        if (!email || !Password) {
            toast.error("Please fill all the required field");
            return;
        };

        const EmailRegix = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!EmailRegix.test(email)) {
            toast.loading("Invalid Email")
            return;
        };

        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{6,})/;

        if (!strongRegex.test(Password) || Password.length < 6) {
            toast.loading("Password must be at least 6 characters long, include uppercase, lowercase, number, and special character ");
        };

        try {
            // 2. Backend API Call (Example)
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                Password
            });
            // if successfully data send to backend then redirect to dashboard page 
            if (response.data.success) {
                toast.success('Registration Successful!', {
                    className: 'border-2 border-green-500 bg-green-50 text-green-800 rounded-lg shadow-lg',
                });
                console.log("Registration Successful!");
                navigate('/dashboard');
            };
        } catch (err) {
            // if any error it show on UI
            if (err instanceof Error) {
                toast.error(err.message)
                console.log(err.message)
            } else {
                toast.error("Login Failed")
            }
        }
    };
    // Redirect to register page
    const RegisterPage = () => {
        navigate("/register")
    }
    // Apple login are not available, comming soon!
    function ClickOnAppleIcon() {
        toast.error("comming soon, use another method")
    };

    return (
        <section className="flex items-center min-h-[85vh] justify-center bg-gray-50 p-4 py-10">
            <div className="flex w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl">
                <div className="hidden w-1/2 flex-col items-center justify-center bg-[#2D7A7B] p-8 text-white md:flex relative overflow-hidden bg-cover bg-center bg-no-repeat"
                    // BG image
                    style={{ backgroundImage: "url('/loginImages/BgPic.png')" }}
                >
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="mb-4 flex h-35 w-35 items-center justify-center rounded-full border-4 bg-[#224855] shadow-xl overflow-hidden">
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
                    <button onClick={RegisterPage} className="mb-6 mt-1 text-xs cursor-pointer font-semibold text-[#2D7A7B]">Sign Up to Continue</button>
                    {/* Add Data in form and send to backend */}
                    <form className="space-y-3">
                        <div>
                            <label className="block text-xs font-medium text-gray-700">Enter Email Address</label>
                            <input
                                type="email"
                                ref={emailRef}
                                autoComplete="current-email"
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
                                    ref={passwordRef}
                                    autoComplete='current-password'
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

                        <button onClick={handleSignIn} className="w-full rounded-lg bg-[#2D7A7B] py-2.5 text-sm font-semibold text-white transition hover:bg-[#246162]">
                            Sign In
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
            </div>
        </section>
    );
};

export default LoginPage;