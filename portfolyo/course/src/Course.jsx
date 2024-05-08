import React from 'react'
import { courses } from './Data'

function Course({ course }) {
    const { id, title, price, artist, link, image } = course;
    return (
        <div className='course'>
            <div>
                <img src={image} width={250} height={200} />
                <h4 className='course-title'> {title} </h4>
                <h4 className='course-art' >  {artist} </h4>
                <b className='course-price' > {price} $ </b>
                <div className='course-link' ><a href={link}>for buy </a></div>
            </div>
        </div>
    )
}

export default Course