import { Link } from "react-router-dom";

export default function ProfileUser() {
  return (
    <div className="bg-gray-100 min-h-screen">
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 grid grid-cols-2 gap-6">
          <div className="flex items-center">
          <img src="https://e0.pxfuel.com/wallpapers/932/376/desktop-wallpaper-stylish-boys-cool-d-profile-pics-for-facebook-whatsapp-pretty-boys.jpg" alt="" />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Your Profile</h3>
            <h4 className="text-gray-700">Name:T.rizki dinelvi pratama</h4>
            <h4 className="text-gray-700">email:rizki@gmail.com</h4>
            <h4 className="text-gray-700">gender:male</h4>
            <h4 className="text-gray-700">taggaallahir :02-04-2000</h4>
            <h4 className="text-gray-700">province :riau</h4>
            <h4 className="text-gray-700">city : pekanbaru</h4>
            <h4 className="text-gray-700">no.HP : 0834525</h4>
            <Link to={"/profile/edit"} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-36">Edit Profile</Link>
          </div>
        </div>
      </div>
    </main>
  </div>
  );
}


