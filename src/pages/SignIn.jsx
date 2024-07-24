// import { useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
// import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const { dispatch } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // dispatch({ type: "LOGIN", payload: true });

                localStorage.setItem('users', JSON.stringify(user))
                navigate('/dashboard');
                window.location.reload();
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorMessage);
            });
    }

    
    // https://images.hdqwalls.com/download/lofoten-norway-5k-9t-2560x1440.jpg

    return (
        <div className="w-[100%] bg-[url('https://images.hdqwalls.com/download/lofoten-norway-5k-9t-2560x1440.jpg')] bg-cover object-cover object-center bg-no-repeat">
            <section className="text-gray-600 body-font">
                <div className="max-sm:py-[45%] container px-5 py-[15%] mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="max-sm:text-center title-font text-3xl text-white font-bold ">Web Shop saytini o'zgartirish uchun Sign-In bo'limida hisob kiriting.</h1>
                        <p className="max-sm:text-center leading-relaxed mt-4 text-white"><font className="text-indigo-400 font-bold">Eslatma:</font> Web Shop saytini o'zgartirish faqat admin tomonidan qilinadi !</p>
                    </div>
                    <form onSubmit={onSubmit} className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>

                        {error && <p className="text-red-500 text-xs mb-4">{error}</p>}

                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input
                                type="email"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Password</label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Kirish</button>
                        <p className="text-xs text-gray-500 mt-3">Literally you probably heard of them jean shorts.</p>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default SignIn