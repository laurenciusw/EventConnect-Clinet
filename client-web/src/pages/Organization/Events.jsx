import React from "react";
import { Link } from "react-router-dom";

export default function Events() {
  return (
    <>
      <div className="top-container">
        <Link to={"/dashboard/events/add"} className="event-button">
          Add Event
        </Link>
      </div>
      <div className="events-container">
        <div className="events">
          <table id="customers">
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Category</th>
              <th>Registration Deadline</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>Enchanted Rhythm Music Festival</td>
              <td>Bali</td>
              <td>Music and Concerts</td>
              <td>2023-07-20</td>
              <td>2023-08-05 s/d 2023-08-06</td>
              <td>Active</td>
              <td className="action-column">
                <Link to={"/dashboard/events/1/edit"} className="detail-button">
                  Edit
                </Link>
                <Link
                  to={`/dashboard/events/1/users`}
                  className="detail-button"
                >
                  See Applicants
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
