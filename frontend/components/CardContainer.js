import Image from 'next/image'
import { useContext } from 'react';
import medicine from '../../backend/models/medicine';
import GlobalContext from '../pages/globalcontext'



const CardContainer = () => {
    const medicines = useContext(GlobalContext);
    console.log(medicines)
    return (
        <div className="flex items-center justify-center h-screen">
            {medicines.medicines.map(medicine =>(
                <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto" key={medicine._id}>
                    <Image alt="medicine image" src='/medicine.svg' width={500} height={300}/>
                    <div class="bg-white w-full p-4">
                        <p class="text-indigo-500 text-2xl font-medium">
                            {medicine.name}
                        </p>
                        <p class="text-gray-800 text-sm font-medium mb-2">
                            {medicine.manufacturer}
                        </p>
                        <p class="text-gray-600 font-light text-md">
                            {medicine.information}
                        </p>
                        <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                            <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                                delete
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardContainer
