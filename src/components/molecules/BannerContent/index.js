import React from 'react'
import { Banner } from '../..'

const BannerContent = (props) => {
    const {image} = props
    return (
        <div className="w-full px-16 pt-2 pb-5">
            <Banner image={image} />
        </div>
    )
}

export default BannerContent
