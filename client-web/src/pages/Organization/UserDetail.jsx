import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getUserDetail,
  updateUserStatus,
} from "../../store/actions/organizationAction";
import moment from "moment";

export default function UserDetail() {
  const [status, setStatus] = useState("");
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.organizer);

  useEffect(() => {
    dispatch(getUserDetail(userId));
  }, []);

  // useEffect(() => {
  //   if (user) {
  //     setStatus(user.status);
  //   }
  // }, [user]);

  const onChangeHandler = (e) => {
    setStatus(e.target.value);
    dispatch(updateUserStatus(userId, e.target.value));
  };
  return (
    <div className="px-8 sm:ml-64">
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center h-screen">
          <div className="w-3/6">
            <div className="my-5">
              <h2 className="font-bold text-lg">Name</h2>
              <p>{user?.User.username}</p>
            </div>
            <div className="my-5">
              <h2 className="font-bold text-lg">Person Job Preference</h2>
              <p>{user?.JobDesk.name}</p>
            </div>
            <div className="my-5">
              <h2 className="font-bold text-lg">Gender</h2>
              <p>{user?.User.gender}</p>
            </div>
            <div className="my-5">
              <h2 className="font-bold text-lg">Birth Date</h2>
              <p>{moment(user?.User.birthDate).format("LL")}</p>
            </div>
            <div className="my-5">
              <h2 className="font-bold text-lg">Contact Person</h2>
              <p>Email: {user?.User.email}</p>
              <p>Phone Number: {user?.User.phoneNumber}</p>
            </div>
            <div className="my-5">
              <h2 className="font-bold text-lg">Location</h2>
              <p>
                {user?.User.city}, {user?.User.province}
              </p>
            </div>
            <div className="my-5">
              <h2 className="font-bold text-lg">Summary</h2>
              <p>{user?.summary}</p>
            </div>
          </div>
          <div className="">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            {/* <img src={user?.User.profilePicture} alt="" /> */}
            <label className=" mt-4 block font-medium text-gray-900">
              Update status
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
              {["Accepted", "Rejected", "Done"].map((e, i) => {
                return (
                  <option value={e} key={i} className="">
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
