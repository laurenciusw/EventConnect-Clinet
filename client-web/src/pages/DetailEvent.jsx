import { useDispatch, useSelector } from "react-redux";
import { fetchDataById } from "../store/actions/eventAction";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalForm from "../components/ModalForm";
import moment from "moment";

export default function DetailEvent() {
  const [open, setOpen] = useState(false);
  const { event } = useSelector((state) => state.event);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDataById(id));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto">
      <ModalForm
        open={open}
        onClose={() => setOpen(false)}
        JobDesks={event?.JobDesks}
      />
      <div className="flex ">
        <div
          className={`max-w-sm w-2/6 h-full bg-white border border-gray-200 rounded-lg shadow my-5 ${
            open ? "" : "sticky"
          } top-32 `}
        >
          <div className="p-5 flex flex-col justify-between">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {event?.name}
              </h5>
              <h5 className="mb-2 text-lg font-normal tracking-wide text-gray-900 ">
                By {event?.Organizer.organizerName}
              </h5>
              <p className="my-3 font-normal text-blue-900">
                <span className="p-2 border border-blue-900 rounded-md">
                  <span className="mr-2">Logo</span>
                  {event?.category}
                </span>
              </p>
              <p className="mb-3 font-normal text-gray-400">
                {moment(event?.startDate).format("LL")} until{" "}
                {moment(event?.endDate).format("LL")}
              </p>
              <p className="mb-3 font-normal text-gray-400">
                {event?.location}
              </p>
              <p className="font-normal text-gray-400">
                Benefit that you'll get:
              </p>
              <ul className="flex gap-4 flex-wrap mb-3">
                {event?.Benefits &&
                  event.Benefits.map((e) => <li key={e.id}>{e.name}</li>)}
                <li>Test Benefit</li>
              </ul>
              <p className="mb-3 font-normal text-red-400">
                Registration end date:{" "}
                {moment(event?.registrationDate).format("LL")}
              </p>
            </div>
            <div>
              <h1>MAP</h1>
            </div>
            <div>
              <button
                onClick={() =>
                  localStorage.role === "Organizer" ? `` : setOpen(true)
                }
                className="px-4 py-2 bg-blue-900 w-full rounded-md text-white"
              >
                Join Volunteer
              </button>
            </div>
          </div>
        </div>
        <div className="w-4/6 mx-auto mt-5">
          <img src={event?.imageUrl} alt="" className="w-full" />
          <p className="tracking-wider leading-relaxed">{event?.description}</p>
        </div>
      </div>
    </div>
  );
}
