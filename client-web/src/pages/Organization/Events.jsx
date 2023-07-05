import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrgEvents } from "../../store/actions/organizationAction";
import EventTable from "../../components/Organization/EventTable";

export default function Events() {
  const dispatch = useDispatch();
  const events = useSelector((state) => {
    return state.organizer.orgEvents;
  });

  useEffect(() => {
    dispatch(fetchOrgEvents());
    console.log(events);
  }, []);

  return (
    <>
      <div className="top-container">
        <Link to={"/dashboard/events/add"} className="event-button">
          Add Event
        </Link>
      </div>
      <div className="events-container min-h-screen">
        <div className="events">
          <EventTable events={events} />
        </div>
      </div>
    </>
  );
}
