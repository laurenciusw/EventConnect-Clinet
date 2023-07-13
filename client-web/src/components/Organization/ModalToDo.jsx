import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addTodo } from "../../store/actions/organizerAction";

export default function ModalToDo({ open, onClose, event }) {
  const [jobdesk, setJobdesk] = useState("");
  const [todo, setTodo] = useState([""]);

  const dispatch = useDispatch();

  const handleAddInput = (e) => {
    e.preventDefault();
    const newInput = [...todo, ""];
    setTodo(newInput);
  };

  const handleValueChange = (e, i) => {
    const inputValue = [...todo];
    inputValue[i] = e.target.value;
    setTodo(inputValue);
  };

  const handleDeleteInput = (e, i) => {
    e.preventDefault();
    const deleteInput = [...todo];
    deleteInput.splice(i, 1);
    setTodo(deleteInput);
  };

  const onChangeHandler = (e) => {
    setJobdesk(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ name: todo, EventId: event.id, JobDeskId: jobdesk }));
    // onClose();
  };

  const handleCloseModal = () => {
    onClose();
    // setData({ summary: "", JobDeskId: "" });
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
        className={`bg-white rounded-xl shadow p-6 transition-all w-1/6 ${
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
          <label htmlFor="name">To Do</label>
          <select
            name="JobDeskId"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  mb-4"
            required
            value={jobdesk}
            onChange={onChangeHandler}
          >
            <option value="" disabled>
              Choose a job
            </option>
            {event &&
              event.JobDesks.map((e) => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
          </select>
          {todo &&
            todo.map((data, i) => {
              return (
                <div className="flex gap-4" key={i}>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                    name="benefit"
                    onChange={(e) => handleValueChange(e, i)}
                    value={data}
                    required
                  />
                  {i == 0 ? (
                    ""
                  ) : (
                    <button
                      onClick={(e) => handleDeleteInput(e, i)}
                      className="text-red-500"
                    >
                      remove
                    </button>
                  )}
                </div>
              );
            })}
          <button
            onClick={(e) => handleAddInput(e)}
            className="text-white bg-gray-600 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Add Todo
          </button>
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
