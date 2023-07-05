import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { register } from "../../store/actions/userAction";

export default function RegisterUser() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "Male",
    birthDate: "",
    province: "",
    city: "",
    phoneNumber: "",
    profilePicture: "",
  });

  const [gender, setGender] = useState("Male");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    if (e.target.name === "gender") {
      setGender(e.target.value);
    }
    if (e.target.name === "province") {
      console.log("yaa", e.target.value);
      fetchCity(e.target.value);
    }
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      await dispatch(register(data));
      navigate("/login/user");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProvince = async () => {
    const { data } = await axios.get(
      "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
    );
    setProvince(data);
  };
  const fetchCity = async (id_provinsi) => {
    const { data } = await axios.get(
      `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id_provinsi}.json`
    );
    setCity(data);
  };

  useEffect(() => {
    fetchProvince();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4 grid grid-cols-1 gap-6">
            <div className="mt-4">
              <form className="mb-4 p-4" onSubmit={onSubmitHandler}>
                <h1 className="text-center my-4 text-bold ">
                  Register to be volunteer
                </h1>
                <div className="mb-6">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Username
                  </label>
                  <input
                    onChange={onChangeHandler}
                    type="text"
                    name="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Username"
                    value={data.username}
                    required
                  />
                </div>
                <div className="mb-6">
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Email"
                    required
                    value={data.email}
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
                    onChange={onChangeHandler}
                    type="password"
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Password"
                    required
                    value={data.password}
                    autoComplete="false"
                  />
                </div>
                <div className="flex justify-between gap-4">
                  <div className="w-3/6">
                    <label
                      htmlFor="gender"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Choose gender
                    </label>
                    <div className="flex items-center mb-4">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value="Female"
                        name="gender"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                        onChange={onChangeHandler}
                        checked={gender === "Female"}
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="ml-2 text-sm font-medium text-gray-400"
                      >
                        Female
                      </label>
                    </div>
                    <div className="flex items-center mb-4">
                      <input
                        id="default-radio-2"
                        type="radio"
                        value="Male"
                        name="gender"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                        onChange={onChangeHandler}
                        checked={gender === "Male"}
                      />
                      <label
                        htmlFor="default-radio-2"
                        className="ml-2 text-sm font-medium text-gray-400"
                      >
                        Male
                      </label>
                    </div>
                  </div>
                  <div className="relative mb-4 w-3/6">
                    <label
                      htmlFor="birthDate"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Birth Date
                    </label>
                    <input
                      onChange={onChangeHandler}
                      type="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                      placeholder="Select date"
                      name="birthDate"
                      value={data.birthDate}
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-4">
                  <div className="items-center mb-4 w-3/6">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Select province
                    </label>
                    <select
                      onChange={onChangeHandler}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  mb-4"
                      value={data.province}
                      name="province"
                    >
                      <option value="" disabled>
                        Choose province
                      </option>
                      {province &&
                        province.map((e) => {
                          return (
                            <option value={e.id} key={e.id}>
                              {e.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="items-center mb-4 w-3/6">
                    <label
                      htmlFor="city"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Select city
                    </label>
                    <select
                      onChange={onChangeHandler}
                      id="city"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  mb-4"
                      name="city"
                      value={data.city}
                      disabled={!city}
                    >
                      <option value="" disabled>
                        Choose city
                      </option>
                      {city &&
                        city.map((e) => {
                          return (
                            <option value={e.id} key={e.id}>
                              {e.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
                <div className="flex justify-between gap-4">
                  <div className="mb-6 w-3/6">
                    <label
                      htmlFor="phoneNumber"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Phone Number
                    </label>
                    <input
                      onChange={onChangeHandler}
                      type="text"
                      name="phoneNumber"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder=" Phone Number"
                      required
                      value={data.phoneNumber}
                    />
                  </div>
                  <div className="mb-6 w-3/6">
                    <label
                      htmlFor="profilePicture"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Picture Profile
                    </label>
                    <input
                      onChange={onChangeHandler}
                      type="text"
                      name="profilePicture"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Url"
                      required
                      value={data.profilePicture}
                    />
                    {/* <input
                      type="file"
                      id="username"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="New picturt Profile"
                      required
                    /> */}
                  </div>
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
