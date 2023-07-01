export default function RegisterOrganization() {
  return (
    <div className="max-w-screen-xl ms-auto justify-between h-screen">
      <div className="grid grid-cols-2 gap-4 mb-5 ">
      <form className="mb-4" >
        <h1 className="text-center my-12 text-bold font-inter">Register</h1>
        <div className="mb-6">
          <label for="organiszerName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Organizer Name</label>
          <input type="text" id="organiszerName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Organizer Name" required />
        </div>
        <div className="mb-6">
          <label for="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Organizer Type</label>
          <input type="text" id="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="NYour Organizer Type" required />
        </div>
        <div class="relative max-w-sm mb-4">
        <label for="dateFound" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your date Found</label>
          <input datepicker type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your date Found" />
        </div>
        <div className="mb-6">
          <label for="personName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Person Name</label>
          <input type="text" id="personName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Person Name" required />
        </div>
        <div className="mb-6">
          <label for="contractPerson" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Person Contract</label>
          <input type="text" id="contractPerson" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Person Contract" required />
        </div>
        <div className="mb-6">
          <label for="contractOrganizer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Organizer Contract</label>
          <input type="text" id="contractOrganizer" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Organizer Contrac" required />
        </div>
        <div className="mb-6">
          <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email Organizer</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Email" required />
        </div>
        <div className="mb-6">
          <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Password" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
        </div>
    </div>
  );
}
