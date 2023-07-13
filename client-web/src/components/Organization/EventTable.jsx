import React, { useState } from "react";
import EventRow from "./EventRow";
import ModalToDo from "./ModalToDo";

export default function EventTable(props) {
  const [open, setOpen] = useState(false);
  const { events } = props;

  const [event, setEvent] = useState();

  const handleAddToDo = (event) => {
    console.log(event);
    setEvent(event);
    setOpen(true);
  };
  return (
    <>
      <ModalToDo open={open} onClose={() => setOpen(false)} event={event} />
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
              <EventRow
                event={event}
                index={index + 1}
                key={event.id}
                handleAddToDo={handleAddToDo}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
