export default function FormAddEvent() {
  return (
    <div className="max-w-screen-xl ms-auto justify-between h-screen">
      <div className="grid grid-cols-2 gap-4 mb-5 ">
      <form className="mb-4" >
        <h1 className="text-center my-12 text-bold font-inter">New Event</h1>
        <div className="mb-6">
          <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your New Event Name</label>
          <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your New Event Name" required />
        </div>
        <div className="mb-6">
          <label for="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your New Event Location</label>
          <input type="text" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your New Event Location" required />
        </div>
        <div class="relative max-w-sm mb-4">
        <label for="startDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Start Date Event</label>
          <input datepicker type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Start date" />
        </div>
        <div className="mb-6">
          <label for="imgUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your image Event</label>
          <input type="file" id="imgUrl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Image Event" required />
        </div>
        <div className="mb-6">
        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Event Description</label>
          <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" your description"></textarea>
         </div>
         <div class="relative max-w-sm mb-4">
        <label for="endDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your End Date Event</label>
          <input datepicker type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="End date" />
        </div>
         <div class="relative max-w-sm mb-4">
        <label for="registrationDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Registration Date Event</label>
          <input datepicker type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Registration Date Event" />
        </div>
        <div className="items-center mb-4">
        <label for="categories" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Event Category</label>
        <select id="categories" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4">
          <option selected>Choose a Category</option>
          <option value="US">nature</option>
          <option value="CA">balanja</option>
          <option value="FR">pemerintahan</option>
          <option value="DE">perkebuann</option>
        </select>
        </div>
        <div className="items-center mb-4">
        <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Event Status</label>
        <select id="status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4">
          <option selected>Choose a Status</option>
          <option value="US">Done</option>
          <option value="CA">Pendng</option>
          <option value="FR">Cancel</option>
        </select>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
        </div>
    </div>
  );
}
