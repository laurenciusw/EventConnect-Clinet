import logo from "../assets/e-connect-logo-footer.png";

export default function Footer() {
  return (
    <footer className="shadow bg-blue-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <img src={logo} className="h-12 mr-3" alt="Flowbite Logo" />
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center ">
          © 2023 EventConnect™ . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
