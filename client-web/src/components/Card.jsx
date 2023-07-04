import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function Card({ data }) {
  return (
    <div className="max-w-sm w-96 bg-white border border-gray-200 rounded-lg shadow ">
      <Link to={`/events/${data.id}`}>
        <img
          className="rounded-t-lg h-56 object-cover w-full"
          src={data.imageUrl}
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {data.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {moment(data.startDate).format("LL")}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data.location}
          </p>
          <ul className="flex gap-4 flex-wrap">
            {data?.Benefits &&
              data.Benefits.map((e) => (
                <li
                  className="p-2 bg-blue-200 rounded-md text-gray-700"
                  key={e.id}
                >
                  {e.name}
                </li>
              ))}
            {/* <li className="p-2 bg-blue-200 rounded-md text-gray-700">
              Benefit
            </li>
            <li className="p-2 bg-blue-200 rounded-md text-gray-700">
              Benefit
            </li>
            <li className="p-2 bg-blue-200 rounded-md text-gray-700">
              Benefit
            </li> */}
          </ul>
        </div>
      </Link>
    </div>
  );
}
