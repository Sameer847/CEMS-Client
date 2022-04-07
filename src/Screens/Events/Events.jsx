import React, { useState } from "react";
import {
  managementData,
  sportsData,
  technicalData,
} from "../../assets/images/mock-data";
import Event from "./Components/Event";
import "./events.scss";

const Events = () => {
  const [managementEvents, setManagementEvents] = useState(managementData);
  const [technicalEvents, setTechnicalEvents] = useState(technicalData);
  const [sportsEvents, setSportsEvents] = useState(sportsData);
  const [filters, setFilters] = useState("");
  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Find your favourite events.</h2>
          <div className="col-md-3">
            <select
              name="categorySelect"
              id="categorySelect"
              className="form-select"
              onInput={(event) => setFilters(event.target.value)}
            >
              <option value="">Filter by category</option>
              <option value="management">Management</option>
              <option value="technical">Technical</option>
              <option value="sports">Sports</option>
            </select>
          </div>
        </div>
        {filters != "" ? (
          <>
            {/* Management events */}
            {filters === "management" && (
              <>
                <h4 className="fw-bold mt-4 mb-3">Management</h4>
                <div className="row">
                  {managementEvents.map((event, index) => (
                    <Event
                      key={index}
                      eventName={event.eventName}
                      eventDate={event.eventDate}
                      eventDescription={event.eventDescription}
                      eventFees={event.eventFees}
                      eventCategory={event.eventCategory}
                      eventTotalParticipants={event.eventTotalParticipants}
                    />
                  ))}
                </div>
              </>
            )}
            {/* Technical events */}
            {filters === "technical" && (
              <>
                <h4 className="fw-bold mt-4 mb-3">Technical</h4>
                <div className="row">
                  {technicalEvents.map((event, index) => (
                    <Event
                      key={index}
                      eventName={event.eventName}
                      eventDate={event.eventDate}
                      eventDescription={event.eventDescription}
                      eventFees={event.eventFees}
                      eventCategory={event.eventCategory}
                      eventTotalParticipants={event.eventTotalParticipants}
                    />
                  ))}
                </div>
              </>
            )}
            {/* Sports events */}
            {filters === "sports" && (
              <>
                <h4 className="fw-bold mt-4 mb-3">Sports</h4>
                <div className="row">
                  {sportsEvents.map((event, index) => (
                    <Event
                      key={index}
                      eventName={event.eventName}
                      eventDate={event.eventDate}
                      eventDescription={event.eventDescription}
                      eventFees={event.eventFees}
                      eventCategory={event.eventCategory}
                      eventTotalParticipants={event.eventTotalParticipants}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <>
            {/* Management events */}
            <h4 className="fw-bold mt-4 mb-3">Management</h4>
            <div className="row">
              {managementEvents.map((event, index) => (
                <Event
                  key={index}
                  eventName={event.eventName}
                  eventDate={event.eventDate}
                  eventDescription={event.eventDescription}
                  eventFees={event.eventFees}
                  eventCategory={event.eventCategory}
                  eventTotalParticipants={event.eventTotalParticipants}
                />
              ))}
            </div>
            {/* Technical events */}
            <h4 className="fw-bold mt-4 mb-3">Technical</h4>
            <div className="row">
              {technicalEvents.map((event, index) => (
                <Event
                  key={index}
                  eventName={event.eventName}
                  eventDate={event.eventDate}
                  eventDescription={event.eventDescription}
                  eventFees={event.eventFees}
                  eventCategory={event.eventCategory}
                  eventTotalParticipants={event.eventTotalParticipants}
                />
              ))}
            </div>
            {/* Sports events */}
            <h4 className="fw-bold mt-4 mb-3">Sports</h4>
            <div className="row">
              {sportsEvents.map((event, index) => (
                <Event
                  key={index}
                  eventName={event.eventName}
                  eventDate={event.eventDate}
                  eventDescription={event.eventDescription}
                  eventFees={event.eventFees}
                  eventCategory={event.eventCategory}
                  eventTotalParticipants={event.eventTotalParticipants}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Events;
