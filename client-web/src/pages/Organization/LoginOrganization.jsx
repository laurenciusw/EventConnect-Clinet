import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function LoginOrganization() {
  const [data, setData] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { user } = useSelector((state) => state.user);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(login(data));
  };

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-blue-100 h-screen">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div className="flex rounded-lg h-3/6 shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0">
          <div className="flex flex-col w-full md:w-1/2 p-4">
            <div className="flex flex-col flex-1 justify-center ">
              <div className="w-full mt-4">
                <form className="w-3/4 mx-auto" onSubmit={onSubmitHandler}>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Email
                    </label>
                    <input
                      onChange={onChangeHandler}
                      type="email"
                      name="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                      placeholder="Email"
                      required
                      value={data.email}
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Password
                    </label>
                    <input
                      onChange={onChangeHandler}
                      type="password"
                      name="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                      placeholder="Password"
                      required
                      value={data.password}
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mt-6"
                  >
                    Login
                  </button>
                </form>
                <div className="text-center mt-4">
                  <Link
                    to={"/register/user"}
                    className="no-underline hover:underline text-blue-dark text-xs"
                  >
                    Doesn't have account? Sign up now?
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hidden md:flex md:flex-col justify-center items-center mx-auto md:w-1/2 rounded-r-lg"
            style={{
              background: `url(
                ""
              )`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div className="bg-blue-900 h-full w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
