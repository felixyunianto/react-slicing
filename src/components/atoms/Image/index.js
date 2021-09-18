import React from 'react'

const Image = (props) => {
    const {image, ...rest} = props
    return (
        <div {...rest}>
            <img className="object-cover" src={image} alt="product-detail"/>
        </div>
    )
}

export default Image
