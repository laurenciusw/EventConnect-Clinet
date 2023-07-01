export default function RegisterUser() {
  return (
    <div className="max-w-screen-xl ms-auto justify-between h-screen">
      <div className="grid grid-cols-2 gap-4 mb-5 ">
      <form className="mb-4" >
        <h1 className="text-center my-12 text-bold font-inter">Register</h1>
        <div className="mb-6">
          <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
          <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Username" required />
        </div>
        <div className="mb-6">
          <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Email" required />
        </div>
        <div className="mb-6">
          <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Password" required />
        </div>
        <label for="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose gender</label>
        <div className="flex items-center mb-4">
            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
        </div>
        <div className="flex items-center mb-4">
            <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
        </div>
        <div class="relative max-w-sm mb-4">
        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Birth Day</label>
          <input datepicker type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
        </div>
        <div className="items-center mb-4">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your province</label>
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4">
          <option selected>Choose a province</option>
          <option value="US">Riau</option>
          <option value="CA">Sumatra Utara</option>
          <option value="FR">Yogyakarta</option>
          <option value="DE">DKI Jakarja</option>
        </select>
        </div>
        <div className="items-center mb-4">
        <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your city</label>
        <select id="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4">
          <option selected>Choose a City</option>
          <option value="US">Pekanbaru</option>
          <option value="CA">Sleman</option>
          <option value="FR">Medan</option>
          <option value="DE">Cianjur</option>
        </select>
        </div>
        <div className="mb-6">
          <label for="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone Number</label>
          <input type="text" id="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Phone Number" required/>
        </div>
        <div className="mb-6">
          <label for="pictureProfile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Picture Profile</label>
          <input type="file" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New picturt Profile" required />
        </div>
        <div className="mb-6">
        <label for="jobdesk" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">JOB Description</label>
          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your description"></textarea>
         </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
        </div>
      

    </div>
  );
}
