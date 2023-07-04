import React from "react";
import EventRow from "./EventRow";


export default function EventTable(props) {
  const { events } = props;
  return (
    <>
      <table id="customers">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Category</th>
            <th>Registration Deadline</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {events.map((event, index) => {
          return (
            <EventRow event={event} index={index + 1} key={event.id} />
          );
        })}
        </tbody>
      </table>
    </>
  );
}
