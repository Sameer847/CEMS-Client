import React from 'react'
import eventImage from '../../../assets/images/event-images/madads.jpg'

const Event = () => {
    return (
        <div className="col-md-4 mb-4">
            <div className="bg-white rounded p-3 cursor-pointer">
                <div className="event-image">
                    <img src={eventImage} alt="" className='w-100 rounded' />
                </div>
                <div className="event-content mt-3">
                    <h4 className="fw-bold">
                        MAD ADS, College Days.
                    </h4>
                    <p className="text-darkorange fw-500 mb-2">
                        Fri, Mar 18, 11:30 AM
                    </p>
                    <p className="form-text text-secondary mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, unde? Quisquam, unde...
                    </p>
                    <div className="d-flex align-items-center form-text text-dark">
                        <i className="material-icons me-1 fs-6">category</i>
                        Management
                        <i className="material-icons me-1 fs-5 ms-3">people</i>
                        76 Participants
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