import React from 'react'
import Tour from './TourComponent.js';
import { FaPlaneDeparture} from 'react-icons/fa';
const ToursComponent = ({ tourData, notIntrested }) => {
    return (
        <section>
            <div className="title">
                <h1>Our tours plan <FaPlaneDeparture/></h1>
                <div className="underline"></div>
            </div>
            <div>
                {
                    tourData.map((item) => (
                        <Tour key={item.id} {...item} notIntrested={notIntrested}/>
                    ))
                }
            </div>
        </section>
    )
}
export default ToursComponent;
