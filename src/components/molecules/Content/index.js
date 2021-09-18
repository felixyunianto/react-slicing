import React from 'react'

const Content = (props) => {
    const {children} = props
    return (
        <div className="w-full laptop:w-10/12 desktop:w-10/12">
            {children}
        </div>
    )
}

export default Content
