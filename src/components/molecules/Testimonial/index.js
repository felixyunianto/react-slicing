import React from 'react'
import { Rating, Comment } from '../..'

const Testimonial = (props) => {
    const {data} = props
    return (
        <div className="w-full gap-4 my-8 laptop:flex desktop:flex">
            <div class="w-full laptop:w-2/12 desktop:w-2/12 bg-white shadow rounded-lg px-8 py-8">
                <Rating />
            </div>
            <div class="w-full laptop:w-10/12 desktop:w-10/12 bg-white shadow rounded-lg px-8 py-8 mt-4 laptop:mt-0 desktop:mt-0">
                <Comment data={data}/>
            </div>
        </div>
    )
}

export default Testimonial
