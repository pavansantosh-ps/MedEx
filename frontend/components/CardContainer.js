import Image from 'next/image'
import { useContext } from 'react';
import GlobalContext from '../pages/globalcontext'



const CardContainer = () => {
    const medicine = useContext(GlobalContext);

    console.log(medicine);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto" >
                <Image alt="medicine image" src='/medicine.svg' width={500} height={300}/>
                <div class="bg-white w-full p-4">
                    <p class="text-indigo-500 text-2xl font-medium">
                        Should You Get Online Education?
                    </p>
                    <p class="text-gray-800 text-sm font-medium mb-2">
                        A comprehensive guide about online education.
                    </p>
                    <p class="text-gray-600 font-light text-md">
                        It is difficult to believe that we have become so used to having instant access to information at...
                    </p>
                    <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                        <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                            #online
                        </span>
                        <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                            #internet
                        </span>
                        <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                            #education
                        </span>
                    </div>
                    <div class="flex items-center mt-2">
            
                        <div class="pl-3">
                            <div class="font-medium">
                                Jean Marc
                            </div>
                            <div class="text-gray-600 text-sm">
                                CTO of Supercars
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardContainer
