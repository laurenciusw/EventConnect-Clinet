import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../store/actions/organizerAction";

export default function RegisterOrganization() {
  const [data, setData] = useState({
    organizerName: "",
    type: "",
    dateFound: "",
    personName: "",
    contactPerson: "",
    contactOrganizer: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(register(data));
    navigate("/login/organization");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4 grid grid-cols-1 gap-6">
            <div className="mt-4">
              <form className="mb-4 p-4" onSubmit={onSubmitHandler}>
                <h1 className="text-center text-bold">Register</h1>
                <div className="mb-6">
                  <label
                    htmlFor="organiszerName"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Organizer Name
                  </label>
                  <input
                    type="text"
                    name="organizerName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Organizer Name"
                    required
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="flex justify-between gap-4">
                  <div className="w-3/6">
                    <label
                      htmlFor="type"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Organizer Type
                    </label>
                    <input
                      type="text"
                      name="type"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Organizer Type"
                      required
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="relative w-3/6 mb-6">
                    <label
                      htmlFor="dateFound"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Date Found
                    </label>
                    <input
                      type="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                      onChange={onChangeHandler}
                      name="dateFound"
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-4">
                  <div className="mb-6 w-3/6">
                    <label
                      htmlFor="personName"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Person Name
                    </label>
                    <input
                      type="text"
                      name="personName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Person Name"
                      required
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="mb-6 w-3/6">
                    <label
                      htmlFor="contactPerson"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Person Contact
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Person Contact"
                      required
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="contactOrganizer"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Organizer Contact
                  </label>
                  <input
                    type="text"
                    name="contactOrganizer"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Organizer Contact"
                    required
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email Organizer
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Email"
                    required
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Password"
                    required
                    onChange={onChangeHandler}
                    autoComplete="false"
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
