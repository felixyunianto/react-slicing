import React from 'react'
import { SidebarItem } from '../..'

const Category = (props) => {
    const {data, title} = props
    return (
        <div className="mb-6">
            <h1 className="text-lg font-medium">{title}</h1>
            {data && data.map((item, index) => {
                return (<SidebarItem key={index}>{item}</SidebarItem>)
            })}
        </div>
    )
}

export default Category
