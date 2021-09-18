import React from 'react'

const Banner = (props) => {
    const {image}= props;
    return (
        <img src={image} alt="banner" className="w-full h-full"/>
    )
}

export default Banner
