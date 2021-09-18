import React from 'react'
import { FaStar } from 'react-icons/fa'

const Rating = () => {
    return (
        <div className="w-full">
            <div className="flex items-end justify-center">
                <h1 className="text-5xl font-bold text-secondary desktop:text-7xl"> 5.0</h1>
                <h6 className="font-medium text-gray-400">/5</h6>
            </div>
            <div className="w-full flex justify-center gap-1 laptop:gap-2 desktop:gap-2 mt-4">
                <FaStar className="text-yellow-500 laptop:text-2xl desktop:text-2xl"/>
                <FaStar className="text-yellow-500 laptop:text-2xl desktop:text-2xl"/>
                <FaStar className="text-yellow-500 laptop:text-2xl desktop:text-2xl"/>
                <FaStar className="text-yellow-500 laptop:text-2xl desktop:text-2xl"/>
                <FaStar className="text-yellow-500 laptop:text-2xl desktop:text-2xl"/>
            </div>
            <div className="flex items-end justify-center mt-4">
                <h6 className="font-bold">Sangat Baik</h6>
            </div>
        </div>
    )
}

export default Rating
