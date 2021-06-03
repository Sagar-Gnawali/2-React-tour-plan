import React, { useState } from 'react'
const TourComponent = ({ id, name, image, info, price, notIntrested }) => {
    const [readLessMore, setreadLessMore] = useState(false);
    return (
        <article className="single-tour" >
            <img src={image} alt={name} />
            <footer >
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">NRP. {(price)}</h4>
                </div>
                <p>{
                    readLessMore ? info : `${info.substring(0, 150)}...`
                }<button onClick={() => setreadLessMore(!readLessMore)}>{readLessMore ? 'Show less' : 'Read more'}</button></p>
                <button className="delete-btn" onClick={() => notIntrested(id)}>Not intrested</button>
            </footer>
        </article>
    )
}
export default TourComponent;
