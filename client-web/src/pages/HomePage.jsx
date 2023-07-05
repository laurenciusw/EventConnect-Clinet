import React, { useEffect } from "react";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../store/actions/eventAction";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { data } = useSelector((state) => state.event);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <>
      {/* <div className="max-w-screen-xl flex flex-wrap mx-auto p-4 justify-between h-screen">
        <h1 className="w-full text-7xl bg-slate-400">HERO</h1>
      </div> */}

      <div className="bg-blue-900">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">Want to be volunteer?</span>
            <span className="block text-indigo-500">
              It&#x27;s today or never.
            </span>
          </h2>
          <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
            Make a difference today! Sign up as a volunteer for upcoming event
            and be part of an exciting experience. Join us and creating positive
            change. Click here to register and start making an impact!
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <Link
                to={"/register/user"}
                type="button"
                className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl flex flex-wrap mx-auto justify-between">
        {/* <h2 className="text-3xl">Events</h2> */}
        <div className="max-w-screen-xl flex flex-wrap mx-auto p-4 gap-10">
          {data &&
            data.map((e, i) => {
              return <Card key={i} data={e} />;
            })}
        </div>
      </div>
    </>
  );
}
