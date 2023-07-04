import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editEvent } from "../../store/actions/organizerAction";
import { fetchDataById } from "../../store/actions/eventAction";
import { useParams } from "react-router-dom";
import moment from "moment";

export default function FormEditEvent() {
  const [jobdesk, setJobdesk] = useState([{ name: "", id: "", EventId: "" }]);
  const [benefit, setBenefit] = useState([{ name: "", id: "", EventId: "" }]);
  const [data, setData] = useState({
    name: "",
    location: "",
    startDate: "",
    imageUrl: "",
    description: "",
    endDate: "",
    registrationDate: "",
    category: "",
    status: "",
  });
  const dispatch = useDispatch();
  const { id } = useParams();
  const { event } = useSelector((state) => state.event);

  useEffect(() => {
    dispatch(fetchDataById(id));
  }, []);

  useEffect(() => {
    console.log(event);
    if (event) {
      setData({
        name: event.name,
        location: event.location,
        startDate: moment(event.startDate).format("YYYY-MM-DD"),
        imageUrl: event.imageUrl,
        description: event.description,
        endDate: moment(event.endDate).format("YYYY-MM-DD"),
        registrationDate: moment(event.registrationDate).format("YYYY-MM-DD"),
        category: event.category,
        status: event.status,
      });
      if (event.Benefits) {
        const benefit = event.Benefits.map((e) => e.name);
        setBenefit(event.Benefits);
      }
      if (event.JobDesks) {
        const jobdesk = event.JobDesks.map((e) => e.name);
        setJobdesk(event.JobDesks);
      }
    }
  }, [event]);

  const handleAddInput = (e, type) => {
    e.preventDefault();
    if (type === "jobdesk") {
      const newInput = [...jobdesk, ""];
      setJobdesk(newInput);
    } else {
      const newInput = [...benefit, ""];
      setBenefit(newInput);
    }
  };

  const handleValueChange = (e, i, type) => {
    if (type === "jobdesk") {
      const inputValue = [...jobdesk];
      inputValue[i] = e.target.value;
      setJobdesk(inputValue);
    } else {
      const inputValue = [...benefit];
      inputValue[i] = e.target.value;
      setBenefit(inputValue);
    }
  };

  const handleDeleteInput = (e, i, type) => {
    e.preventDefault();
    if (type === "jobdesk") {
      const deleteInput = [...jobdesk];
      deleteInput.splice(i, 1);
      setJobdesk(deleteInput);
    } else {
      const deleteInput = [...benefit];
      deleteInput.splice(i, 1);
      setBenefit(deleteInput);
    }
  };

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const payload = {
      ...data,
      Benefits: benefit,
      JobDesks: jobdesk,
    };
    dispatch(editEvent(event.id, payload));
  };

  return (
    <section className="bg-gray-100">
      <div className="max-w-screen-xl flex flex-wrap mx-auto justify-between">
        <div className="mb-5 w-full ml-64 p-4">
          <form className="mb-4" onSubmit={onSubmitHandler}>
            <h1 className="text-center my-4 text-bold">Add Event</h1>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Event Name
              </label>
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder=" Event Name"
                required
                value={data.name}
                onChange={onChangeHandler}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Event Location
              </label>
              <input
                type="text"
                name="location"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder=" Event Location"
                required
                value={data.location}
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex justify-between gap-4">
              <div className="relative mb-4 w-2/6">
                <label
                  htmlFor="startDate"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Start Date
                </label>
                <input
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                  placeholder="Start date"
                  name="startDate"
                  required
                  value={data.startDate}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="relative mb-4 w-2/6">
                <label
                  htmlFor="endDate"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  End Date
                </label>
                <input
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                  placeholder="End date"
                  name="endDate"
                  required
                  value={data.endDate}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="relative mb-4 w-2/6">
                <label
                  htmlFor="registrationDate"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Registration Deadline
                </label>
                <input
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                  placeholder=" Registration Date Event"
                  name="registrationDate"
                  required
                  value={data.registrationDate}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="imageUrl"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Poster Image
              </label>
              {/* <input
                type="file"
                name="imageUrl"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Image Event"
                required
              /> */}
              <input
                type="text"
                name="imageUrl"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Url image Event"
                required
                value={data.imageUrl}
                onChange={onChangeHandler}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Event Description
              </label>
              <textarea
                name="description"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Event Description"
                value={data.description}
                onChange={onChangeHandler}
                required
              ></textarea>
            </div>
            <div className="flex justify-between gap-4">
              <div className="items-center mb-4 w-3/6">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Event Category
                </label>
                <select
                  name="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  mb-4"
                  required
                  value={data.category}
                  onChange={onChangeHandler}
                >
                  <option value="" disabled>
                    Choose a Category
                  </option>
                  {[
                    "Cultural and Arts",
                    "Sports Events",
                    "Beauty Pageants",
                    "Music and Concerts",
                    "Food and Beverage Events",
                    "Others",
                  ].map((e, i) => {
                    return (
                      <option key={i} value={e}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="items-center mb-4 w-3/6">
                <label
                  htmlFor="status"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Event Status
                </label>
                <select
                  name="status"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  mb-4"
                  required
                  value={data.status}
                  onChange={onChangeHandler}
                >
                  <option value="" disabled>
                    Choose a Status
                  </option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between gap-4 mb-6">
              <div className="w-3/6">
                <label
                  htmlFor="jobdesk"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Jobdesk
                </label>
                {jobdesk &&
                  jobdesk.map((data, i) => {
                    return (
                      <div className="flex gap-4" key={i}>
                        <input
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                          name="jobdesk"
                          onChange={(e) => handleValueChange(e, i, "jobdesk")}
                          value={data.name}
                          required
                        />
                        {/* {i == 0 ? (
                          ""
                        ) : (
                          <button
                            onClick={(e) => handleDeleteInput(e, i, "jobdesk")}
                            className="text-red-500"
                          >
                            remove
                          </button>
                        )} */}
                      </div>
                    );
                  })}
                {/* <button
                  onClick={(e) => handleAddInput(e, "jobdesk")}
                  className="text-white bg-gray-600 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Add Jobdesk
                </button> */}
              </div>
              <div className="w-3/6">
                <label
                  htmlFor="jobdesk"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Benefit
                </label>
                {benefit &&
                  benefit.map((data, i) => {
                    return (
                      <div className="flex gap-4" key={i}>
                        <input
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                          name="benefit"
                          onChange={(e) => handleValueChange(e, i, "benefit")}
                          value={data.name}
                          required
                        />
                        {/* {i == 0 ? (
                          ""
                        ) : (
                          <button
                            onClick={(e) => handleDeleteInput(e, i, "benefit")}
                            className="text-red-500"
                          >
                            remove
                          </button>
                        )} */}
                      </div>
                    );
                  })}
                {/* <button
                  onClick={(e) => handleAddInput(e, "benefit")}
                  className="text-white bg-gray-600 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Add Benefit
                </button> */}
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Edit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
