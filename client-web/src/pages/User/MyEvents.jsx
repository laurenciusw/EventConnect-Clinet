import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMyListEvent, claimTodo, updateIsClaim } from "../../store/actions/userAction";

export default function MyEvents() {
  const [page, setPage] = useState("registered");
  const [data, setData] = useState();
  const { currentEvents, pastEvents, registeredEvents } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const claimTodoHandler = (event) => {
    event.preventDefault();

    let UserEventId = event.target.value[4]

    let payload = {
      JobDeskId: event.target.value[0],
      EventId: event.target.value[2],
    }

    console.log(UserEventId)

    dispatch(claimTodo(payload));
    dispatch(updateIsClaim(UserEventId));
    dispatch(getMyListEvent());
  }

  useEffect(() => {
    dispatch(getMyListEvent());
  }, [page]);

  useEffect(() => {
    if (page === "current") {
      setData(currentEvents);
    } else if (page === "past") {
      setData(pastEvents);
    } else if (page === "registered") {
      setData(registeredEvents);
    }
  }, [registeredEvents, currentEvents]);

  const onClickHandler = (page) => {
    setPage(page);
  };

  return (
    <div className="bg-blue-200 h-screen">
      <div className="max-w-screen-xl mx-auto">
        <div className="border-b border-gray-400 flex justify-center">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-400 ">
            <li
              className={`mr-2 inline-flex p-6 border-b-2 rounded-t-lg ${
                page === "registered"
                  ? "text-blue-900 border-blue-900 group"
                  : "hover:border-gray-200 hover:text-gray-200 group"
              }`}
            >
              <button
                className="flex items-center"
                onClick={() => onClickHandler("registered")}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                Registered Events
              </button>
            </li>
            <li
              className={`mr-2 inline-flex p-6 border-b-2 rounded-t-lg ${
                page === "current"
                  ? "text-blue-900 border-blue-900 group"
                  : "hover:border-gray-200 hover:text-gray-200 group"
              }`}
            >
              <button
                className="flex items-center"
                onClick={() => onClickHandler("current")}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                Current Events
              </button>
            </li>
            <li
              className={`mr-2 inline-flex p-6 border-b-2 rounded-t-lg ${
                page === "past"
                  ? "text-blue-900 border-blue-900 group"
                  : "hover:border-gray-200 hover:text-gray-200 group"
              }`}
            >
              <button
                className="flex items-center"
                onClick={() => onClickHandler("past")}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Past Events
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent" className="m-5">
          {data &&
            data.map((e) => {
              return (
                <div
                  key={e.id}
                  className="bg-gray-50 p-4 rounded-lg flex justify-between my-5"
                >
                  <img
                    src={e.Event.imageUrl}
                    alt=""
                    className="w-44 h-32 object-cover"
                  />
                  <Link
                    to={`/events/${e.Event.id}`}
                    className="flex items-center sm:w-5/6 ps-4"
                  >
                    <div>
                      <p className="font-bold text-gray-800">{e.Event.name}</p>
                      <p className="text-gray-500 font-light">
                        {e.JobDesk.name}
                      </p>
                    </div>
                  </Link>
                  
                  <div className="flex items-center">
                    {!e.isClaim && (<button 
                  onClick={claimTodoHandler}
                  value={[e.JobDesk.id, e.Event.id, e.id]}
                  className="mr-3 py-2 px-4 bg-blue-900 rounded-md text-white"
                  >Claim Todo List</button>)}
                  
                    {e.status === "Accepted" && e.isClaim ? (
                      <Link
                        to={`/event/${e.Event.id}/todolist`}
                       className="py-2 px-4 bg-blue-900 rounded-md text-white">
                        My Todo List
                      </Link>
                    ) : (
                      ""
                    )}
                    <div>
                      <p>
                        <span
                          className={`py-2 px-4 bg-blue-100 rounded-md ml-8 ${
                            e.status === "Rejected" ? "bg-red-100" : ""
                          }`}
                        >
                          {e.status}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
