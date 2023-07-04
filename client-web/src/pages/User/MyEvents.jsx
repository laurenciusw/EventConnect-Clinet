import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMyListEvent } from "../../store/actions/userAction";

export default function MyEvents() {
  const [isDefaultPage, setIsDefaultPage] = useState(true);
  const [data, setData] = useState();
  const { currentEvents, pastEvents } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyListEvent());
  }, [isDefaultPage]);

  useEffect(() => {
    if (isDefaultPage) {
      setData(currentEvents);
    } else {
      setData(pastEvents);
    }
  }, [currentEvents]);

  const onClickHandler = (boolean) => {
    setIsDefaultPage(boolean);
  };

  return (
    <div className="bg-blue-200 h-screen">
      <div className="max-w-screen-xl mx-auto">
        <div className="border-b border-gray-400 flex justify-center">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-400 ">
            <li
              className={`mr-2 inline-flex p-6 border-b-2 rounded-t-lg ${
                isDefaultPage
                  ? "text-blue-900 border-blue-900 group"
                  : "hover:border-gray-200 hover:text-gray-200 group"
              }`}
            >
              <button
                className="flex items-center"
                onClick={() => onClickHandler(true)}
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
                !isDefaultPage
                  ? "text-blue-900 border-blue-900 group"
                  : "hover:border-gray-200 hover:text-gray-200 group"
              }`}
            >
              <button
                className="flex items-center"
                onClick={() => onClickHandler(false)}
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
                  <Link
                    to={`/events/${e.Event.id}`}
                    className=" items-center w-4/6"
                  >
                    <div>
                      <p>{e.Event.name}</p>
                      <p>{e.JobDesk.name}</p>
                    </div>
                  </Link>
                  <div className="flex items-center">
                    {e.status === "Accepted" ? (
                      <Link className="py-2 px-4 bg-blue-900 rounded-md text-white">
                        Go to My Todo List
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
