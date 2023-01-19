import React from 'react'
import './index.css'

export default function ColumnsDetail({ title, img, points }) {

    return (
        <div className='column-container'>

            <div className='column-header'>
                <img src={img} alt="icons for titles" />
                <div className='title'>{title}</div>
            </div>

            {points.map((item, index) =>
                <div key={index}
                    className='column'>{item}
                </div>)}
        </div>
    )
}
