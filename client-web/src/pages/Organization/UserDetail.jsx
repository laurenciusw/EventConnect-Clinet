import { useState } from "react";

export default function UserDetail() {
  const [status, setStatus] = useState("");

  const onChangeHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className="px-8 sm:ml-64">
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center h-screen">
          <div className="w-3/6">
            <div className="my-5">
              <h2 className="font-bold text-lg">Name</h2>
              <p>Name</p>
            </div>
            <div className="my-5">
              <h2 className="font-bold text-lg">Person Job Preference</h2>
              <p>Job</p>
            </div>
            <div className="my-5">
              <h2 className="font-bold text-lg">Gender</h2>
              <p>Gender</p>
            </div>
            <div className="my-5">
              <h2 className="font-bold text-lg">Birth Date</h2>
              <p>Birth Date</p>
            </div>
            <div className="my-5">
              <h2 className="font-bold text-lg">Contact Person</h2>
              <p>Email: email</p>
              <p>Phone Number: number</p>
            </div>
            <div className="my-5">
              <h2 className="font-bold text-lg">Location</h2>
              <p>Location</p>
            </div>
            <div className="my-5">
              <h2 className="font-bold text-lg">Summary</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus quam eum soluta? Totam vitae blanditiis numquam sapiente
                quas, beatae praesentium inventore, facere ullam repudiandae,
                illum tempora molestiae explicabo saepe accusantium.
              </p>
            </div>
          </div>
          <div className="">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
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
      </div>
    </div>
  );
}
