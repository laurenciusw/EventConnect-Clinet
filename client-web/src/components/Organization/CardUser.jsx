import { useState } from "react";
import { Link } from "react-router-dom";

export default function CardUser() {
  const [status, setStatus] = useState("");

  const onChangeHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md flex justify-between">
      <Link to={"/dashboard/events/1/users/1"} className="w-5/6">
        <div>
          <p>Name User</p>
          <p>Job Applied</p>
        </div>
      </Link>
      <div className="w-1/6">
        <label htmlFor="underline_select" className="sr-only">
          Underline select
        </label>
        <select
          id="underline_select"
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          value={status}
          onChange={onChangeHandler}
        >
          <option value="" disabled>
            What would you do with this person?
          </option>
          {["OnHold", "Accept", "Reject", "Done"].map((e, i) => {
            return (
              <option value={e} key={i} className="">
                {e}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
