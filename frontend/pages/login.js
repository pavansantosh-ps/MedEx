import { useState,useEffect } from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:4000/api/v1/"

const login = () => {
    const router = useRouter();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [valid,setValid] = useState(false);

    if(valid == true){
        useEffect(() => {
            router.push('/dashboard')
        },[valid])
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(email,password);
        axios.post('/user/login',{
            email: email,
            password: password,
        }).then(function (response) {
            console.log(response);
            setValid(true);
        }).catch(function (error) {
            console.log(error);
        });    
        //should add validation
    }

    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    function handlePassChange(e){
        setPassword(e.target.value);
    }


    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <form onSubmit = {handleSubmit} className="block bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 block">
                    <h1 className="block text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl pb-5">
                        <span className="block text-indigo-600 xl:inline">MedEx</span> 
                        <span className="block xl:inline"> Login</span>
                    </h1>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleEmailChange} id="Email" type="text" placeholder="Email"/>
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={handlePassChange} id="password" type="password" placeholder="Password"/>
                    </div>
                    <div className="flex items-center justify-between">
                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Login
                    </button>
                    <Link href = "/create">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Create Account
                        </button>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default login
