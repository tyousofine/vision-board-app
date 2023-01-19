import React from 'react'
import ColumnsDetail from '../ColumnsDetail'
import uuid from 'react-uuid'
import { useState } from 'react'
import './index.css'


export default function VisionColumns(props) {
    const [columnData, setColumnData] = useState([
        {
            id: uuid(),
            img: "../../icons/group-icon.jpg",
            title: "Target Groups",
            points: [
                'Which market does the product address?',
                'Who are the target customers and users?'
            ]
        },
        {
            id: uuid(),
            img: "../../icons/heart-icon.jpg",
            title: "Needs",
            points: [
                'What problem does the product solve?',
                'Which benefit does it provide?'
            ]
        },
        {
            id: uuid(),
            img: "../../icons/cart-icon.jpg",
            title: "Product",
            points: [
                'What product is it?',
                'What makes it desirable and special?',
                'Is it feasable to develope the prodect?'
            ]
        },
        {
            id: uuid(),
            img: "../../icons/bullseye-icon.jpg",
            title: "Business Goals",
            points: [
                'How is the product going to benefit the company?',
                'What are the business goals?',
                'Which one is most important?'
            ]
        }
    ])

    return (
        <div className='columns'>
            {columnData.map((data, index) => (
                <ColumnsDetail
                    key={index}
                    img={data.img}
                    title={data.title}
                    points={data.points}
                />
            ))}
        </div>

    )
}
