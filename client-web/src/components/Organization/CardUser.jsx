import { Link } from "react-router-dom";

export default function CardUser() {
  return (
    <div className="bg-gray-100 p-4 rounded-md flex justify-between">
      <Link to={"/dashboard/events/1/users/1"} className=" items-center w-4/6">
        <div>
          <p>Name User</p>
          <p>Job Applied</p>
        </div>
      </Link>
      <div className="flex items-center">
        <button className="py-2 px-4 border-2 border-blue-900">Message</button>
        <div>
          <p>
            <span className="py-2 px-4 bg-blue-100 rounded-md ml-8">
              Status
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
