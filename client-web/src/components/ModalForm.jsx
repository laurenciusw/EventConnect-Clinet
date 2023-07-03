import React, { useState } from "react";

export default function ModalForm({ open, onClose }) {
  const [data, setData] = useState({
    summary: "",
    JobDeskId: "",
  });

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ summary: "", JobDeskId: "" });
    onClose();
  };

  const handleCloseModal = () => {
    onClose();
    setData({ summary: "", JobDeskId: "" });
  };

  return (
    <div
      onClick={handleCloseModal}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div className="flex justify-between">
          <button
            onClick={handleCloseModal}
            className="text-gray-400 bg-white hover:text-gray-600"
          >
            X
          </button>
        </div>

        <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
          <label htmlFor="name">Summary</label>
          <textarea
            type="text"
            className="border border-gray-300 rounded px-2 py-1 w-96 mb-2"
            name="summary"
            rows={10}
            cols={25}
            placeholder="Tell us about you"
            onChange={handleOnChange}
            value={data.summary}
          />
          <label htmlFor="jobdesk">Jobdesk</label>
          <select
            id="underline_select"
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            onChange={handleOnChange}
            value={data.JobDeskId}
            name="JobDeskId"
          >
            <option value="" disabled>
              What would job do you want?
            </option>
            {["Job", "Job"].map((e, i) => {
              return (
                <option value={e} key={i} className="">
                  {e}
                </option>
              );
            })}
          </select>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="px-3 py-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
