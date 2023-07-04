import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { destroyEvent } from "../../store/actions/organizationAction";

export default function EventRow(props) {
  const dispatch = useDispatch();
  const { event } = props;

  function deleteHandler(e, eventId) {
    e.preventDefault();
    dispatch(destroyEvent(eventId));
  }

  return (
    <>
     <tr>
          <td>{event.name}</td>
          <td>{event.location}</td>
          <td>{event.category}</td>
          <td>{event.registrationDate.slice(0, 10)}</td>
          <td>{event.startDate.slice(0, 10)} s/d {event.endDate.slice(0, 10)}</td>
          <td>{event.status}</td>
          <td className="action-column">
            <Link to={`/dashboard/events/${event.id}/edit`} className="detail-button">
              Edit
            </Link>
            <Link to={`/dashboard/events/${event.id}/users`} className="detail-button">
              See Applicants
            </Link>
            <button className="detail-button" onClick={(e) => deleteHandler(e, event.id)}>Delete</button>
          </td>
        </tr>
    </>
  );
}