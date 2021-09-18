import React from 'react'
import { Banner } from '../..'

const BannerContent = (props) => {
    const {image} = props
    return (
        <div className="w-full px-4 laptop:px-16 desktop:px-16">
            <Banner image={image} />
        </div>
    )
}

export default BannerContent
