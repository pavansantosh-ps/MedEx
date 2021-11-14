import { useState,useEffect } from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:4000/api/v1/"

const add = () => {

    const router = useRouter();

    const [name,setName] = useState("");
    const [information,setInformation] = useState("");
    const [manufacturer,setManufacturer] = useState("");
    const [submit,setSubmit] = useState(false);

    useEffect(() => {
        if(submit == true){
            router.push('/dashboard');
        }
    },[submit])

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name,information,manufacturer);
        axios.post('/medication',{
            name: name,
            information: information,
            manufacturer: manufacturer,
        }).then(function (response) {
            console.log(response);
            setSubmit(true);
        }).catch(function (error) {
            console.log(error);
        });    
        //should add validation
    }

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleInformationChange(e){
        setInformation(e.target.value);
    }
    
    function handleManufacturerChange(e){
        setManufacturer(e.target.value);
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit = {handleSubmit} className="block bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 block">
                <h1 className="block text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl pb-5">
                    <span className="block text-indigo-600 xl:inline">MedEx</span> 
                    <span className="block xl:inline"> Adding medicine</span>
                </h1>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Name">
                    Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleNameChange} id="Name" type="text" placeholder="Enter medicine name"/>
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Information">
                    Information
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInformationChange} id="Information" type="text" placeholder="Enter medicine information"/>
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Manufacturer">
                    Manufacturer
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={handleManufacturerChange} id="Manufacturer" type="text" placeholder="Enter the manufacturer name"/>
                </div>
                <div className="flex items-center justify-between">
                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submit
                </button>
                </div>
            </form>
        </div>
    )
}

export default add
