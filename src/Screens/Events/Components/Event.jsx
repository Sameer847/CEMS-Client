import React from 'react'
import eventImage from '../../../assets/images/No_Image_Available.jpg'

const Event = ({eventName, eventDate, eventDescription, eventFees, eventCategory, eventTotalParticipants}) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="bg-white rounded p-3 cursor-pointer">
                <div className="event-image">
                    <img src={eventImage} alt="" height={200} className='w-100 rounded' />
                </div>
                <div className="event-content mt-3">
                    <h4 className="fw-bold">
                        {eventName}
                    </h4>
                    <p className="text-darkorange fw-500 mb-2">
                        {eventDate}
                    </p>
                    <p className="form-text text-secondary mb-2">
                        {eventDescription}
                    </p>
                    <p className="fw-bold">Fees: {eventFees} INR</p>
                    <div className="d-flex align-items-center form-text text-dark">
                        <i className="material-icons me-1 fs-6">category</i>
                        {eventCategory}
                        <i className="material-icons me-1 fs-5 ms-3">people</i>
                        {eventTotalParticipants} Participants
                    </div>
                    <div className="text-end mt-2">
                        <button className="btn text-primary rounded-pill">View Details...</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event